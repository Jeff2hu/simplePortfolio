interface TechStack {
  label: string;
  tools: string;
}

interface ProjectCardProps {
  id: number;
  title: string;
  titleLink?: string;
  date: string;
  techStack: TechStack[];
  description?: string[];
  technicalDetails?: string[];
}

const ProjectCard = ({
  id,
  title,
  titleLink,
  date,
  techStack,
  description,
  technicalDetails,
}: ProjectCardProps) => {
  const TitleComponent = () => {
    if (titleLink) {
      return (
        <h2
          className="text-4xl font-bold cursor-pointer hover:text-accent transition-all duration-300 underline underline-offset-4 text-blue-600"
          onClick={() => window.open(titleLink, "_blank")}
        >
          {title}
        </h2>
      );
    }
    return <h2 className="text-4xl font-bold text-primary">{title}</h2>;
  };

  return (
    <div className="flex flex-col gap-8 p-8" id={`project-card-${id}`}>
      <div className="flex flex-col gap-6 p-8 bg-gradient-to-r from-primary-foreground/10 to-primary/20 backdrop-blur-md shadow-md rounded-xl">
        <TitleComponent />
        <p className="text-base text-primary">{date}</p>

        <div className="space-y-2">
          {techStack.map((tech, index) => (
            <p key={index} className="text-xl font-semibold">
              {tech.label}{" "}
              <span className="text-primary font-bold">{tech.tools}</span>
            </p>
          ))}
        </div>

        {description && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">專案說明</h3>
            <div className="text-lg text-primary leading-relaxed">
              {description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        )}

        {technicalDetails && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">技術使用</h3>
            <div className="text-lg text-primary leading-relaxed">
              {technicalDetails.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
