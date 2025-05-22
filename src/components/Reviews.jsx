import React, { useRef, useState, useEffect } from "react";
import Heading from "../UI/Heading";
import StartedButton from "../UI/StartedButton";
import { handleStart } from "../utils/handleStart";
import { goToSlide, handleReviewScroll } from "../utils/handleScroll";
import ReviewCard from "../UI/ReviewCard";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const reviewItems = [
    {
      id: 1,
      name: "Anisha Li",
      text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      img: "/ManageLanding/images/avatar-anisha.png",
    },
    {
      id: 2,
      name: "Ali Bravo",
      text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
      img: "/ManageLanding/images/avatar-ali.png",
    },
    {
      id: 3,
      name: "Richard Watts",
      text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
      img: "/ManageLanding/images/avatar-richard.png",
    },
    {
      id: 4,
      name: "Shanai Gough",
      text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
      img: "/ManageLanding/images/avatar-shanai.png",
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
    <section className="flex flex-col items-center gap-8 lg:gap-16">
      <Heading label="What they’ve said" />

      <div ref={carouselRef} className="review__carousel">
        <div className="flex gap-6 mx-4">
          {reviewItems.map((review, index) => (
            <ReviewCard
              key={index}
              img={review.img}
              name={review.name}
              text={review.text}
            />
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
    </section>
  );
};

export default Reviews;
