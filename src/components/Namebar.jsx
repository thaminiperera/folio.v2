import React from "react";


const Namebar = ({ next }) => {
  return (
    <div className="g-transparent flex justify-between pr-[55px] pl-[55px] pt-[47px] pb-[47px] raleway-bold text-[20px] uppercase text-[var(--black)] w-full">
      <div>
        <a href="/" className="border-b-2 border-[var(--red)]">
          Thamini Perera
        </a>
      </div>
      <div>
        <ul className="flex gap-5 ">
          <li>
            <a
              className="flex items-center gap-1 m-0 p-0 hover:underline"
              href={next}
            >
              Next Project{<img src="right-arrow.png"/>}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Namebar;
