"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";

import { MutableRefObject } from "react";
import Blobity from "blobity";

interface HeroProps {
  blobity: MutableRefObject<Blobity | null>;
}

export default function Hero({ blobity }: HeroProps) {
  useEffect(() => {
    if (blobity.current) {
    }
  }, [blobity]);
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.7,
      ease: easeIn,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const { setSectionInView } = useView();

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);

  return (
    <section
      ref={ref}
      className="pt-36 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-6 sm:justify-between"
      id="home"
    >
      {/* I'd figure all the animations and transitions out later */}
      <div className="text sm:w-[60%]">
        <motion.div
          className="grid grid-cols-9 w-fit smm:flex gap-2 mb-2 xl:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          {/* SOME SICK ANIMATION FOR THE HEY, THERE TEXT. LIKE A TORCH LIGHT THAT SHINES THROUGH THE TRANSLUCENT TEXT, MAKING ERRTHING WHITE.*/}
          <p className="text-white/60 text-xl smm:text-2xl mb-3 smm:mb-0 lg:text-3xl col-span-6">
            Hey, there
          </p>
          <motion.div
            animate={handWaveAnimation}
            style={{ transformOrigin: "bottom right" }}
            className="col-span-3"
          >
            <Image
              src="/hand-wave.svg"
              width={30}
              height={30}
              alt="hand-waving"
            />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-[35px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-[4rem] leading-tight font-bold"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <p className="text-white/60 inline">I&apos;m </p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            Saviour Promise
          </span>
          <p>a Frontend Developer</p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="text-white/40  text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6 "
        >
          currently focused on building user experiences that drive growth.
        </motion.p>
      </div>

      {/* IMAGE */}
      <div data-blobity-tooltip="ODUMODOBLVCK">
        <motion.div
          ref={imgRef}
          style={{ rotate }}
          className="h-image flex items-center w-[310px] h-[380px] xl:w-[390px] xl:h-[470px] justify-center relative"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          {/* <div className="bg-white absolute w-[300px] h-[300px] rounded-2xl z-50 mix-blend-screen"></div> */}
          <Image
            src="/IMG_7019.JPG"
            priority
            fill
            alt="Promise's picture"
            className="bg-image-radial px-3 pt-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
