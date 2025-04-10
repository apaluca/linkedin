const Education = ({ education }) => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-3">Education</h2>

      <ul className="space-y-4">
        {education.map((edu, index) => (
          <li key={index} className="flex">
            <div className="mr-2 flex-shrink-0">
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="w-12 h-12 object-contain border border-gray-200 rounded"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://static.licdn.com/aero-v1/sc/h/6qpnald1ddva78jx4bnnl3vw";
                }}
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">{edu.school}</h3>
              {edu.degree && (
                <div className="text-sm text-gray-700">{edu.degree}</div>
              )}
              {edu.duration && (
                <div className="text-sm text-gray-500">{edu.duration}</div>
              )}
              {edu.description && (
                <div className="mt-2 text-sm text-gray-700">
                  {edu.description}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
