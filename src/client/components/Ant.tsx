/* eslint-disable @typescript-eslint/no-unused-vars */
import { AntColor } from '../pages/AntsPage';
import { useGetInvidualOdds } from '../hooks/useGetInvidualOdds';
import { generateAntWinLikelihoodCalculator } from '../utils/generateAntWinLikelihoodCalculator';
import { useState } from 'react';
export interface AntProps {
  ant: {
    __typename: string;
    color: AntColor;
    name: string;
    length: number;
    weight: number;
  };
  odds?: number;
  hasRun?: boolean;
  loading: boolean;
}

export const Ant = ({ ant, loading, odds, hasRun }: AntProps): JSX.Element => {
  const [individualOdds, setIndividualOdds] = useState<number>();
  const [localLoading, setLocalLoading] = useState(false);

  const handleGetIndividualOdds = () => {
    setLocalLoading(true);
    const oddsPack = generateAntWinLikelihoodCalculator();
    oddsPack((arg: number): number => {
      setIndividualOdds(arg);
      return arg;
    });
  };

  return (
    <>
      {ant && (
        <section className='ant'>
          <h1 id='name'>{ant.name}</h1>
          <div>{ant.color}</div>
          <div>{ant.length}</div>
          <div>{ant.weight}</div>
          <button onClick={handleGetIndividualOdds}>Run Odds</button>
          {!odds && loading && <p>...loading</p>}
          {!individualOdds && localLoading && <p>...loading</p>}
          {odds && !loading && hasRun && <p>Calculated Odds: {odds}</p>}
          {!odds && !loading && !hasRun && individualOdds && (
            <p>
              Calculated Odds:{' '}
              {Math.round(parseFloat((individualOdds * 100).toString()))}
            </p>
          )}
          {!odds && !loading && !hasRun && !individualOdds && !localLoading && (
            <p> Odds Not Yet Run </p>
          )}
        </section>
      )}
    </>
  );
};
