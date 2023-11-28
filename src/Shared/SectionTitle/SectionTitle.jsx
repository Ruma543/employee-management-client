import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center lg:w-4/12 w-9/12  my-8">
      <p className="text-purple-700 mb-2"> {subHeading}</p>
      <h3 className="lg:text-3xl text-xl uppercase font-serif border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
