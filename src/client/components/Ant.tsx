/* eslint-disable @typescript-eslint/no-unused-vars */
import { AntColor } from '../pages/AntsPage';
import { ReactComponent as AntPic } from './ant.svg';

import { generateAntWinLikelihoodCalculator } from '../utils/generateAntWinLikelihoodCalculator';
import { useState } from 'react';
import Loading from './Loading';
import { useEffect } from 'react';
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
  onUpdateAllOdds: (odds: number, name: string) => void;
}

export const Ant = ({
  ant,
  loading,
  odds,
  hasRun,
  onUpdateAllOdds,
}: AntProps): JSX.Element => {
  const [individualOdds, setIndividualOdds] = useState<number>();
  const [localLoading, setLocalLoading] = useState(false);

  const handleGetIndividualOdds = () => {
    setLocalLoading(true);
    const oddsPack = generateAntWinLikelihoodCalculator();
    oddsPack((arg: number): number => {
      setIndividualOdds(arg);
      onUpdateAllOdds(arg, ant.name);
      return arg;
    });
  };

  useEffect(() => {
    if (individualOdds) setLocalLoading(false);
  }, [individualOdds]);

  return (
    <>
      {ant && (
        <div className='ant'>
          <div className='image'>
            <AntPic />
            <div className='circle-1'></div>
            <div className='circle-2'></div>
            <div className='btn-wrapper'>
              <button className='btn' onClick={handleGetIndividualOdds}>
                Run Odds
              </button>
            </div>
          </div>
          <div id='name'>{ant.name}</div>
          <div id='stats-wrapper'>
            <div className='stats'>
              <div className='box'>
                <span className='parameter'>Color</span>
                <span className='value' style={{ color: `${ant.color}` }}>
                  {ant.color}
                </span>
              </div>
            </div>
            <div className='stats'>
              <div className='box'>
                <span className='parameter'>Length</span>
                <span className='value'>{ant.length}</span>
              </div>
            </div>
            <div className='stats'>
              <div className='box'>
                <span className='parameter'>Weight</span>
                <span className='value'>{ant.weight}</span>
              </div>
            </div>
            <div className='stats'>
              <div className='box'>
                {!loading && !localLoading && (
                  <span id='odds' className='parameter'>
                    Odds
                  </span>
                )}

                {!odds && loading && <Loading />}
                {!individualOdds && localLoading && <Loading />}
                {odds && !loading && hasRun && !localLoading && (
                  <span className='value'>Calculated: {odds}%</span>
                )}
                {!loading && !hasRun && individualOdds && (
                  <span>
                    {Math.round(parseFloat((individualOdds * 100).toString()))}%
                  </span>
                )}
                {!odds &&
                  !loading &&
                  !hasRun &&
                  !individualOdds &&
                  !localLoading && <span className='value'>Not Yet Run</span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
