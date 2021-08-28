import { RootObject } from '../pages/AntsPage';
import { useState, useEffect } from 'react';
import { Ant } from './Ant';
import { generateAntWinLikelihoodCalculator } from '../utils/generateAntWinLikelihoodCalculator';

export const AntsList = ({ ants }: RootObject): JSX.Element => {
  const [allOdds, setAllOdds] = useState<[number, string][] | []>([]);
  const [allAnts, setAllAnts] = useState({ ants: ants.ants, odds: allOdds });
  const [loading, setLoading] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const handleGetAllOdds = () => {
    setLoading(true);
    setHasRun(true);
    setAllOdds([]);

    allAnts.ants.forEach((ant) => {
      const oddsPack = generateAntWinLikelihoodCalculator();
      oddsPack((arg: number): number => {
        setAllOdds((prev) => [
          ...prev,
          [Math.round(parseFloat((arg * 100).toString())), ant.name],
        ]);
        return arg;
      });
    });
  };

  useEffect(() => {
    const antNamesReferenceArray: string[] = [];
    const sortedOdds = [...allOdds].sort((a, b) => b[0] - a[0]);

    sortedOdds.forEach((name) => {
      antNamesReferenceArray.push(name[1]);
    });

    allAnts.ants.forEach((ant) => {
      if (!antNamesReferenceArray.includes(ant.name))
        antNamesReferenceArray.push(ant.name);
    });

    const sortedAnts = [...allAnts.ants].sort((a, b) => {
      return (
        antNamesReferenceArray.indexOf(a.name) -
        antNamesReferenceArray.indexOf(b.name)
      );
    });

    setAllAnts({ ants: sortedAnts, odds: sortedOdds });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allOdds]);

  return (
    <>
      <div className='ant-list'>
        {ants.ants &&
          allAnts.ants.map((ant, index) => {
            return (
              <Ant
                ant={ant}
                key={ant.name}
                loading={allAnts && allAnts.odds[index] ? false : loading}
                hasRun={hasRun}
                odds={allAnts && allAnts.odds[index] && allAnts.odds[index][0]}
              />
            );
          })}
      </div>
      <button className='btn' id='get-all' onClick={handleGetAllOdds}>
        Get All odds
      </button>
    </>
  );
};
