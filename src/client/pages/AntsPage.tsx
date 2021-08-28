import { useQuery } from '@apollo/client';
import { QueryResult } from '@apollo/react-hooks';
import { AntLoading } from '../components/AntLoading';
import { AntsList } from '../components/AntsList';
import { Error } from '../components/Error';
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
  const { data, error, loading }: QueryResult<AntTypes> = useQuery(ALL_ANTS);

  if (error) return <Error />;

  if (loading) return <AntLoading />;

  return <>{data && <AntsList ants={data} />}</>;
};
