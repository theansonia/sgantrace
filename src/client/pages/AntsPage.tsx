import { useQuery } from '@apollo/client';
import { QueryResult } from '@apollo/react-hooks';
import { AntsList } from '../components/AntsList';
// import { Loader } from '../components/Loader';
import { ALL_ANTS } from '../queries/ALL_ANTS';

export type AntColor = 'BLACK' | 'RED' | 'SILVER';
export interface AntTypes {
  length: number;
  ants: {
    __typename: string;
    color: AntColor;
    name: string;
    length: number;
    weight: number;
  }[];
}

export interface RootObject {
  ants: AntTypes;
}

export const AntsPage = (): JSX.Element => {
  const { loading, error, data }: QueryResult<AntTypes> = useQuery(ALL_ANTS);

  if (error) return <p>Error :(</p>;
  if (loading) return <p>...Loading</p>;

  return <>{data && <AntsList ants={data} />}</>;
};
