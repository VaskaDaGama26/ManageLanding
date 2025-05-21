export const goToSlide = (carouselRef, index, setCurrentIndex) => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  };
  
  export const handleReviewScroll = (carouselRef, setCurrentIndex) => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    }
  };