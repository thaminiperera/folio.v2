import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between pr-[55px] pl-[55px] pt-[47px] pb-[47px] raleway text-[20px] uppercase text-[var(--gold)] ">
      <div><a href="/">Thamini Perera</a></div>
      <div>
        <ul className="flex gap-5 text-[var(--red)]">
          <li><a className="m-0 p-0" href="#work">Work</a></li>
          {/* <li>About</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
