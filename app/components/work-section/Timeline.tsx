"use client";
import React from "react";
import TimelineItem from "./TimelineItem";
import Title from "../ui/Title";

const TimelineData = [
  {
    companyImg: "/earlybean.jpeg",
    jobTitle: "Frontend Developer",
    company: "EarlyBean",
    jobType: "Full Time",
    duration: "July 2025 - Present",
    stuffIDid: [
      "Designed and developed responsive, user-friendly interfaces for Earlybean’s web platforms, enabling kids and teens aged 6–17 to manage pocket money, learn budgeting, and practice financial skills through interactive lessons, quizzes, and games.",
      "Built dynamic dashboards and tools for parents to monitor spending, set limits, and track their children’s financial progress, ensuring seamless integration with Earlybean’s spending card and digital wallet systems.",
      "Implemented reusable React.js and Tailwind CSS components to power Earlybean’s school-focused cashless payment system, allowing students to pay for meals, supplies, and activities while accessing learning resources.",
      "Collaborated with designers, backend developers, and product managers to translate Figma designs into high-performance, accessible interfaces that work smoothly across desktop and mobile devices.",
      "Optimized application performance and accessibility, reducing load times and improving overall user experience for both the Earlybean Parent and Youngster apps’ web counterparts.",
      "Integrated API endpoints to fetch real-time transaction data and progress tracking, supporting the platform’s goal of promoting financial literacy for African kids and teens.",
    ],
  },
  {
    companyImg: "/equisettle.jpeg",
    jobTitle: "Frontend Developer",
    company: "Equisettle",
    jobType: "Contract",
    duration: "June 2025 - November 2025",
    stuffIDid: [
      "Built and enhanced core user-facing features for Equisettle’s Accounts Receivable (AR) automation platform using React, ensuring a fast, intuitive, and reliable UI for finance teams.",
      "Implemented dashboards and data-driven components that visualized cash flow forecasts, outstanding invoices, customer payment behavior, and dispute (case) management workflows.",
      "Integrated REST APIs and payment-related services to support invoice uploads, automated reminders, customer portals, and real-time AR insights.",
      "Collaborated closely with designers, backend engineers, and the product team to deliver seamless UX flows across the AR automation suite—ensuring clarity, accessibility, and high responsiveness.",
      "Optimized application performance, reduced load times, and improved rendering efficiency for large invoice datasets and analytics components.",
      "Wrote clean, scalable, and maintainable React code with reusable components and clear technical documentation.",
      "Adopted and integrated modern frontend tools to improve development speed, code quality, and user experience across Equisettle’s finance automation platform.",
    ],
  },
  {
    companyImg: "/agri.jpg",
    jobTitle: "Frontend Developer",
    company: "FarmNovation Enterprise",
    jobType: "Contract",
    duration: "September 2024 - July 2025",
    stuffIDid: [
      "Developed and optimized user-facing features for AgriLogiz, a smart agricultural logistics platform that connects farmers with trusted drivers to transport farm produce efficiently.",
      "Implemented clean, intuitive React interfaces for core platform modules including ride booking, logistics scheduling, driver–farmer matching, and appointment management.",
      "Integrated REST APIs to support real-time logistics operations such as booking confirmations, driver tracking, delivery status updates, and communication between farmers and drivers.",
      "Collaborated with designers and backend developers to deliver a seamless, mobile-responsive UI tailored for rural and agricultural users, ensuring accessibility, speed, and clarity.",
      "Improved platform performance and user experience by optimizing component rendering, state management, and data loading for high-traffic workflows.",
      "Wrote clean, scalable, and well-documented React code using reusable components, modern development patterns, and best practices.",
      "Continuously evaluated and integrated new technologies to enhance development efficiency and deliver a more reliable, user-friendly logistics platform.",
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
  {
    companyImg: "/chess.jpeg",
    jobTitle: "Frontend Developer (Volunteer)",
    company: "Chess In Slums Africa (CISA)",
    jobType: "Volunteer",
    duration: "September 2024 - Present",
    stuffIDid: [
      "Designed and developed user interfaces for internal digital tools that support CISA’s educational and community-impact programs, including authentication flows, dashboards, and administrative panels.",
      "Created cross-functional login and sign-up systems now used across multiple internal applications, improving accessibility and streamlining onboarding for staff, volunteers, and program beneficiaries.",
      "Led a team of interns in designing reusable UI components—such as dashboards, notification systems, multi-step forms, tables with pagination, and activity trackers—that enhance the efficiency of CISA’s operational workflows.",
      "Contributed to the modernization of CISA’s internal design standards by producing scalable templates, style guidelines, and responsive layout structures aligned with the organization’s brand and mission.",
      "Mentored interns by teaching design fundamentals, interface best practices, and collaborative workflows, enabling them to confidently contribute to real CISA projects.",
      "Supported digital initiatives that help CISA manage student data, training schedules, volunteer activities, and program insights, making their impact delivery more organized and technology-driven.",
    ],
  },
{
  companyImg: "/HNG.jpg",
  jobTitle: "Frontend Developer Intern",
  company: "HNG Technologies",
  jobType: "Internship",
  duration: "June 2024 - December 2024",
  stuffIDid: [
    "Designed and developed responsive, user-friendly interfaces for internal applications, including authentication flows, dashboards, notification systems, multi-step forms, and data tables with pagination.",
    "Led a team of interns to create reusable UI components and templates, improving development efficiency and standardizing design across HNG’s internal tools.",
    "Mentored fellow interns on frontend development best practices, design fundamentals, and collaborative workflows, enabling them to contribute effectively to live projects.",
    "Collaborated closely with backend developers and product leads to implement features that enhance usability, streamline workflows, and improve overall platform performance.",
    "Ensured code quality through documentation, clean coding practices, and performance optimization, contributing to a scalable and maintainable frontend architecture."
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
