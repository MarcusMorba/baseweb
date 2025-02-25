/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import type { OverrideT } from '../helpers/overrides.js';
import type { IconPropsT } from '../icon/types.js';
import { ARTWORK_SIZES, SHAPE } from './constants.js';

export type ArtworkSizesT =
  | typeof ARTWORK_SIZES.SMALL
  | typeof ARTWORK_SIZES.MEDIUM
  | typeof ARTWORK_SIZES.LARGE;

export type ShapeT = typeof SHAPE.DEFAULT | typeof SHAPE.ROUND;

export type StyledRootPropsT = {
  $shape: ShapeT,
};
export type StyledArtworkContainerPropsT = {
  $artworkSize: ArtworkSizesT | number,
  $sublist?: boolean,
};
export type StyledContentPropsT = { $mLeft: boolean, $sublist: boolean };

export type OverridesT = {
  Root?: OverrideT,
  ArtworkContainer?: OverrideT,
  Content?: OverrideT,
  EndEnhancerContainer?: OverrideT,
};

export type PropsT = {|
  artwork?: React.AbstractComponent<{
    ...IconPropsT,
    size: $PropertyType<IconPropsT, 'size'>,
  }>,
  artworkSize?: ArtworkSizesT | number,
  shape?: ShapeT,
  children: React.Node,
  endEnhancer?: React.AbstractComponent<{}>,
  overrides?: OverridesT,
  sublist?: boolean,
|};

export type LabelPropsT = {|
  children: React.Node,
  description?: React.Node,
  sublist?: boolean,
  overrides?: {|
    LabelContent?: OverrideT,
    LabelDescription?: OverrideT,
    LabelSublistContent?: OverrideT,
  |},
|};

export type HeadingOverridesT = {
  Root?: OverrideT,
  Content?: OverrideT,
  HeadingContainer?: OverrideT,
  SubHeadingContainer?: OverrideT,
  EndEnhancerContainer?: OverrideT,
  EndEnhancerDescriptionContainer?: OverrideT,
};

export type HeadingPropsT = {|
  heading: React.Node | React.AbstractComponent<{}>,
  subHeading?: React.Node | React.AbstractComponent<{}>,
  endEnhancer?: React.Node | React.AbstractComponent<{}>,
  endEnhancerDescription?: React.Node | React.AbstractComponent<{}>,
  overrides?: HeadingOverridesT,
  maxLines?: 1 | 2,
|};

export type StyledHeadingHeadingPropsT = {|
  $maxLines: number,
|};

export type MenuAdapterPropsT = {
  ...PropsT,
  // flowlint-next-line unclear-type:off
  item?: any,
  onMouseEnter?: (MouseEvent) => mixed,
  onClick?: (MouseEvent) => mixed,
  $size?: string,
  $isHighlighted?: boolean,
  $disabled?: boolean,
};
