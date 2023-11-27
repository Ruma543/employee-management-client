import React, { useState } from 'react';

const Banner = () => {
  const banner1 = 'https://i.ibb.co/gyytzN0/banner1.png';
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="h-[80vh]   w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1"
      style={{ backgroundColor: '#0a3d62' }}
    >
      <div>banner message</div>
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
