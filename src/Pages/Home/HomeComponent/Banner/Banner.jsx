import React, { useState } from 'react';

const Banner = () => {
  const banner1 = 'https://i.ibb.co/gyytzN0/banner1.png';
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="lg:h-[80vh] mt-20 w-full grid lg:grid-cols-2"
      style={{ backgroundColor: '#0a3d62' }}
    >
      <div></div>
      <div
        className="h-4/5 my-auto  w-4/5  mx-auto"
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
