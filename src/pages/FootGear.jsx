import React, { useEffect } from "react";
import Namebar from "../components/Namebar";
import Footer from "../components/Footer";

import { workitems } from "../workitems";

const FootGear = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const index = 3;
  return (
    <div>
      <div className="relative w-full h-[200px] raleway text-[20px]">
        <div className="absolute insert-0 w-full z-10 h-[100%] bg-gradient-to-b from-[var(--gold)] to-[var(--black)] opacity-70"></div>
        <img
          className="w-full h-full object-cover absolute z-0"
          src="src\assets\footgear\footgear_cover.jpg"
          alt="DocLocator Cover"
        />

        <div className="absolute insert-0 w-full z-20">
          <Namebar next={"/interpreter"} />
        </div>
      </div>

      <div className="w-full  text-[var(--gold)] flex justify-center bg-[#1F1F1E] min-h-dvh mb-[20px] md:mb-[50px] lg:mb-[0px] fade-in">
        <div className="lg:w-[60%] center bg-[var(--black)] px-[20px] md:px-[30px] lg:px-[50px] pb-[20px] md:pb-[100px]">
          <div className="block italiana-bold text-[40px] md:text-[60px] mt-[20px] uppercase">
            {workitems[index].title}
          </div>
          <div className="text-justify mt-2 raleway block">
            This mobile application redefines the online shopping experience by
            serving as a virtual shopping assistant. Built with the Flutter
            framework and integrated with Snapchat's AR API, it offers augmented
            reality features that enhance user engagement with products. A
            standout feature is its advanced foot-size prediction tool,
            developed using Python, OpenCV, and scikit-learn, providing users
            with a highly personalized and accurate shopping experience.
          </div>
          <div className="flex my-[20px] text-[var(--red)] gap-5 block">
            <a
              target="_blank"
              href="https://github.com/isurikaudeshini/foot-gear-app"
            >
              <div className="flex items-center gap-2 mt-[30px] md:mt-[50px] raleway-bold underline ">
                Github Link{" "}
                {
                  <img
                    className="w-[10px] h-[10px]"
                    src="src\assets\up-right-arrow.png"
                  />
                }
              </div>{" "}
            </a>
          </div>
          <div className="flex gap-2 my-2 raleway-bold block">
            Technologies :{" "}
            {workitems[index].tags.map((tag) => (
              <div
                key={tag}
                className=" rounded-lg raleway-bold text-[12px] px-2 py-1 text-[var(--gold)] border border-[var(--gold)]"
              >
                {tag}
              </div>
            ))}
          </div>
          <div>
            <h1 className="block uppercase italiana-bold text-[30px] md:text-[40px] md:mt-[50px] mt-[30px]">
              Introduction
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full raleway items-center mt-[20px]">
            <div className="w-[100%] md:w-[50%] flex justify-center items-center block">
              <img
                className="w-[50%] md:w-[50%] h-[300px]"
                src="src\assets\footgear\mock_front.png"
              />
            </div>
            <div className="w-[100%] md:w-[50%] text-justify block">
              The project is an augmented reality (AR) mobile application
              designed to enhance human-computer interaction. It features
              cutting-edge AR technology that enables users to virtually try on
              shoes through interactive filters. Additionally, the app offers
              precise foot size measurement capabilities, providing a seamless
              and personalized shopping experience.
            </div>
          </div>
          <div className="raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px] block ">
            Key Features
          </div>

          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Product Page
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Displays a list of shoes or products available for users to
                browse.
              </li>
              <li className="">
                Each product has an option to "Try On" virtually.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Augmented Reality (AR) Try-On
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Uses Snap AR API to overlay a 3D model of a shoe onto the user's
                foot in real-time.
              </li>
              <li className="">
                Provides an interactive virtual try-on experience.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Foot Size Prediction
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Users can upload a photo of their foot placed on an A4 paper to
                help the app calculate their foot size.
              </li>
              <li className="">
                The app analyzes the image and predicts the foot size, offering
                an accurate result based on the foot’s dimensions.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Foot Size Prediction
          </div>

          <div>
            <h1 className="block uppercase italiana-bold text-[30px] md:text-[40px] md:mt-[50px] mt-[30px]">
              Foot-size Prediction
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full raleway items-center mt-[20px]">
            {/* <div className="w-[100%] md:w-[50%] flex justify-center items-center block">
              <img
                className="w-[100%] md:w-[50%] h-[300px]"
                src="src\assets\footgear\mock_front.png"
              />
            </div> */}
            <div className="w-[100%] md:w-[100%] text-justify block">
              This app is a Python-based solution designed to predict foot size
              using computer vision techniques. It processes an image of a
              user's foot to calculate its size and is intended for deployment
              on an Amazon EC2 instance for accessibility and scalability.
            </div>
          </div>
          <div className="raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px] block ">
            Key Features
          </div>

          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Image Input
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">Accepts a foot image uploaded by the user.</li>
              <li className="">
                Optional base64 encoding/decoding for secure image transmission.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Image Processing Pipeline
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                <b>Preprocessing:</b> Enhances the image for better feature
                extraction.
              </li>
              <li className="">
                <b>K-Means Clustering:</b> Segments the foot from the
                background.
              </li>
              <li className="">
                <b>Edge Detection:</b> Detects foot contours.
              </li>
              <li className="">
                <b>Bounding Box Detection:</b> Identifies the area enclosing the
                foot.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Foot Size Calculation
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Uses the bounding box dimensions and processed image data to
                predict foot size in centimeters.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Output
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Returns the calculated foot size as a user-readable result.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Modular Design
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Uses modualr design for maintainability and scalability.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FootGear;
