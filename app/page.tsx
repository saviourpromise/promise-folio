"use client";
import Hero from "./components/hero-section/Hero";
import Works from "./components/work-section/Works";
import About from "./components/about-section/About";
import Contact from "./components/contact+footer/Contact";
import Footer from "./components/contact+footer/Footer";
import { initialBlobityOptions } from "@/utils/blobity.config";
import useBlobity from "blobity/lib/react/useBlobity";

export default function Home() {
  const blobity = useBlobity(initialBlobityOptions);

  return (
    <main>
      <Hero blobity={blobity}/>
      <Works blobity={blobity}/>
      <About blobity={blobity}/>
      <Contact blobity={blobity}/>
      <Footer blobity={blobity}/>
    </main>
  );
}
