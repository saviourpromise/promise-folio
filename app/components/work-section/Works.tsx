"use client";
import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "LETMEIN",
      gitLink: "https://letmein.ng",
      liveLink: "https://let-me-in-app.vercel.app",
      about:
        "LETMEIN  is an access control software that enables it customers to manage access to thier living space. It achieves this by creating a network of three application. Estate Manager / Admin application, Resident / User Application and Security Application. I and my Team worked together on this project",
      stack: ["react", "chakra ui", "framer motion", "jquery", "redux", "tailwindcss", "react-router"],
      img: "/letmein.JPG",
    },
    {
      title: "Gidiscapes",
      gitLink: "https://github.com/adex-hub/where-in-the-world",
      liveLink: "https://where-in-the-world-ade.netlify.app/",
      about:
        "A website that allow users to book hotel rooms in the nearest hotel lodges around. Also has the feature to change themes from dark-mode to light-mode. Users can also compare room prices based on location barrier.",
      stack: ["react", "javascript", "tailwindcss", "vanilla css"],
      img: "/hottee.JPG",
    },
    {
      title: "Quickpassword",
      gitLink: "https://github.com/adex-hub/Yourtodo",
      liveLink: "https://yourtodo-v1.vercel.app/",
      about:
        "A fun website where users can generate random, strong, and authenticated password for creating accounts on different sites rather than just trying back-and-forth to create passwords theirself. Passwords have a strong combination of capital letters, small letters, numbers, and symbols which makes it more unique.",
      stack: ["html", "javascript", "bootstrap", "vanilla css"],
      img: "/paa.JPG",
    },
    {
      title: "Crystals Trading Hub",
      gitLink: "https://github.com/saviourpromise/crystals",
      liveLink: "https://crystals-alpha.vercel.app",
      about:
        "Crystals Trading Hub is an innovative platform focused on transforming trading education. I developed the website to provide accessible, in-depth trading knowledge paired with dedicated mentorship, aimed at fostering informed decision-making and long-term success for aspiring traders.",
      stack: ["react", "tailwindCss", "javascript", "framer motion"],
      img: "/five.JPG",
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
