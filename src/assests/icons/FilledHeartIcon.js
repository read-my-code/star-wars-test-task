import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FilledHeartIcon({width = 16, height = 16, color = 'black'}) {
  return (
    <Svg
      fill={color}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 230 230"
      xmlSpace="preserve">
      <Path d="M213.588 120.982L115 213.445l-98.588-92.463C-6.537 96.466-5.26 57.99 19.248 35.047l2.227-2.083c24.51-22.942 62.984-21.674 85.934 2.842L115 43.709l7.592-7.903c22.949-24.516 61.424-25.784 85.936-2.842l2.227 2.083c24.505 22.943 25.782 61.419 2.833 85.935z" />
    </Svg>
  );
}

export default FilledHeartIcon;
