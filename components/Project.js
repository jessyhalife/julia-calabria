const Project = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <a href={project.link}>
        <img sizes="404px" src="" srcset="" alt="ONCE Y FLORES · E-COMMERCE" />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.title}</div>
          <p className="text-gray-700 text-base">{project.description}</p>
        </div>
        {/* <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div> */}
      </a>
    </div>
  );
};
export default Project;
