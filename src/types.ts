export type AntColor = 'BLACK' | 'RED' | 'SILVER';

export interface AntTypes {
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

export interface AntProps {
  ant: {
    __typename: string;
    color: AntColor;
    name: string;
    length: number;
    weight: number;
  };
}
