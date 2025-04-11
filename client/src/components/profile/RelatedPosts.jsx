import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RelatedPosts = () => {
  const [expandedPosts, setExpandedPosts] = useState(false);
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      author: {
        name: "Dr. Natalia Bobro",
        profileImage:
          "https://media.licdn.com/dms/image/v2/D5603AQHOG2wGMpKz6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719034164764?e=2147483647&v=beta&t=m8aFjMbWbczVCjmY2kB9LR7oWTOVSidQAOmELKLvc9U",
      },
      content:
        "The Use of Artificial Intelligence in The Organization of the Educational Process in A Digital Educational Environment Noosphere Laboratory #ai #digital",
      image:
        "https://media.licdn.com/dms/image/sync/v2/D4D27AQEZ5_VnX5-fCg/articleshare-shrink_800/articleshare-shrink_800/0/1726994574178?e=2147483647&v=beta&t=ZcxXkg3OqOKqRyfJrDDg_7FVXZ9-6K2v_7tNMMT6GVk",
      reactions: 3,
    },
    {
      id: 2,
      author: {
        name: "Pavel Salazar-Fernandez",
        profileImage:
          "https://media.licdn.com/dms/image/v2/C4D03AQFL-k5p0kIO8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1608411281110?e=2147483647&v=beta&t=ggc92fOWqQA6Z773nwT3rncVHBpXZSZvAbtUwb4BIww",
      },
      content:
        '"To enable accountability, it is important that the index (database) of such a search engine is populated according to criteria that are transparent, open to scrutiny, and appropriate to the workings of science and other forms of academic research."',
      image:
        "https://media.licdn.com/dms/image/sync/v2/D4E27AQHecD-Tz95SEQ/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1737659646146?e=2147483647&v=beta&t=piCJUp35cc4ggRiDnTRJ-Z2CBZXE1tIIOW8c6ghCnWg",
    },
    {
      id: 3,
      author: {
        name: "Alexandros-Apostolos A. Boulogeorgos",
        profileImage:
          "https://media.licdn.com/dms/image/v2/C4E03AQEdINyolXHl2A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1597045894408?e=2147483647&v=beta&t=0g23fVREYuc7Add6oAPErDw4EsE57aItCTY2azLjB7g",
      },
      content:
        '🎉 🎉 🎉 Some good news! 🎉 🎉 🎉 Our paper "Toward Natively Intelligent Semantic Communications and Networking," authored by Stylianos E. Trevlakis (InnoCube P.C.), Nikolaos Pappas (Linköping University), and Alexandros-Apostolos A. Boulogeorgos (University of Western Macedonia) is again in the list of the most popular papers of IEEE Open Journal of the Communications Society for the month July 2024!',
      image:
        "https://media.licdn.com/dms/image/sync/v2/D4D27AQFJ0rKs_PndAg/articleshare-shrink_800/articleshare-shrink_800/0/1712689833514?e=2147483647&v=beta&t=ifngr7yMvQWoL5-yh6v_t_kDjNksMG9YRvrJl53NmR8",
      reactions: 46,
    },
    {
      id: 4,
      author: {
        name: "'Afeez SOLADOYE",
        profileImage:
          "https://media.licdn.com/dms/image/v2/C5603AQEuZz_YjP9o4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1610005164748?e=2147483647&v=beta&t=ZBy5g_iGV6_lxv8vQQ_w6evTbF5mUDcmYNalqsxaFik",
      },
      content:
        "The acceptance of AI/ML in healthcare can not be overemphasized as many medical practitioners are collaborating with machine learning engineer to develop different ML based solution for prediction and diagnosis of different disease like cancer, stroke and neurodegenerative diseases among others.",
      reactions: 6,
    },
  ];

  // Posts to display (limited based on expandedPosts state)
  const displayPosts = expandedPosts ? posts : posts.slice(0, 3);

  return (
    <section className="bg-white rounded-lg mb-4 shadow-card overflow-hidden">
      <h2 className="text-lg font-bold p-4 border-b border-gray-200">
        Explore more posts
      </h2>

      <ul>
        {displayPosts.map((post) => (
          <li
            key={post.id}
            className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer p-3"
            onClick={() => navigate("/login")}
          >
            {/* Author Info */}
            <div className="flex items-center mb-2">
              <img
                src={
                  post.author.profileImage ||
                  "https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2"
                }
                alt={post.author.name}
                className="w-6 h-6 rounded-full mr-2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2";
                }}
              />
              <span
                className="text-sm text-linkedin-blue font-medium hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/login");
                }}
              >
                {post.author.name}
              </span>
            </div>

            {/* Post Content */}
            <div className="flex">
              <div className="flex-grow pr-2">
                <p className="text-sm text-gray-700 line-clamp-2">
                  {post.content}
                </p>

                {/* Reactions */}
                {post.reactions && (
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <img
                      src="https://static.licdn.com/aero-v1/sc/h/bn39hirwzjqj18ej1fkz55671"
                      alt="Like"
                      className="w-4 h-4"
                    />
                    <span className="ml-1">{post.reactions}</span>
                  </div>
                )}
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="w-[75px] h-[75px] flex-shrink-0 ml-2">
                  <img
                    src={post.image}
                    alt="Post attachment"
                    className="w-full h-full object-cover rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Show More/Less Button */}
      {posts.length > 3 && (
        <div className="p-2 border-t border-gray-200">
          <button
            onClick={() => setExpandedPosts(!expandedPosts)}
            className="flex items-center justify-center w-full text-sm text-linkedin-blue font-medium hover:bg-linkedin-lightBlue p-1 rounded"
          >
            {expandedPosts ? "Show fewer posts" : "Show more posts"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
              className={`ml-1 transition-transform ${
                expandedPosts ? "rotate-180" : ""
              }`}
            >
              <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default RelatedPosts;
