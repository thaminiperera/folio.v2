import React from "react";
import { useNavigate } from "react-router-dom";

const Workbar = ({ project }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(project.path)
  }
  return (
    <div onClick={handleClick} className="cursor-pointer text-[var(--gold)] flex flex-col md:flex-row justify-center items-center py-[30px] md:py-[60px] px-[10px] md:px-[55px] block">
      <div className="w-[100%] md:w-[50%] h-[400px] flex justify-center items-center p-[20px]">
        <img
          src={project.cover}
          className="w-full h-[100%] object-cover p-[10px]"
        />
      </div>
      <div className="w-[100%] md:w-[50%] h-[300px] md:h-[400px] flex flex-col justify-center p-[20px]">
        <div className="italiana-bold uppercase text-[22px] pb-[10px]">
          {project.title}
        </div>
        <div className="raleway text-[14px] text-justify">{project.disc}</div>
        <div className="mt-3 flex gap-2">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className=" rounded-lg raleway-bold text-[12px] px-2 py-1 text-[var(--black)] bg-[var(--red)]"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="raleway uppercase pt-[20px] underline hover:bold cursor-pointer">
          <a href={project.path}>Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Workbar;
