import React, { useRef, useState, useEffect } from "react";
import Heading from "../UI/Heading";
import StartedButton from "../UI/StartedButton";
import { handleStart } from "../utils/handleStart";
import { goToSlide, handleReviewScroll } from "../utils/handleScroll";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const reviewItems = [
    {
      id: 1,
      name: "Anisha Li",
      text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      img: "/images/avatar-anisha.png",
    },
    {
      id: 2,
      name: "Ali Bravo",
      text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
      img: "/images/avatar-ali.png",
    },
    {
      id: 3,
      name: "Richard Watts",
      text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
      img: "/images/avatar-richard.png",
    },
    {
      id: 4,
      name: "Shanai Gough",
      text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
      img: "/images/avatar-shanai.png",
    },
  ];

  useEffect(() => {
    const ref = carouselRef.current;
    if (ref) {
      const onScroll = () => handleReviewScroll(carouselRef, setCurrentIndex);
      ref.addEventListener("scroll", onScroll, { passive: true });
      return () => ref.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <div className="flex flex-col items-center mt-40 gap-8 lg:gap-16">
      <Heading label="What they’ve said" />

      <div ref={carouselRef} className="review__carousel">
        <div className="flex gap-6 mx-4">
          {reviewItems.map((review, index) => (
            <div
              key={index}
              className="shrink-0 pt-12 w-full max-w-[800px] lg:w-[40%] snap-center relative"
            >
              <div className="relative flex flex-col gap-4 items-center w-full h-full bg-(--VeryLightGray) pt-12 pb-8 px-6">
                <img
                  className="h-18 absolute -top-7 left-1/2 -translate-x-1/2"
                  src={review.img}
                  alt={review.name}
                />
                <h5 className="be-vietnam-pro-bold text-(--DarkBlue) pt-4">
                  {review.name}
                </h5>
                <p className="be-vietnam-pro-regular text-(--DarkGrayishBlue) leading-7 text-center">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden flex justify-center gap-2">
        {reviewItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(carouselRef, idx, setCurrentIndex)}
            className={`w-2 h-2 rounded-full border duration-300 border-(--BrightRed) ${
              currentIndex === idx ? "bg-[var(--BrightRed)]" : "bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <StartedButton
        action={handleStart}
        scheme="primary"
        classes="mt-4 lg:mt-8"
      />
    </div>
  );
};

export default Reviews;
