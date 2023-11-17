import React from "react";

const CardSection = () => {
  const cardsData = [
    {
      id: 1,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
    {
      id: 2,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
    {
      id: 3,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
    {
      id: 4,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
    {
      id: 5,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
    {
      id: 6,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
  ];

  return (
    <div className="container mx-auto flex flex-wrap justify-center">
      {cardsData.map((card) => (
        <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-gray-600 mb-4">{card.content}</p>
            <h2 className="text-xl font-bold mb-2">{card.heading}</h2>
            <p className="text-gray-600">{card.subContent}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
