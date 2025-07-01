import Image from "next/image";



import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";
import BlogPosts from "../components/BlogPosts";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Projects from "@/components/MyProjects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarwar Alam | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Sarwar Alam, a Full Stack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main>
        <Hero />
        <Skills />
        <TechStack />

        <Projects/>
        <BlogPosts />
        <ContactForm />
      </main>
      
    </>
  );
}
