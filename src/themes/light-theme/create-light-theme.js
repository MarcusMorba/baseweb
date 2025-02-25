/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import animation from '../shared/animation.js';
import borders from '../shared/borders.js';
import breakpoints from '../shared/breakpoints.js';
import deepMerge from '../../utils/deep-merge.js';
import defaultColorTokens from './color-tokens.js';
import getComponentColorTokens from './color-component-tokens.js';
import getDeprecatedSemanticColorTokens from './color-deprecated-semantic-tokens.js';
import getSemanticColorTokens from './color-semantic-tokens.js';
import getTypography from '../shared/typography.js';
import grid from '../shared/grid.js';
import lighting from '../shared/lighting.js';
import mediaQuery from '../shared/media-query.js';
import sizing from '../shared/sizing.js';

import type { PrimitivesT, ColorTokensT } from '../types.js';
import type { ThemeT } from '../../styles/types.js';

export default function createLightTheme(
  // Used to derive typography and color theme properties
  primitives?: $Shape<PrimitivesT> = {},
  // Used to override default theme property values derived from primitives
  overrides?: {}
): ThemeT {
  // Extract font tokens and color tokens from primitives
  const { primaryFontFamily, ...customColorTokens } = primitives;
  // Assemble color tokens by overriding defaults with custom color tokens
  const colorTokens: ColorTokensT = {
    ...defaultColorTokens,
    ...customColorTokens,
  };
  const theme = {
    animation,
    borders,
    breakpoints,
    colors: {
      ...colorTokens,
      ...getComponentColorTokens(colorTokens),
      ...getDeprecatedSemanticColorTokens(colorTokens),
      ...getSemanticColorTokens(colorTokens),
    },
    direction: 'auto',
    grid,
    lighting,
    mediaQuery,
    sizing,
    // If primaryFontFamily is not provided, we use our default font tokens
    typography: primaryFontFamily ? getTypography({ primaryFontFamily }) : getTypography(),
    // TODO(#2318) Remove in v11, the next major version.
    // Do not use.
    zIndex: {
      modal: 2000,
    },
  };

  return deepMerge(theme, overrides);
}
