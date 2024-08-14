import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SearchIcon({width = 16, height = 16, color = '#000'}) {
  return (
    <Svg
      className="feather feather-search"
      fill="none"
      height={height}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21L16.65 16.65" />
    </Svg>
  )
}

export default SearchIcon
