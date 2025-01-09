import React from "react";

const Workbar = ({project}) => {
  return (
    <div className="text-[var(--gold)] flex flex-col md:flex-row justify-center items-center py-[30px] md:py-[60px] px-[10px] md:px-[55px]">
      <div className="w-[100%] md:w-[50%] h-[400px] flex justify-center items-center p-[20px]">
        <img
          src={project.cover}
          className="w-full h-[100%] object-cover p-[10px]"
        />
      </div>
      <div className="w-[100%] md:w-[50%] h-[300px] md:h-[400px] flex flex-col justify-center p-[20px]">
        <div className="italiana uppercase text-[22px] pb-[10px]">{project.title}</div>
        <div className="raleway text-[16px] text-justify">
         {project.disc} 
        </div>
        <div className="raleway uppercase pt-[20px] underline hover:bold cursor-pointer">Read More</div>
      </div>
    </div>
  );
};

export default Workbar;
