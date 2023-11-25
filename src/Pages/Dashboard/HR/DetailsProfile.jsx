import React from 'react';

const DetailsProfile = ({ profile }) => {
  return (
    <div className="w-3/5 mx-auto bg-purple-300 py-6 rounded-lg">
      <div className="text-center">
        <img
          className="w-20 h-20 rounded-full mx-auto"
          src={profile.image}
          alt=""
        />
        <div className="flex gap-5 justify-center">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <h2 className="text-xl font-semibold">{profile.designation}</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailsProfile;
