import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {fridgeData} from './fridgeData.js'
import FridgeSummaryContainer from './fridgeSummaryContainer.jsx'

const FridgeCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === fridgeData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? fridgeData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = fridgeData.map((fridge) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={fridge.name}
      >
      <div className="car-container">
       <FridgeSummaryContainer props={fridge} key={fridge}/>
       </div>
       </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
    
      {slides}
      <CarouselControl 
      direction="prev" directionText="Previous" onClickHandler={previous} 
      />
      <CarouselControl 
      direction="next" directionText="Next" 
      onClickHandler={next} 
      />
    </Carousel>
  );
}

export default FridgeCarousel;