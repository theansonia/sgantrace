import { ReactComponent as AntPic } from './ant.svg';
const width = window.innerWidth;

export const AntLoading = (): JSX.Element => (
  <div id='ants'>
    <AntPic style={{ width: '10vw', right: width * 1.5, top: '15vw' }} />
    <AntPic
      style={{ width: '10vw', right: width * 1.35, fill: 'red', top: '15vw' }}
    />
    <AntPic
      style={{
        width: '10vw',
        right: width * 1.1,
        fill: 'silver',
        top: '15vw',
      }}
    />
    <AntPic
      style={{ width: '10vw', right: width * 0.95, fill: 'black', top: '15vw' }}
    />
    <AntPic
      style={{ width: '10vw', right: width * 0.8, fill: 'red', top: '15vw' }}
    />
  </div>
);
