import { useState } from 'react';
import { generateAntWinLikelihoodCalculator } from '../utils/generateAntWinLikelihoodCalculator';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGetInvidualOdds = () => {
  const [individualOdds, setIndividualOdds] = useState<number>();

  const handleGetIndividualOdds = () => {
    const oddsPack = generateAntWinLikelihoodCalculator();
    oddsPack((arg: number): number => {
      setIndividualOdds(arg);
      return arg;
    });
  };

  return { individualOdds, handleGetIndividualOdds };
};
