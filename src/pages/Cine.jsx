import React, { useEffect } from "react";
import Namebar from "../components/Namebar";
import Footer from "../components/Footer";

import { workitems } from "../workitems";

const Cine = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const index = 1;
  return (
    <div>
      <div className="relative w-full h-[200px] raleway text-[20px]">
        <div className="absolute insert-0 w-full z-10 h-[100%] bg-gradient-to-b from-[var(--gold)] to-[var(--black)] opacity-70"></div>
        <img
          className="w-full h-full object-cover absolute z-0"
          src="cine\cine_cover.jpg"
          alt="Cine Cover"
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
            A modern, video platform built for creators and viewers alike.
            Designed with performance, scalability, and user experience at its
            core. Built with the latest web technologies like Next.js 15, React
            19, tRPC, and styled with TailwindCSS and ShadcnUI.
          </div>
          <div className="flex my-[20px] text-[var(--red)] gap-5 block">
            <a target="_blank" href="https://github.com/thaminiperera/cine">
              <div className="flex items-center gap-2 mt-[30px] md:mt-[50px] raleway-bold underline ">
                Github Link{" "}
                {<img className="w-[10px] h-[10px]" src="up-right-arrow.png" />}
              </div>{" "}
            </a>

            <a target="_blank" href="https://cine-blue.vercel.app">
              <div className="flex items-center gap-2 mt-[30px] md:mt-[50px] raleway-bold underline ">
                Demo{" "}
                {<img className="w-[10px] h-[10px]" src="up-right-arrow.png" />}
              </div>
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
                className="w-[50%] md:w-[100%] h-[300px]"
                src="cine\cine_thumbnail.png"
              />
            </div>
            <div className="w-[100%] md:w-[50%] text-justify block">
              Cine is a video platform designed to empower creators and
              captivate viewers through a seamless experience. Leveraging the
              latest web technologies—including Next.js 15, React 19, and
              tRPC—Cine offers real-time video processing powered by Mux, along
              with a sleek, fully responsive UI styled with TailwindCSS and
              ShadcnUI. It features advanced tools such as smart thumbnails,
              interactive comments, custom playlists, and detailed creator
              analytics, all integrated into an intuitive and scalable platform.
              Secure authentication is handled by Clerk, while a robust backend
              built with PostgreSQL and DrizzleORM ensures data integrity and
              performance at scale.
            </div>
          </div>
          <div className="raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px] block ">
            Key Features
          </div>

          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Advanced Video Player
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                 Enjoy high-quality streaming with dynamic resolution switching.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Real-Time Video Processing
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Powered by Mux for fast, reliable video encoding and delivery.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Smart Thumbnails
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Automatically generated thumbnails that highlight the best video moments.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Creator Studio
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Track views, engagement, and other key metrics.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Custom Playlists
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Organize videos into custom playlists for better content discovery.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Fully Responsive
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Seamlessly adapts to mobile, tablet, and desktop screens.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Multiple Feeds
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                 Home, trending, subscriptions, and more.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Interactive Comments
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Rich comment system with replies and likes.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Like & Subscribe System
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Built-in social engagement tools
              </li>
            </ul>
          </div>

          <div className="raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px] block ">
           Tech Stack
          </div>

          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Frontend
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Next.js: For server-side rendering and fast load times.
              </li>
              <li className="">
                Tailwind CSS & Shadcn: For responsive and stylish UI.
              </li>
              <li className="">
                Lucide-react & React-Icons: For intuitive and clear iconography.
              </li>
              <li className="">
                Toast: For user notifications.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Backend
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                tRPC: End-to-end type-safe API communication.
              </li>
              <li className="">
                PostgreSQL: Relational database for structured data.
              </li>
              <li className="">
                DrizzleORM: Type-safe, developer-friendly ORM for database management.
              </li>
              <li className="">
                Mux: Real-time video processing and streaming.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Authentication
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Clerk: For secure user authentication and access management.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cine;
