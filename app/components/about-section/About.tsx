"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

import { MutableRefObject } from "react";
import Blobity from "blobity";

interface HeroProps {
  blobity: MutableRefObject<Blobity | null>;
}
const syne = Syne({ subsets: ["latin"] });

export default function About({ blobity }: HeroProps) {
  useEffect(() => {
    if (blobity.current) {
    }
  }, [blobity]);
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I build interfaces and ship AI agents to production
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I am a self-taught Frontend Developer and AI Systems Builder with
            around 3 to 4 years of experience building responsive, production-grade
            interfaces and deploying AI agent infrastructure. My work spans
            React, Next.js, TypeScript, Node.js, Docker, Nginx, and PostgreSQL,
            across both client-facing products and internal tooling.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            On the AI side, I have built and maintained a full agent ecosystem,
            deploying multiple AI instances across two VPS servers, shipping a
            multi-tenant conversation portal, a universal chat widget system,
            real-time bridge servers, and specialized agents for client use
            cases, all running in production.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            I also run TechCircle, a Lagos-based tech community. Every project
            I take on gets my full attention from the first commit to the final
            deployment. Wanna learn more? Here&apos;s <br className="hidden md:block" />
            <Link
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              href={"/Promise_Saviour_CV_001.pdf"}
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript (ES6+), React, React Native, Next.js, TypeScript, HTML5, Git/GitHub, Redux, React Hook Form, Formik.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Tailwind CSS, Shadcn UI, Framer Motion, Styled Components, Chakra UI, CSS3/SCSS, Bootstrap.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              AI & Infrastructure
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Docker, PM2, Nginx, PostgreSQL, Node.js, Cloudflare Workers, Airtable, Resend, VPS deployment.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, FigJam, Corel Draw, Photoshop.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
