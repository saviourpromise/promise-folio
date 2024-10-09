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
    duration: "June 2024 - Present",
    stuffIDid: [
      "Came up with cross functional login & sign up page designs that are now integral parts of the tools used within the company.",
      "Led a team of fellow interns to design various templates and UI components common in internal applications such as dashboards, notification tabs, multi-step forms, tables with pagination etc. while making very impactful contributions.",
      "I also helped interns grasp the basics of design enabling them to make meaningful contributions.",
    ],
  },
  {
    companyImg: "/ZIDIO.jpg",
    jobTitle: "Frontend Developer Intern",
    company: "Zidio Development",
    jobType: "Internship",
    duration: "Aug 2023 - Jan 2024",
    stuffIDid: [
      "Worked with a team of 5 Frontend Developers and a Backend Developer to build a Location Tracker Website that tracks a user's location based on real time. Also built a dashboard where previous and recent locations are shown and saved using (localStorage)",
      "Led a team of fellow interns to design various templates and UI components common in internal applications such as dashboards, notification tabs, multi-step forms, tables with pagination etc. while making very impactful contributions.",
      "Built a Personal Finance Tracker Website that enables users to set monthly budgets for different expense categories. I also provided visual feedback on budget utilization, with color-coded indicators. Frameworks used: NextJs, ReactJs, ChartJs(FRONTEND) - NodeJs, ExpressJs(BACKEND).",
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
