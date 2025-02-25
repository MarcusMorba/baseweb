/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import { SIZE } from './constants.js';
import type { OverrideT } from '../helpers/overrides.js';
import type { SizingT } from '../themes/types.js';

export type SizeT = $Keys<typeof SIZE>;
export type SpinnerPropsT = {
  /** Sets aria-label attribute. */
  'aria-label'?: string,
  /** Size of element, will be passed to the svg width/height style. Can also be a value included in */
  size?: number | string,
  /** Color of icon, will be used as svg fill */
  color?: string,
  /** Silence should only be used in baseui. Used to not spam console on composed components like Select */
  $silenceV11DeprecationWarning?: boolean,
  /** Allows you to set the SVG `<title>` label, which is used for accessibility */
  title?: string,
  overrides?: {
    Svg?: OverrideT,
    ActivePath?: OverrideT,
    TrackPath?: OverrideT,
  },
};

export type StyledSpinnerNextPropsT = {
  /** Color of progress indicator */
  $color?: string,
  /** Width of the progress indicator "stroke".  */
  $borderWidth?: number | string | $Keys<SizingT> | SizeT,
  /** Height/width of the box the indicator will appear in. */
  $size?: number | string | $Keys<SizingT> | SizeT,
};
