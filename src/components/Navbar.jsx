import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between pr-[55px] pl-[55px] pt-[47px] pb-[47px] raleway text-[20px] uppercase text-[var(--gold)]">
      <div>Thamini Perera</div>
      <div>
        <ul className="flex gap-5 ">
          <li>Work</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
