import React from "react";

const resources = [
  {
    title: "Vedic Maths Tricks (Addition)",
    description:
      "Vedic Addition Tricks use simple mental math techniques to speed up calculations. By breaking numbers into parts and applying shortcut methods, you can quickly add large numbers without a calculator. 🚀",
    video: "https://www.youtube.com/embed/Z4J9kf9Z0h0",
  },
  {
    title: "Vedic Maths Tricks (Subtraction)",
    description:
      "Vedic Subtraction Tricks simplify calculations by using mental math techniques. Instead of borrowing, these tricks help break numbers smartly, making subtraction faster and error-free. 🧠✨",
    video: "https://www.youtube.com/embed/5XG7WETxBeM",
  },
  {
    title: "Vedic Maths Tricks (Multiplication)",
    description:
      "Vedic Multiplication Tricks use smart patterns and mental math to multiply numbers quickly. Perfect for competitive exams! ⚡➗",
    video: "https://www.youtube.com/embed/Nl-AG8g5WG8",
  },
  {
    title: "Vedic Maths Tricks (Division)",
    description:
      "Vedic Division Tricks simplify complex division problems using smart patterns and mental math. Ideal for exams and daily calculations! ➗✅",
    video: "https://www.youtube.com/embed/-9S5wVAms64",
  },
  {
    title: "Square root of a number rapidly",
    description:
      "Vedic Square Root Tricks help you find square roots quickly using simple mental math techniques. 🔢✅",
    video: "https://www.youtube.com/embed/b2GltE6XB-s",
  },
  {
    title: "Square of a number tricks",
    description:
      "Vedic Square Tricks make squaring numbers easy and fast. Quickly find the square of any number using shortcut methods! ✨🔢",
    video: "https://www.youtube.com/embed/WldtPett0U4",
  },
  {
    title: "Cube of a number tricks",
    description:
      "Vedic Cube Tricks help you quickly find the cube of a number using simple patterns and shortcut techniques. 🚀🔢",
    video: "https://www.youtube.com/embed/86j_10sMh1o",
  },
  {
    title: "Cube root of a number",
    description:
      "Vedic Cube Root Tricks help you determine the cube root of a number by recognizing patterns and using mental math. 🔢🚀",
    video: "https://www.youtube.com/embed/e4fxH6I_iHA",
  },
];

const Resources = () => {
  return (
    <div className="px-6 py-8 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 w-full rounded-lg shadow-lg flex flex-col items-center"
          >
            <iframe
              width="100%"
              height="180"
              src={item.video}
              title={item.title}
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-3 text-center">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm text-gray-600 mt-2 text-center px-3">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
