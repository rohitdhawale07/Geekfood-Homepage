import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://primary.jwwb.nl/unsplash/wot0Q5sg91E.jpg?enable-io=true&enable=upscale&crop=1920%2C892%2Cx0%2Cy264%2Csafe&width=900&height=418")',
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Let's Find Your <br /> <span className="text-red-500">Favourite Food. </span>
          </h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div>
            <button className="bg-red-500 text-white px-6 py-3 mr-4 hover:bg-red-600 rounded-md">
              Search Now
            </button>
            <button className="bg-white text-red-500 px-6 py-3 hover:bg-gray-200 rounded-md">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
