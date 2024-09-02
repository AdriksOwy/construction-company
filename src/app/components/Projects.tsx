import Carousel from "./Carousel";

const Projects: React.FC = () => {
  return (
    <div
      className="flex flex-col items-start justify-center gap-6 2xl:gap-12 p-4 sm:p-8 lg:p-12 2xl:p-44 2xl:pt-0"
      id="projects"
    >
      <h1 className="text-xl sm:text-2xl 2xl:text-3xl underline underline-offset-8 decoration-amber-400 font-extrabold">
        Projects
      </h1>

      <Carousel />
    </div>
  );
};

export default Projects;
