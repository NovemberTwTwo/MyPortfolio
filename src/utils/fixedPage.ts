const fixedPage = (toObserve: Element) => {
  // const io: IntersectionObserver = new IntersectionObserver(pageCallback, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: [0.01],
  // });
  // Array.from(toObserve.children).forEach((child) => {
  //   io.observe(child);
  // });

  const fixedScroll = (e) => {
    e.preventDefault();
    const vh = toObserve.clientHeight;

    if (toObserve.scrollTop % vh == 0) {
      if (e.deltaY > 0)
        toObserve.scrollBy({
          top: vh,
          behavior: 'smooth',
        });
      else
        toObserve.scrollBy({
          top: -vh,
          behavior: 'smooth',
        });
    }
  };

  let testY = 0;
  const fixedScrollMobile = (e) => {
    e.preventDefault();
    const vh = toObserve.clientHeight;
    const currentY = e.touches[0].clientY;

    if (toObserve.scrollTop % vh == 0) {
      if (currentY < testY)
        toObserve.scrollBy({
          top: vh,
          behavior: 'smooth',
        });
      else
        toObserve.scrollBy({
          top: -vh,
          behavior: 'smooth',
        });
    }
    testY = currentY;
  };

  toObserve.addEventListener('wheel', fixedScroll, {
    passive: false,
  });
  toObserve.addEventListener('touchmove', fixedScrollMobile, {
    passive: false,
  });
};

// const delay = (timeToDelay: number) =>
//   new Promise((resolve) => setTimeout(resolve, timeToDelay));

// const pageCallback: IntersectionObserverCallback = (
//   entries,
//   observer,
// ): void => {
//   entries.forEach(async (entry) => {
//     if (entry.isIntersecting && entry.intersectionRatio) {
//       preventScroll(entry.target.parentElement!);
//       entry.target.scrollIntoView({
//         inline: 'start',
//         behavior: 'smooth',
//       });
//       console.log(entry.target);
//     }
//   });
// };

// const preventDefault = (e) => {
//   e.preventDefault();
// };

// const preventScroll = async (observeElement: Element) => {
//   console.log('prevented', observeElement);
//   observeElement.addEventListener('wheel', preventDefault, {
//     passive: false,
//   });
//   observeElement.addEventListener('touchmove', preventDefault, {
//     passive: false,
//   });
//   await delay(1500);
//   observeElement.removeEventListener('wheel', preventDefault);
//   observeElement.removeEventListener('touchmove', preventDefault);
//   console.log('unprevented', observeElement);
// };

// //A, B, C, D 가 있다고 가정할 때, 현재 Page를 제외한 요소들을 감시한다.

export default fixedPage;
