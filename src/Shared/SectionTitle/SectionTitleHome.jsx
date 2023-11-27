import React from 'react';
import { FcBrokenLink } from 'react-icons/fc';
const SectionTitleHome = ({ heading, subHeading }) => {
  const logo = 'https://i.ibb.co/gSfGfzT/small-1939-656411523682f.png';
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <div className="flex gap-5 items-center justify-center">
        <h2 className="flex">
          <FcBrokenLink />
          <FcBrokenLink />
          <FcBrokenLink />
          <FcBrokenLink />
        </h2>
        <img className="" src={logo} alt="" />
        <h2 className="flex">
          <FcBrokenLink />
          <FcBrokenLink />
          <FcBrokenLink />
          <FcBrokenLink />
        </h2>
      </div>
      {/* <hr className="w-4/5 flex justify-center" /> */}
      <p className="text-blue-700 mb-2"> {subHeading}</p>
      <h3 className="text-3xl uppercase font-serif border-y-2 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitleHome;
