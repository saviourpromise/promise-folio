"use client";
import React from "react";
import TimelineItem from "./TimelineItem";
import Title from "../ui/Title";


const TimelineData = [
  {
    companyImg: "/agri.jpg",
    jobTitle: "Frontend Developer",
    company: "FarmNovation Enterprise",
    jobType: "Contract",
    duration: "September 2024 - Present",
    stuffIDid: [
      "Developed and maintained, troubleshoot and debuged web applications in React",
      "Collaborated with designers, backend developers and fellow frontend developers to implement user interfaces that are visually appealing and highly functional. Integrated APIs and other services",
      "Wrote clean, maintainable and well-documented code. Optimized web applications for maximum performance and user experience",
      "Continuosly discovered, evaluated and implemented new technologies to maximize development efficiency.",
    ],
  },
  {
    companyImg: "/HNG.jpg",
    jobTitle: "Frontend Developer Intern",
    company: "HNG Technologies",
    jobType: "Internship",
    duration: "June 2024 - December 2024",
    stuffIDid: [
      "Came up with cross functional login & sign up page designs that are now integral parts of the tools used within the company.",
      "Led a team of fellow interns to design various templates and UI components common in internal applications such as dashboards, notification tabs, multi-step forms, tables with pagination etc. while making very impactful contributions.",
      "I also helped interns grasp the basics of design enabling them to make meaningful contributions.",
    ],
  },
  {
    companyImg: "/fad.png",
    jobTitle: "Frontend Developer",
    company: "Fadqus Int'l",
    jobType: "Full Time",
    duration: "April 2025 - Present",
    stuffIDid: [
      "Developed and maintained several customer-facing web applications for Fadqus Int’l, improving user engagement and overall performance through responsive, accessible, and intuitive UI design using React.js and Tailwind CSS.",
      "Contributed to the internal tools used for managing gaming services, account sales, and order processing. Implemented dynamic interfaces and reusable components to streamline administrative workflows.",
      "Built an AI-powered chat assistant integrated into the company’s customer service platform, enabling users to get instant support and redirecting to human agents when necessary, improving customer response time and satisfaction.",
      "Collaborated closely with cross-functional teams including designers, backend engineers, and product leads to deliver high-quality features on schedule.",
      "Optimized existing codebases and implemented performance enhancements that reduced page load time and improved application scalability.",
    ],    
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
