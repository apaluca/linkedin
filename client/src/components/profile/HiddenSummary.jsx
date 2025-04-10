const HiddenSummary = () => {
  return (
    <section className="bg-white rounded-lg my-4 p-6 shadow-card">
      <h2 className="text-xl font-normal text-gray-900 mb-4">
        View Paul Aurelian&apos;s full profile
      </h2>

      <ul className="space-y-3 mb-5">
        <li className="flex items-center">
          <span className="inline-flex mr-3 text-gray-500">
            {/* Simple interlocking circles icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="5"
                cy="8"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="11"
                cy="8"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <span className="text-gray-800">See who you know in common</span>
        </li>
        <li className="flex items-center">
          <span className="inline-flex mr-3 text-gray-500">
            {/* Dialogue box icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4C3 3.44772 3.44772 3 4 3H12C12.5523 3 13 3.44772 13 4V10C13 10.5523 12.5523 11 12 11H8L5 13.5V11H4C3.44772 11 3 10.5523 3 10V4Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <span className="text-gray-800">Get introduced</span>
        </li>
        <li className="flex items-center">
          <span className="inline-flex mr-3 text-gray-500">
            {/* Simple person icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="8"
                cy="5"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M4 13C4 11 5.5 9.5 8 9.5C10.5 9.5 12 11 12 13"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <span className="text-gray-800">Contact Paul Aurelian directly</span>
        </li>
      </ul>

      <a
        href="/signup"
        className="inline-block px-5 py-1.5 text-linkedin-blue border border-linkedin-blue rounded-full font-medium hover:bg-linkedin-lightBlue"
      >
        Join to view full profile
      </a>
    </section>
  );
};

export default HiddenSummary;
