import React from "react";

function TopButtons() {
  const cities = [
    { id: 1, title: "Toronto" },
    { id: 1, title: "Sydney" },
    { id: 1, title: "Tokyo" },
    { id: 1, title: "Paris" },
    { id: 1, title: "Istanbul" },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => {
        return (
          <button key={city.id} className="text-white text-lg font-medium">
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButtons;
