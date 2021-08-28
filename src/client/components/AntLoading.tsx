import { ReactComponent as AntPic } from './ant.svg';

export const AntLoading = (): JSX.Element => (
  <div id='ants'>
    <AntPic style={{ width: '10vw', right: '5vw', top: '15vw' }} />
    <AntPic
      style={{ width: '10vw', right: '20vw', fill: 'red', top: '15vw' }}
    />
    <AntPic
      style={{
        width: '10vw',
        right: '35vw',
        fill: 'silver',
        top: '15vw',
      }}
    />
    <AntPic
      style={{ width: '10vw', right: '50vw', fill: 'black', top: '15vw' }}
    />
    <AntPic
      style={{ width: '10vw', right: '65vw', fill: 'red', top: '15vw' }}
    />
  </div>
);
