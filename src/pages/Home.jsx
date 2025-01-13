import React from "react";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import Workbar from "../components/Workbar";
import { workitems } from "../workitems";

const Home = () => {
  return (
    <>
      {/* Landing */}
      <div className=" text-[var(--gold)] italiana uppercase text-[85px] md:text-[128px] leading-[85px] md:leading-[128px] pt-[140px] text-center lg:text-left">
        <div className="lg:ml-[30%] fade-in" style={{ animationDelay: "0s" }}>
          Hello, I'm
        </div>
        <div className="lg:ml-[43%] fade-in" style={{ animationDelay: "0.1s" }}>
          Thamini
        </div>
        <div className="lg:ml-[36%] fade-in" style={{ animationDelay: "0.2s" }}>
          Perera
        </div>
        <div
          className="raleway text-[20px] leading-[21px] pt-[30px] lg:ml-[30%] slide-in"
          style={{ animationDelay: "0s" }}
        >
          A Software Engineer
        </div>
        <div
          className="raleway text-[20px] leading-[20px]  lg:ml-[30%] slide-in"
          style={{ animationDelay: "0.2s" }}
        >
          Based in Colombo
        </div>
        <div className="flex gap-5 justify-center lg:justify-start pt-[20px] lg:ml-[30%] fade-in">
          <a target="_blank" href="https://github.com/thaminiperera">
            <img src={Github} className="cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/thaminiperera/">
            <img src={Linkedin} className="cursor-pointer" />
          </a>
        </div>
      </div>
      {/* Work */}
      <div id="work" className="pt-[50px] mb-[30px]">
        {workitems.map((project) => (
          <Workbar project={project} />
        ))}
      </div>
      
    </>
  );
};

export default Home;
