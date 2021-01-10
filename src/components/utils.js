export const playAudio = (ref) => {
  const playPromise = ref.current.play();
  if (playPromise !== "undefined") {
    playPromise.then(() => {
      ref.current.play();
    });
  }
};
