const ProjectCard = ({ title, desc }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ProjectCard;