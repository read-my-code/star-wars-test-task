import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowLeftIcon({width = 16, height = 16, color = 'black'}) {
  return (
    <Svg
      height={height}
      viewBox="0 0 48 48"
      width={width}
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z" />
      <Path d="M0-.5h48v48H0z" fill="none" />
    </Svg>
  );
}

export default ArrowLeftIcon;
