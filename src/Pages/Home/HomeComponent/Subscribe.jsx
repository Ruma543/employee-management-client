import React from 'react';

const Subscribe = () => {
  const img = 'https://i.ibb.co/PmwShT8/hjhgsdfhgvjhsdvh.png';
  return (
    <div className="w-11/12 mx-auto my-6">
      <div
        className="lg:h-[60vh] lg:w-2/3 w-full mx-auto rounded-lg"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="w-full h-full bg-black/50 p-10 flex flex-col justify-center items-center space-y-5 rounded-lg">
          <h3 className="text-3xl text-white font-bold font-serif">
            Subscribe to know anything about our Company.{' '}
          </h3>
          <input
            className="w-full px-5 py-3 outline-0 rounded-lg"
            type=" text"
            placeholder="Enter your email... "
          />
          <input
            type="submit"
            value="Subscribe"
            className="text-white text-xl font-semibold font-serif px-4 py-3 bg-green-800/70 hover:bg-green-500  "
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
