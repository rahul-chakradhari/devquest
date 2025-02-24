import React from "react";

const resources = [
  {
    title: "Vedic Maths Tricks (Addition)",
    description:
      "Vedic Addition Tricks use simple mental math techniques to speed up calculations. By breaking numbers into parts and applying shortcut methods, you can quickly add large numbers without a calculator. These tricks enhance accuracy and save time in exams. 🚀",
    video: "https://www.youtube.com/embed/Z4J9kf9Z0h0",
  },
  {
    title: "Vedic Maths Tricks (Subtraction)",
    video: "https://www.youtube.com/embed/5XG7WETxBeM",
  },
  {
    title: "Vedic Maths Tricks (Multiplication)",
    video: "https://www.youtube.com/embed/Nl-AG8g5WG8",
  },
  {
    title: "Vedic Maths Tricks (Division)",
    video: "https://www.youtube.com/embed/-9S5wVAms64",
  },
  {
    title: "Square root of a number rapidly",
    video: "https://www.youtube.com/embed/b2GltE6XB-s",
  },
  {
    title: "Square of a number tricks  ",
    video: "https://www.youtube.com/embed/WldtPett0U4",
  },
  {
    title: "Cube of a number tricks",
    video: "https://www.youtube.com/embed/86j_10sMh1o",
  },
  {
    title: "cube root of a number ",
    video: "https://www.youtube.com/embed/e4fxH6I_iHA",
  },
  ,
];

const Resources = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-center mb-6">
        📚 Learning Resources
      </h2>

      {/* ✅ Grid for 3 Cards Per Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 w-80 rounded-lg shadow-lg flex flex-col items-center"
          >
            <iframe
              width="240"
              height="135"
              src={item.video}
              title={item.title}
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <h3 className="text-lg font-semibold mt-2 text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      {/* ✅ Show description only if it exists */}
      {item.description && (
        <p className="text-sm text-gray-600 mt-2 text-center px-2">
          {item.description}
        </p>
      )}
    </div>
  );
};

export default Resources;
