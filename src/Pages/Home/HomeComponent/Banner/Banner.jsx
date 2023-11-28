import React, { useState } from 'react';

const Banner = () => {
  const banner1 = 'https://i.ibb.co/gyytzN0/banner1.png';
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="h-[90vh] mt-17 py-5  w-full mx-auto grid lg:grid-cols-2 grid-cols-1"
      style={{ backgroundColor: '#0a3d62' }}
    >
      <div className="flex flex-col items-center justify-center space-y-3 w-4/5 mx-auto">
        <h3 className="text-center  text-white font-semibold  font-serif lg:text-3xl text-xl  ">
          Empower your workforce with precision and care – where employee
          management meets excellence.
        </h3>
        <button className="bg-green-700 text-white hover:bg-green-500 px-3 py-2">
          About Us
        </button>
      </div>
      <div
        className=" h-4/5 my-auto  w-4/5  mx-auto"
        style={{
          backgroundImage: `url(${banner1})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
    </div>
  );
};

export default Banner;
// import React from 'react';
// const banner1 = 'https://i.ibb.co/gyytzN0/banner1.png';
// const Banner = () => {
//   return (
//     <div
//       style={{ backgroundColor: '#0a3d62' }}
//       className="h-[70vh]"
//       // className="lg:h-[80vh] h-full  w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1"
//     >

//     </div>
//   );
// };

// export default Banner;
