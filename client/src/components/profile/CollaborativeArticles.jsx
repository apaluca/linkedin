const CollaborativeArticles = () => {
  return (
    <section className="bg-white rounded-lg mb-4 shadow-card overflow-hidden">
      <div className="p-4">
        <div className="flex items-start">
          <div className="bg-gray-100 p-2 rounded mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zM4 13V2h8v11z"></path>
              <path d="M9 4H7v2h2zm0 3H7v2h2zm0 3H7v2h2z"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold">
              Explore collaborative articles
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              We&apos;re unlocking community knowledge in a new way. Experts add
              insights directly into each article, started with the help of AI.
            </p>
          </div>
        </div>

        <button className="w-full py-1.5 px-3 mt-4 border border-linkedin-blue rounded-full text-linkedin-blue font-medium hover:bg-linkedin-lightBlue text-sm">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default CollaborativeArticles;
