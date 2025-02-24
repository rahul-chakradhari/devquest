import React from "react";

const resources = [
  {
    title: "Vedic Maths Tricks (Addition)",
    video: "https://www.youtube.com/embed/Z4J9kf9Z0h0",
  },
  {
    title: "Vedic Maths Tricks (Subtraction)",
    video: "https://www.youtube.com/embed/5XG7WETxBeM",
  },
  {
    title: "Speedy Division Hacks",
    video: "https://www.youtube.com/embed/Nl-AG8g5WG8",
  },
  {
    title: "Memory Boosting Techniques",
    video: "https://www.youtube.com/embed/9bO-7d7Wlqs",
  },
  {
    title: "Time Management for Exams",
    video: "https://www.youtube.com/embed/XCn8tRykvVo",
  },
  {
    title: "How to Stay Focused",
    video: "https://www.youtube.com/embed/QIA3Me7GEJY",
  },
  {
    title: "Best Books for Competitive Exams",
    video: "https://www.youtube.com/embed/fb30wGKh46s",
  },
  {
    title: "Effective Note-Taking Methods",
    video: "https://www.youtube.com/embed/4nVnKPzObpU",
  },
  {
    title: "Overcome Exam Stress",
    video: "https://www.youtube.com/embed/jN8oi7GHY2c",
  },
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
    </div>
  );
};

export default Resources;
