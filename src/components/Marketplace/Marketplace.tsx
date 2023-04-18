import React from "react";

const sponsorships = [
  {
    id: 1,
    creator: "John Doe",
    platform: "Twitch",
    type: "Live stream",
    title: "Playing my favorite game",
    description: "Join me for an exciting gaming session!",
    date: "May 15, 2023",
    duration: "2 hours",
    price: "$500",
  },
  {
    id: 2,
    creator: "Jane Smith",
    platform: "YouTube",
    type: "Virtual event",
    title: "Cooking with Jane",
    description: "Learn how to make delicious recipes with me!",
    date: "June 10, 2023",
    duration: "1 hour",
    price: "$250",
  },
  // additional sponsorships...
];

const Marketplace = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Sponsorship Marketplace</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sponsorships.map((sponsorship) => (
          <div key={sponsorship.id} className="p-4 border rounded-md">
            <h3 className="text-lg font-bold mb-2">
              {sponsorship.creator} - {sponsorship.platform}
            </h3>
            <p className="text-gray-600 mb-2">
              {sponsorship.type}: {sponsorship.title}
            </p>
            <p className="text-gray-600 mb-2">{sponsorship.description}</p>
            <p className="text-gray-600 mb-2">Date: {sponsorship.date}</p>
            <p className="text-gray-600 mb-2">
              Duration: {sponsorship.duration}
            </p>
            <p className="text-gray-600 font-bold mt-4">{sponsorship.price}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
              Sponsor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
