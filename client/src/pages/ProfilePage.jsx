import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ProfileBanner from "../components/profile/ProfileBanner";
import ProfileInfo from "../components/profile/ProfileInfo";
import Experience from "../components/profile/Experience";
import Education from "../components/profile/Education";
import CourseRecommendations from "../components/profile/CourseRecommendations";
import RelatedPosts from "../components/profile/RelatedPosts";
import CollaborativeArticles from "../components/profile/CollaborativeArticles";
import Footer from "../components/layout/Footer";
import AppBanner from "../components/common/AppBanner";
import HiddenSummary from "../components/profile/HiddenSummary";
import LoadingScreen from "../components/common/LoadingScreen";
import { useModal } from "../context/ModalContext";
// import axios from "axios";

const ProfilePage = () => {
  const { username } = useParams();
  const { showModalOnce } = useModal();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // In a real app, we would fetch data from the API
        // const response = await axios.get(`/api/profiles/${username || 'paul-gagniuc'}`);
        // setProfileData(response.data);

        // For now, simulate an API call with setTimeout
        setTimeout(() => {
          setProfileData({
            name: "Paul Aurelian Gagniuc",
            title: "Professor at University POLITEHNICA of Bucharest",
            location: "Bucharest, Romania",
            followers: "2K",
            connections: "500+",
            bannerImage:
              "https://media.licdn.com/dms/image/v2/C4E16AQGYjqKiTGHgTw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1643372738640?e=2147483647&v=beta&t=yvGNZeAVr1RFrxEsIZX9aWIUUqox_0Fkc_UPWaBqx9w",
            profileImage:
              "https://media.licdn.com/dms/image/v2/D4E03AQE8WhVEabirRw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1643374443515?e=2147483647&v=beta&t=PEEd2vGzeqoHN8eMVmr5-yo5C4TZt1AWQTHznPoed0M",
            experience: [
              {
                title: "Professor",
                company: "University POLITEHNICA of Bucharest",
                duration: "Sep 2013 - Present · 11 years 8 months",
                description:
                  "Bioinformatics - Course and laboratory\nProgramming Languages - Course and laboratory",
                logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFa0onJgdaHtQ/company-logo_100_100/company-logo_100_100/0/1738230492774/upb1818_logo?e=2147483647&v=beta&t=ruv1Gm5WIMlG0sc2NnRSX4BvQq_Mf3a0zre9CkX9uvE",
              },
              {
                title: "Academic Editor",
                company: "Public Library of Science (PLOS)",
                duration: "May 2020 - Present · 5 years",
                location: "United States",
                description: "Editorial Board of Academic Editors",
                logo: "https://media.licdn.com/dms/image/v2/D560BAQG93PRWCD2VpQ/company-logo_100_100/company-logo_100_100/0/1710403408335/public_library_of_science_logo?e=2147483647&v=beta&t=YOe8rdrv_IL7gwLlFP18oQUcObYUtl-A2gwQy0NNZ-c",
              },
              {
                title: "Senior Software Engineer",
                company: "Renault Group",
                duration: "Sep 2016 - Sep 2021 · 5 years 1 month",
                location: "Bucharest, Romania",
                description:
                  "Automatization, algorithm solutions, and complex software application development.",
                logo: "https://media.licdn.com/dms/image/v2/C4E0BAQF080vspTnXFA/company-logo_100_100/company-logo_100_100/0/1630640203117/renault_logo?e=2147483647&v=beta&t=KRKbfzhP2KAKVq4kK12M6gwancSMnZiT5ZnrNiLPjg0",
              },
            ],
            education: [
              {
                school: "University of Bucharest",
                degree: "-",
                logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGKiJ-U5NEowg/company-logo_100_100/company-logo_100_100/0/1710939163996/unibuc_logo?e=2147483647&v=beta&t=M-qUjhOuM6q-oUliR92riV_C4CNpWf2ul-bCmBVmybc",
              },
            ],
          });
          setLoading(false);

          // Show the modal only once per session, after a short delay for better UX
          setTimeout(() => {
            // This will only show the modal if it hasn't been shown before in this session
            showModalOnce("viewProfile");
          }, 1500);
        }, 1000);
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError("Failed to load profile data. Please try again later.");
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [showModalOnce, username]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linkedin-gray">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-500 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Error Loading Profile
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-linkedin-blue text-white px-4 py-2 rounded-full hover:bg-linkedin-darkBlue"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-linkedin-gray min-h-screen">
      <Navbar />

      <main className="max-w-[1128px] mx-auto pt-[52px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-0 mt-4">
          <div className="lg:col-span-2">
            {/* Profile Card */}
            <div className="bg-white rounded-lg overflow-hidden mb-2 shadow-card">
              <ProfileBanner
                bannerImage={profileData.bannerImage}
                profileImage={profileData.profileImage}
                name={profileData.name}
              />

              <ProfileInfo
                name={profileData.name}
                title={profileData.title}
                location={profileData.location}
                followers={profileData.followers}
                connections={profileData.connections}
              />
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-lg mb-2 shadow-card">
              <Experience experience={profileData.experience} />
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-lg mb-2 shadow-card">
              <Education education={profileData.education} />
            </div>

            {/* Hidden Summary Section (Bottom CTA) */}
            <HiddenSummary />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <CollaborativeArticles />
            <CourseRecommendations />
            <RelatedPosts />
          </div>
        </div>
      </main>

      <Footer />

      {/* App Banner */}
      <AppBanner />
    </div>
  );
};

export default ProfilePage;
