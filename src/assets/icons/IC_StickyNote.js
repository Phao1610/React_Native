import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19 5v9h-5v5H5V5h14Zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2Zm-7 11H7v-2h5v2Zm5-4H7V8h10v2Z"
      fill="#fff"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
