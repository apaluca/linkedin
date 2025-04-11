import { useNavigate } from "react-router-dom";

const CourseRecommendations = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Excel VBA: Managing Files and Data (2020)",
      duration: "3h 46m",
      thumbnail:
        "https://media.licdn.com/dms/image/v2/C4E0DAQG7LTCbUyeshg/learning-public-crop_288_512/learning-public-crop_288_512/0/1602604715218?e=2147483647&v=beta&t=zNR7z5Q1EGltB77iEB9ckllOjuHGgiRAtCQ55Vj4VX8",
    },
    {
      id: 2,
      title: "Python Data Structures and Algorithms",
      duration: "2h 19m",
      thumbnail:
        "https://media.licdn.com/dms/image/v2/D560DAQHAyPtS4ZsHfA/learning-public-crop_288_512/learning-public-crop_288_512/0/1703185888414?e=2147483647&v=beta&t=8mUXah_wot0tdq8ZpKhUJEgMUKP-wIXYg2iNC8bEJKA",
    },
    {
      id: 3,
      title: "Learning Functional Programming with JavaScript ES6+",
      duration: "3h 8m",
      thumbnail:
        "https://media.licdn.com/dms/image/v2/D4E0DAQHBDe-qSJ3vaQ/learning-public-crop_288_512/learning-public-crop_288_512/0/1734460646672?e=2147483647&v=beta&t=JSaW1oWI17iE0Qw4pggyy03lmVTXBfv7fyefPnACI6I",
    },
  ];

  return (
    <section className="bg-white rounded-lg mb-4 shadow-card overflow-hidden">
      <h2 className="text-lg font-bold p-4 border-b border-gray-200">
        Add new skills with these courses
      </h2>

      <ul>
        {courses.map((course) => (
          <li
            key={course.id}
            className="flex p-3 hover:bg-gray-50 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <div className="relative mr-2 flex-shrink-0">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-24 h-14 object-cover rounded"
              />
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                {course.duration}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm line-clamp-2">
                {course.title}
              </h3>
            </div>
          </li>
        ))}
      </ul>

      <div className="p-3 px-4 border-t border-gray-200">
        <button
          className="w-full py-1.5 px-3 border border-linkedin-blue rounded-full text-linkedin-blue font-medium hover:bg-linkedin-lightBlue text-sm"
          onClick={() => navigate("/login")}
        >
          See all courses
        </button>
      </div>
    </section>
  );
};

export default CourseRecommendations;
