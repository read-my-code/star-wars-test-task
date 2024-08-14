import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRightIcon({width = 16, height = 16, color = 'black'}) {
  return (
    <Svg
      height={height}
      viewBox="0 0 48 48"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z" />
      <Path d="M0-.25h48v48H0z" fill="none" />
    </Svg>
  )
}

export default ArrowRightIcon
