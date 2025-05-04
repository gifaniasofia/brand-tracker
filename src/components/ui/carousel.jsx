import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { usePrevNextButtons } from '@/hooks/use-carousel';
import { cn } from '@/lib/utils';

import { NextButton, PrevButton } from './carousel-arrow-buttons';

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

export const Carousel = ({
  slides,
  options,
  withButtons,
  wrapperClassName,
  className,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const {
    selectedIndex,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0.2, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity);
  }, [emblaApi, tweenOpacity, setTweenFactor]);

  return (
    <div className='w-full'>
      <div ref={emblaRef}>
        <div
          className={cn('flex touch-pan-y touch-pinch-zoom', wrapperClassName)}
        >
          {slides.map((slide, index) => (
            <div className={cn(className)} key={index}>
              {slide.content ?? null}
            </div>
          ))}
        </div>
      </div>

      {withButtons && (
        <div className='mt-5.5 sm:mt-11 flex justify-center'>
          <div className='grid grid-cols-2 gap-4 sm:gap-2.5'>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled || selectedIndex === 0}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled || selectedIndex === slides.length - 1}
            />
          </div>
        </div>
      )}
    </div>
  );
};
