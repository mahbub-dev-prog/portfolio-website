import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <ProjectCard title="Portfolio Website" desc="Personal portfolio using React" />
      <ProjectCard title="CRUD App" desc="Full CRUD system with MERN stack" />
    </section>
  );
};

export default Projects;