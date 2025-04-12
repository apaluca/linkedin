const mongoose = require("mongoose");
const Profile = require("../models/Profile");
const connectDB = require("../config/db");
require("dotenv").config();

// Sample profile data
const profileData = [
  {
    username: "paul-gagniuc",
    name: "Paul Alexei Gagniuc",
    title: "Professor at Lomonosov Moscow State University (MSU)",
    location: "Moscow, Russia",
    followers: 2000,
    connections: 500,
    bannerImage:
      "https://media.licdn.com/dms/image/v2/C4E16AQGYjqKiTGHgTw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1643372738640?e=2147483647&v=beta&t=yvGNZeAVr1RFrxEsIZX9aWIUUqox_0Fkc_UPWaBqx9w",
    profileImage:
      "https://media.licdn.com/dms/image/v2/D4E03AQE8WhVEabirRw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1643374443515?e=2147483647&v=beta&t=PEEd2vGzeqoHN8eMVmr5-yo5C4TZt1AWQTHznPoed0M",
    about:
      "Professor at Lomonosov Moscow State University (MSU) with expertise in Bioinformatics and Programming Languages. Also serving as Academic Editor for the Public Library of Science (PLOS). Previous experience includes Senior Software Engineering at Renault Group focused on automation and algorithm solutions.",
    experience: [
      {
        title: "Professor",
        company: "Lomonosov Moscow State University (MSU)",
        logo: "https://media.licdn.com/dms/image/v2/C560BAQFafJR7i-j8EA/company-logo_100_100/company-logo_100_100/0/1630624560922/________logo?e=1749686400&v=beta&t=yv-0ClRnZM96paGxHskJMJ4XqEqp-u16QzOjUTNJjJE",
        duration: "Sep 2013 - Present · 11 years 8 months",
        location: "Moscow, Russia",
        description:
          "Bioinformatics - Course and laboratory\nProgramming Languages - Course and laboratory",
      },
      {
        title: "Academic Editor",
        company: "Public Library of Science (PLOS)",
        logo: "https://media.licdn.com/dms/image/v2/D560BAQG93PRWCD2VpQ/company-logo_100_100/company-logo_100_100/0/1710403408335/public_library_of_science_logo?e=2147483647&v=beta&t=YOe8rdrv_IL7gwLlFP18oQUcObYUtl-A2gwQy0NNZ-c",
        duration: "May 2020 - Present · 5 years",
        location: "United States",
        description: "Editorial Board of Academic Editors",
      },
      {
        title: "Senior Software Engineer",
        company: "Renault Group",
        logo: "https://media.licdn.com/dms/image/v2/C4E0BAQF080vspTnXFA/company-logo_100_100/company-logo_100_100/0/1630640203117/renault_logo?e=2147483647&v=beta&t=KRKbfzhP2KAKVq4kK12M6gwancSMnZiT5ZnrNiLPjg0",
        duration: "Sep 2016 - Sep 2021 · 5 years 1 month",
        location: "Bucharest, Romania",
        description:
          "Automatization, algorithm solutions, and complex software application development.",
      },
    ],
    education: [
      {
        school: "University of Bucharest",
        degree: "-",
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGKiJ-U5NEowg/company-logo_100_100/company-logo_100_100/0/1710939163996/unibuc_logo?e=2147483647&v=beta&t=M-qUjhOuM6q-oUliR92riV_C4CNpWf2ul-bCmBVmybc",
        duration: "",
        description: "",
      },
    ],
    skills: [
      "Bioinformatics",
      "Programming",
      "Algorithm Development",
      "Teaching",
      "Research",
      "Software Engineering",
      "MATLAB",
      "Python",
      "JavaScript",
      "Data Analysis",
    ],
  },
  // Additional sample profiles
  {
    username: "john-doe",
    name: "John Doe",
    title: "Software Engineer at Tech Company",
    location: "San Francisco, CA",
    followers: 500,
    connections: 300,
    bannerImage: "/images/banner-default.jpg",
    profileImage: "/images/profile-default.jpg",
    about:
      "Experienced software engineer with a passion for building scalable web applications.",
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Tech Company",
        logo: "/images/tech-company-logo.png",
        duration: "Jan 2019 - Present · 3 years 4 months",
        location: "San Francisco, CA",
        description:
          "Building scalable web applications using React, Node.js, and MongoDB.",
      },
      {
        title: "Software Engineer",
        company: "Previous Company",
        logo: "/images/previous-company-logo.png",
        duration: "Jan 2016 - Dec 2018 · 3 years",
        location: "Seattle, WA",
        description:
          "Developed and maintained web applications using Vue.js and Express.",
      },
    ],
    education: [
      {
        school: "University of Washington",
        degree: "Bachelor of Science in Computer Science",
        logo: "/images/uw-logo.png",
        duration: "2012 - 2016",
        description: "Graduated with honors",
      },
    ],
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Vue.js",
      "Express",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    username: "jane-smith",
    name: "Jane Smith",
    title: "Data Scientist at AI Innovations",
    location: "Boston, MA",
    followers: 1200,
    connections: 800,
    bannerImage: "/images/banner-default-2.jpg",
    profileImage: "/images/profile-default-2.jpg",
    about:
      "Data scientist with a focus on machine learning and artificial intelligence applications.",
    experience: [
      {
        title: "Senior Data Scientist",
        company: "AI Innovations",
        logo: "/images/ai-innovations-logo.png",
        duration: "Mar 2020 - Present · 2 years 2 months",
        location: "Boston, MA",
        description:
          "Leading machine learning projects focused on natural language processing and computer vision.",
      },
      {
        title: "Data Scientist",
        company: "Data Analytics Corp",
        logo: "/images/data-analytics-logo.png",
        duration: "Jun 2017 - Feb 2020 · 2 years 9 months",
        location: "New York, NY",
        description:
          "Developed predictive models for financial services clients.",
      },
    ],
    education: [
      {
        school: "Massachusetts Institute of Technology",
        degree: "Master of Science in Computer Science",
        logo: "/images/mit-logo.png",
        duration: "2015 - 2017",
        description: "Specialization in Machine Learning",
      },
      {
        school: "Cornell University",
        degree: "Bachelor of Science in Mathematics",
        logo: "/images/cornell-logo.png",
        duration: "2011 - 2015",
        description: "Minor in Computer Science",
      },
    ],
    skills: [
      "Machine Learning",
      "Python",
      "TensorFlow",
      "PyTorch",
      "Natural Language Processing",
      "Computer Vision",
      "Data Analysis",
      "Statistics",
      "Big Data",
    ],
  },
];

// Function to seed the database
const seedDB = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Check connection
    console.log("Connected to MongoDB successfully for seeding");

    // Delete all existing profiles
    console.log("Clearing existing profiles...");
    await Profile.deleteMany({});

    // Insert new profiles
    console.log("Inserting new profiles...");
    const createdProfiles = await Profile.insertMany(profileData);

    console.log(
      `Database seeded successfully with ${createdProfiles.length} profiles`
    );

    // Close the connection
    await mongoose.connection.close();
    console.log("MongoDB connection closed");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seed function
seedDB();
