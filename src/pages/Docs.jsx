import React, { useEffect } from "react";
import Namebar from "../components/Namebar";
import Footer from "../components/Footer";

import { workitems } from "../workitems";

const Docs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const index = 0;
  return (
    <div>
      <div className="relative w-full h-[200px] raleway text-[20px]">
        <div className="absolute insert-0 w-full z-10 h-[100%] bg-gradient-to-b from-[var(--gold)] to-[var(--black)] opacity-70"></div>
        <img
          className="w-full h-full object-cover absolute z-0"
          src="docs\docs_cover.jpg"
          alt="Docs Cover"
        />

        <div className="absolute insert-0 w-full z-20">
          <Namebar next={"/cine"} />
        </div>
      </div>

      <div className="w-full  text-[var(--gold)] flex justify-center bg-[#1F1F1E] min-h-dvh mb-[20px] md:mb-[50px] lg:mb-[0px] fade-in">
        <div className="lg:w-[60%] center bg-[var(--black)] px-[20px] md:px-[30px] lg:px-[50px] pb-[20px] md:pb-[100px]">
          <div className="block italiana-bold text-[40px] md:text-[60px] mt-[20px] uppercase">
            {workitems[index].title}
          </div>
          <div className="text-justify mt-2 raleway block">
            This system provides a fluid, responsive, and feature-rich document
            editing and collaboration environment. It offers a modern
            alternative to traditional tools like Google Docs, enabling users to
            create, edit, and collaborate on documents in real-time with minimal
            latency. The platform is highly customizable, catering to the
            evolving needs of modern users.
          </div>
          <div className="flex my-[20px] text-[var(--red)] gap-5 block">
            <a target="_blank" href="https://github.com/thaminiperera/docs">
              <div className="flex items-center gap-2 mt-[30px] md:mt-[50px] raleway-bold underline ">
                Github Link{" "}
                {<img className="w-[10px] h-[10px]" src="up-right-arrow.png" />}
              </div>{" "}
            </a>

            <a target="_blank" href="https://docs-five-orpin.vercel.app">
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
                src="docs\docs_thumbnail.png"
              />
            </div>
            <div className="w-[100%] md:w-[50%] text-justify block">
              Docs is a modern, real-time document editing and collaboration
              platform designed to redefine how teams create, share, and work on
              documents together. Built as an alternative to traditional tools
              like Google Docs, this platform offers a seamless, low-latency
              editing experience with live updates, synchronized changes, and
              collaborative features like user presence tracking and threaded
              comments. Leveraging technologies such as TipTap, Liveblocks,
              Convex, and Clerk, it provides a fully customizable, secure, and
              responsive environment for modern workflows. Built for speed,
              collaboration, and flexibility, this platform is the ideal
              solution for individuals, teams, and organizations looking to
              elevate their document workflows.
            </div>
          </div>
          <div className="raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px] block ">
            Key Features
          </div>

          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Real-time Document Collaboration
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Multiple users can collaborate seamlessly with real-time
                updates, live cursor tracking, and synchronized changes.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Customizable Document Editing
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Features a flexible text editor with support for advanced
                formatting, tables, task lists, image embedding, and more.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Secure Authentication & Access Management
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Ensures secure logins, user authentication, and organizational
                access control.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Template Library
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                A variety of pre-designed templates (business letters, resumes,
                etc.) for easier document creation.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Dynamic UI
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Intuitive and responsive user interface optimized for multiple devices.
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
                Convex: For real-time database and API synchronization.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Collaboration
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Liveblocks: For real-time collaboration and presence tracking.
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

export default Docs;
