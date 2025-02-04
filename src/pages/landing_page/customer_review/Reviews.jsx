import React from "react";
import { FaStar, FaUser } from "react-icons/fa";

const reviews = [
  {
    name: "Jake Watson",
    profile: "./review-user/jake.jpg",
    text: "QueueNex Tech exceeded our expectations with their expertise and dedication. Their team was a pleasure to work with, and we are thrilled with the results.",
    stars: 5,
  },
  {
    name: "Jasprith Singh",
    profile: "./review-user/jasprith.jpg",
    text: "We were impressed by QueueNex Tech's ability to understand our vision and translate it into a functional and user-friendly software solution.",
    stars: 4,
  },
  {
    name: "Josiph Doe",
    profile: "./review-user/josipher.jpg",
    text: "The team at QueueNex Tech is highly skilled and responsive. They were able to address our concerns quickly and efficiently.",
    stars: 5,
  },
  {
    name: "Muskan Aqil",
    profile: "./review-user/muskan.jpg",
    text: "We highly recommend QueueNex Tech to any business seeking a reliable and innovative software development partner.",
    stars: 4,
  },
  {
    name: "Mohsin Jatt",
    profile: "./review-user/mohsin.jpg",
    text: "QueueNex Tech's commitment to quality and customer satisfaction is evident in every aspect of their work.",
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <div className="w-full mx-auto py-16 bg-[#3B9A70] text-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">Client Reviews</h2>

      {/* Infinite Scrolling Wrapper */}
      <div className="scrolling-wrapper">
        <div className="w-full scrolling-content">
          {/* Duplicate reviews to create infinite scroll effect */}
          {[...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="w-[80%] lg:w-[20%] mx-4 h-[300px] flex-shrink-0 bg-gray-200 p-6 rounded-lg shadow-lg"
            >
              <p className="text-black mb-4 text-wrap">{review.text}</p>
              <div className="flex items-center gap-3 absolute bottom-2">
                <img
                  src={review.profile}
                  alt="profile picture"
                  className="rounded-full size-16 p-1 bg-cover bg-center border-[#3B9A70] border-2"
                />
                <div>
                  <span className="font-semibold text-black">
                    {review.name}
                  </span>
                  <div className="flex text-black">
                    {Array.from({ length: review.stars }, (_, i) => (
                      <FaStar key={i} className="text-black" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
