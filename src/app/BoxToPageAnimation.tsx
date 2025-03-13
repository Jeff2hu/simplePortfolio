"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const BoxToPageAnimation = ({
  onAnimationEnd,
}: {
  onAnimationEnd: () => void;
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [animationDone, setAnimationDone] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    // 背景漸變動畫
    gsap.to(
      {},
      {
        delay: 0.15,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: function () {
          setBgOpacity(Math.min(this.progress() * 0.95, 0.85));
        },
      }
    );

    // 1. 建立場景
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50; // 初始位置，遠離箱子

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // 啟用透明度
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 添加背景裝飾
    const decorations = [];
    for (let i = 0; i < 250; i++) {
      let geometry;
      const shapeType = Math.floor(Math.random() * 4);
      switch (shapeType) {
        case 0:
          geometry = new THREE.IcosahedronGeometry(0.3);
          break;
        case 1:
          geometry = new THREE.TorusGeometry(0.3, 0.1, 8, 16);
          break;
        case 2:
          geometry = new THREE.OctahedronGeometry(0.3);
          break;
        default:
          geometry = new THREE.DodecahedronGeometry(0.3);
      }

      // 使用更科幻的顏色組合
      const colors = [
        new THREE.Color(0x00ff88), // 霓虹綠
        new THREE.Color(0x00ffff), // 青色
        new THREE.Color(0x0088ff), // 明亮藍
        new THREE.Color(0xff00ff), // 霓虹紫
        new THREE.Color(0x8800ff), // 深紫
      ];

      const material = new THREE.MeshStandardMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.8,
        transparent: true,
        metalness: 0.9, // 增加金屬感
        roughness: 0.2, // 降低粗糙度，增加光滑感
        emissive: colors[Math.floor(Math.random() * colors.length)], // 添加發光效果
        emissiveIntensity: 0.5,
      });
      const decoration = new THREE.Mesh(geometry, material);

      // 擴大分布範圍
      decoration.position.set(
        (Math.random() - 0.5) * 60, // 擴大x軸範圍
        (Math.random() - 0.5) * 60, // 擴大y軸範圍
        (Math.random() - 0.5) * 60 // 擴大z軸範圍
      );
      decoration.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // 隨機縮放
      const scale = Math.random() * 0.5 + 0.5;
      decoration.scale.set(scale, scale, scale);

      decoration.rotation.x += 0.01;
      decoration.rotation.y += 0.01;

      scene.add(decoration);
      decorations.push(decoration);
    }

    // 2. 創建立方體
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: 0xaaaaff,
      emissiveIntensity: 0.2,
      opacity: 1,
      metalness: 0.3,
      roughness: 0.8,
    });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);

    // 3. 添加光源
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // 4. 動畫 - 進入箱子
    gsap.to(camera.position, {
      z: 7,
      duration: 5,
      ease: "power4.out",
      onComplete: () => {
        gsap.to(camera.rotation, {
          y: Math.PI * 2, // Rotate 360 degrees
          duration: 3,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.to(camera.position, {
              z: 0.2,
              duration: 0.5,
              ease: "power1.in",
              onComplete: () => {
                gsap.to(renderer.domElement.style, {
                  opacity: 0,
                  duration: 0.1,
                  onComplete: () => {
                    setAnimationDone(true);
                    if (onAnimationEnd) onAnimationEnd();
                  },
                });
              },
            });
          },
        });
      },
    });

    // 修改渲染循環，移除漂浮效果
    const animate = () => {
      requestAnimationFrame(animate);

      // 箱子旋轉
      box.rotation.x += 0.01;
      box.rotation.y += 0.01;

      // 移除裝飾物體的動畫，只保持靜止
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onAnimationEnd]);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, ${
          1 - bgOpacity
        }), rgba(0, 0, 0, ${
          1 - bgOpacity
        })), radial-gradient(circle at center, #0a2472 0%, #1e3b7e 30%, #274690 50%, #2f54c3 100%)`,
      }}
    >
      {!animationDone && <div ref={mountRef} className="w-full h-full"></div>}
    </div>
  );
};

export default BoxToPageAnimation;
