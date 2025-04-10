const Experience = ({ experience }) => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-3">Experience</h2>

      <ul className="space-y-4">
        {experience.map((exp, index) => (
          <li key={index} className="flex">
            <div className="mr-2 flex-shrink-0">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 object-contain border border-gray-200 rounded"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f";
                }}
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <div className="text-sm text-gray-700">{exp.company}</div>
              <div className="text-sm text-gray-500">{exp.duration}</div>
              {exp.location && (
                <div className="text-sm text-gray-500">{exp.location}</div>
              )}
              {exp.description && (
                <div className="mt-2 text-sm text-gray-700 whitespace-pre-line">
                  {exp.description}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
