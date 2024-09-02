"use client";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Statistics from "./components/Statistics";
import Projects from "./components/Projects";
import OurServices from "./components/OurServices";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTopButton from "./components/ScrollToTopButton";

import { useLoading } from "./hooks/useLoading";

export default function Home() {
  const { loading, showLoadingScreen } = useLoading();

  return (
    <>
      {showLoadingScreen && <LoadingScreen isVisible={loading} />}

      <Header />

      <Nav />

      <Banner />

      <AboutUs />

      <Statistics />

      <Projects />

      <OurServices />

      <Comments />

      <Contact />

      <Footer />

      <ScrollToTopButton />
    </>
  );
}
