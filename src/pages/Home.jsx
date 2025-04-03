import React from "react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import testImg from "../assets/test.png";
import consultImg from "../assets/consult.png"
import shopImg from "../assets/shop.png"
import researchImg from "../assets/research.png"
import opdImg from "../assets/opd.png"
import donateImg from "../assets/donate.png"
import jobImg from "../assets/job.png"

function Home() {
  const featureInfo = [
    {
      src : testImg,
      title: "Book Lab Tests from Home",
      description: "Easily schedule blood sample collections from your preferred pathology lab. Certified professionals ensure safe and accurate testing, with reports available online."
    },
    {
      src: consultImg,
      title: "Consult Top Doctors Online",
      description: "Get expert medical advice without stepping out. Connect with qualified doctors through online consultations for instant guidance and prescriptions."
    },
    {
      src: shopImg,
      title: "Shop for Medical Essentials",
      description: "Buy medicines, healthcare products, and medical equipment at the best prices. Fast delivery and reliable products for all your medical needs."
    },
    {
      src: researchImg,
      title: "Stay Updated with Medical Research",
      description: "Explore the latest breakthroughs in the medical field. Stay informed about cutting-edge treatments, innovations, and healthcare advancements."
    },
    {
      src: opdImg,
      title: "Simplify Your OPD Appointments",
      description: "Avoid long queues at hospitals. Schedule OPD visits in advance, consult doctors efficiently, and get prescriptions with ease."
    },
    {
      src: donateImg,
      title: "Donate & Request Blood Easily",
      description: "Save lives by donating blood or find donors in critical times. A seamless way to connect blood donors with those in need."
    },
    {
      src: jobImg,
      title: "Find Healthcare Jobs & Opportunities",
      description: "Looking for jobs in hospitals, pathology labs, or clinics? Browse job listings for nurses, lab technicians, and medical professionals in one place."
    }
  ];
  
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <div className="px-4 py-10 flex flex-wrap justify-center gap-6">
        {
          featureInfo.map((info) => (
            <FeatureCard imgSrc={info.src} title={info.title} description={info.description} />
          ))
        }
      </div>
    </div>
  );
}

export default Home;
