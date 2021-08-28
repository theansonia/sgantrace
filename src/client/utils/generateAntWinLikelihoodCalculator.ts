// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();
  return (callback: (arg0: number) => number) => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}
