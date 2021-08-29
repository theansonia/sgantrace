import { ReactComponent as AntPic } from './ant.svg';

export const AntLoading = (): JSX.Element => (
  <div id='ants'>
    <AntPic style={{ width: '10vw', right: '135vw', top: '15vw' }} />
    <AntPic
      style={{ width: '10vw', right: '120vw', fill: 'red', top: '15vw' }}
    />
    <AntPic
      style={{
        width: '10vw',
        right: '105vw',
        fill: 'silver',
        top: '15vw',
      }}
    />
    <AntPic
      style={{ width: '10vw', right: '90vw', fill: 'black', top: '15vw' }}
    />
    <AntPic
      style={{ width: '10vw', right: '75vw', fill: 'red', top: '15vw' }}
    />
  </div>
);
