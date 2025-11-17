"use client";
import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

import { MutableRefObject } from "react";
import Blobity from "blobity";

interface HeroProps {
  blobity: MutableRefObject<Blobity | null>;
}

export default function Works({ blobity }: HeroProps) {
  const { setSectionInView } = useView();
  useEffect(() => {
    if (blobity.current) {
    }
  }, [blobity]);

  const works = [
    {
      title: "Scannet.AI",
      gitLink: "https://github.com/saviourpromise/scannet",
      liveLink: "https://scannetai.vercel.app/",
      about:
        "SCANNET.AI is an AI-driven health and wellness detection app and tool used for checking and monitoring heart rate using facial screen detection to analyze results concerning the status of human heart rate. {Still In Development}",
      stack: [
        "nextjs",
        "javascript",
        "typescript",
        "tailwindcss",
        "vanilla css",
      ],
      img: "/SCANNET.png",
    },
    {
      title: "LETMEIN",
      gitLink: "https://github.com/solomonleke/LetMeIn-app",
      liveLink: "https://let-me-in-app.vercel.app",
      about:
        "LETMEIN  is an access control software that enables it customers to manage access to thier living space. It achieves this by creating a network of three application. Estate Manager / Admin application, Resident / User Application and Security Application. I and my Team worked together on this project",
      stack: [
        "react",
        "chakra ui",
        "framer motion",
        "jquery",
        "redux",
        "tailwindcss",
        "react-router",
      ],
      img: "/Desktop - 3.png",
    },
        {
      title: "ONE-BY-ONE",
      gitLink: "https://github.com/solomonleke/One-by-one",
      liveLink: "https://onebyone.ng/",
      about:
        "One by One is an innovative digital platform dedicated to empowering disadvantaged students by connecting them with sponsors and mentors to support their academic journey. The platform focuses on creating opportunities for teenage students to access life-changing scholarships and attend top universities. Through a combination of mentorship, sponsorship, and a secure, anonymous interface, One by One is building a scalable system to foster equitable education access.",
      stack: [
        "react",
        "chakra ui",
        "framer motion",
        "jquery",
        "firebase",
        "redux",
        "tailwindcss",
      ],
      img: "/onebyone.png",
    },
    {
      title: "Odumoducordion",
      gitLink: "https://github.com/saviourpromise/odumodu-accordion",
      liveLink: "https://www.npmjs.com/package/odumodu-accordion",
      about:
        "Odumoducordion is a sleek, animated, and reusable React accordion component built with ReactJs, Tailwind CSS and Framer Motion. It supports single or multiple open states, is accessible and responsive by default, and can be easily integrated into any React project with minimal setup.",
      stack: ["reactjs", "javascript", "tailwindcss", "framer motion"],
      img: "/npm.PNG",
    },
    {
      title: "AgriLogiz",
      gitLink: "https://github.com/agrilogiz/front-end-codes",
      liveLink: "https://agrilogiz.ng/",
      about:
        "AgriLogiz is a smart logistics platform that connects farmers with trusted drivers to transport agricultural goods efficiently. Users can also book rides and appointments, making it a versatile solution for both logistics and mobility within rural and farming communities.",
      stack: [
        "reactjs",
        "javascript",
        "tailwindcss",
        "vanilla css",
        "framer motion",
      ],
      img: "/agrilogiz.png",
    },
    {
      title: "Crystals",
      gitLink: "https://github.com/saviourpromise/crystals",
      liveLink: "https://crystals-alpha.vercel.app",
      about:
        "Crystals Trading Hub is an innovative platform focused on transforming trading education. I developed the website to provide accessible, in-depth trading knowledge paired with dedicated mentorship, aimed at fostering informed decision-making and long-term success for aspiring traders.",
      stack: ["react", "tailwindCss", "javascript", "framer motion"],
      img: "/trade.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
