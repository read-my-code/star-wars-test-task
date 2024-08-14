import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function PersonIcon({width = 30, height = 30, color = '#000'}) {
  return (
    <Svg
      color={color}
      className="feather feather-user"
      fill="none"
      height={height}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  );
}

export default PersonIcon;
