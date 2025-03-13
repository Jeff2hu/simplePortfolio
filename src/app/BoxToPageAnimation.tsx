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
        duration: 2,
        onUpdate: function () {
          setBgOpacity(this.progress());
        },
      }
    );

    // 1. 建立場景
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
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
    for (let i = 0; i < 100; i++) {
      // 隨機選擇幾何體形狀
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

      // 創建隨機顏色
      const randomColor = new THREE.Color(
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.5 + 0.5
      );
      const material = new THREE.MeshStandardMaterial({
        color: randomColor,
        opacity: 0.6,
        transparent: true,
        metalness: 0.3,
        roughness: 0.7,
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

      scene.add(decoration);
      decorations.push(decoration);
    }

    // 2. 創建立方體
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);

    // 3. 添加光源
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // 4. 動畫 - 進入箱子
    gsap.to(camera.position, {
      z: 2,
      duration: 7,
      ease: "power4.out",
      onComplete: () => {
        gsap.to(camera.position, {
          z: 0.1,
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

    // 修改渲染循環，移除漂浮效果
    const animate = () => {
      requestAnimationFrame(animate);

      // 箱子旋轉
      box.rotation.x += 0.005;
      box.rotation.y += 0.005;

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
        })), radial-gradient(circle at center, #e0e7ff 0%, #ede9fe 50%, #f3e8ff 100%)`,
      }}
    >
      {!animationDone && <div ref={mountRef} className="w-full h-full"></div>}
    </div>
  );
};

export default BoxToPageAnimation;
