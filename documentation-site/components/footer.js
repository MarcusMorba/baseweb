/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import { Block } from 'baseui/block';
import Link from 'next/link';
import { themedStyled } from '../pages/_app';

const UberLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 926.906 321.777" width="4em">
    <g fill="currentColor">
      <path d="M53.328,229.809c3.917,10.395,9.34,19.283,16.27,26.664c6.93,7.382,15.14,13.031,24.63,16.948 c9.491,3.917,19.81,5.875,30.958,5.875c10.847,0,21.015-2.034,30.506-6.102s17.776-9.792,24.856-17.173 c7.08-7.382,12.579-16.194,16.496-26.438c3.917-10.244,5.875-21.692,5.875-34.347V0h47.453v316.354h-47.001v-29.376 c-10.545,11.147-22.974,19.734-37.285,25.761c-14.312,6.025-29.752,9.038-46.323,9.038c-16.873,0-32.615-2.938-47.228-8.813 c-14.612-5.875-27.267-14.235-37.962-25.082S15.441,264.006,9.265,248.79C3.088,233.575,0,216.628,0,197.947V0h47.453v195.236 C47.453,207.891,49.411,219.414,53.328,229.809z" />
      <path d="M332.168,0v115.243c10.545-10.545,22.748-18.905,36.607-25.082s28.924-9.265,45.193-9.265 c16.873,0,32.689,3.163,47.453,9.49c14.763,6.327,27.567,14.914,38.414,25.761s19.434,23.651,25.761,38.414 c6.327,14.764,9.49,30.431,9.49,47.002c0,16.57-3.163,32.162-9.49,46.774c-6.327,14.613-14.914,27.343-25.761,38.188 c-10.847,10.847-23.651,19.434-38.414,25.761c-14.764,6.327-30.581,9.49-47.453,9.49c-16.27,0-31.409-3.088-45.419-9.265 c-14.01-6.176-26.288-14.537-36.833-25.082v28.924h-45.193V0H332.168z M337.365,232.746c4.067,9.642,9.717,18.078,16.948,25.309 c7.231,7.231,15.667,12.956,25.308,17.174c9.642,4.218,20.036,6.327,31.184,6.327c10.847,0,21.09-2.109,30.731-6.327 s18.001-9.942,25.083-17.174c7.08-7.23,12.729-15.667,16.947-25.309c4.218-9.641,6.327-20.035,6.327-31.183 c0-11.148-2.109-21.618-6.327-31.41s-9.867-18.303-16.947-25.534c-7.081-7.23-15.441-12.88-25.083-16.947 s-19.885-6.102-30.731-6.102c-10.846,0-21.09,2.034-30.731,6.102s-18.077,9.717-25.309,16.947 c-7.23,7.231-12.955,15.742-17.173,25.534c-4.218,9.792-6.327,20.262-6.327,31.41C331.264,212.711,333.298,223.105,337.365,232.746 z" />
      <path d="M560.842,155.014c6.025-14.462,14.312-27.191,24.856-38.188s23.049-19.659,37.511-25.986 s30.129-9.49,47.001-9.49c16.571,0,31.937,3.013,46.098,9.038c14.16,6.026,26.362,14.387,36.606,25.083 c10.244,10.695,18.229,23.35,23.952,37.962c5.725,14.613,8.587,30.506,8.587,47.68v14.914H597.901 c1.507,9.34,4.52,18.002,9.039,25.985c4.52,7.984,10.168,14.914,16.947,20.789c6.779,5.876,14.462,10.471,23.049,13.784 c8.587,3.314,17.7,4.972,27.342,4.972c27.418,0,49.563-11.299,66.435-33.896l32.991,24.404 c-11.449,15.366-25.609,27.418-42.481,36.155c-16.873,8.737-35.854,13.106-56.944,13.106c-17.174,0-33.217-3.014-48.131-9.039 s-27.869-14.462-38.866-25.309s-19.659-23.576-25.986-38.188s-9.491-30.506-9.491-47.679 C551.803,184.842,554.817,169.476,560.842,155.014z M624.339,137.162c-12.805,10.696-21.316,24.932-25.534,42.708h140.552 c-3.917-17.776-12.278-32.012-25.083-42.708c-12.805-10.695-27.794-16.043-44.967-16.043 C652.133,121.119,637.144,126.467,624.339,137.162z" />
      <path d="M870.866,142.359c-9.641,10.545-14.462,24.856-14.462,42.934v131.062h-45.646V85.868h45.193v28.472 c5.725-9.34,13.182-16.722,22.371-22.145c9.189-5.424,20.111-8.136,32.766-8.136h15.817v42.482h-18.981 C892.86,126.542,880.507,131.814,870.866,142.359z" />
    </g>
  </svg>
);

const StyledFooter = themedStyled<{}>(
  'footer',
  ({ $theme: { typography, sizing, colors, name } }) => ({
    ...typography.font300,
    position: 'sticky',
    bottom: 0,
    color: colors.contentPrimary,
    backgroundColor: name.startsWith('light-theme') ? colors.mono200 : colors.headerNavigationFill,
    width: '100%',
    marginTop: sizing.scale1400,
    paddingTop: sizing.scale1600,
    paddingBottom: sizing.scale1600,
    textAlign: 'center',
  })
);

const StyledLink = themedStyled('a', ({ $theme }) => ({
  textDecoration: 'none',
  color: $theme.colors.contentPrimary,
  display: 'inline-block',
  cursor: 'pointer',
  marginLeft: '32px',
  ':first-child': {
    marginLeft: '0',
  },
  ':focus': {
    outline: `3px solid ${$theme.colors.accent}`,
    outlineOffset: '3px',
  },
  ':hover': {
    color: $theme.colors.primary,
    textDecoration: 'none',
  },
}));

function Footer() {
  return (
    <StyledFooter>
      <Block paddingBottom="scale1000">
        <StyledLink href="https://github.com/uber/baseweb" target="_blank">
          GitHub
        </StyledLink>
        <StyledLink href="https://twitter.com/BaseWebReact" target="_blank">
          Twitter
        </StyledLink>
        <StyledLink
          href="https://join.slack.com/t/baseui/shared_invite/zt-5f1s4d10-1D2uywAECAG50m64PTH9cw"
          target="_blank"
        >
          Slack Chat room
        </StyledLink>
        <StyledLink href="https://github.com/uber/baseweb/releases" target="_blank">
          Changelog
        </StyledLink>
        <Link href="/blog">
          <StyledLink href="/blog">Blog</StyledLink>
        </Link>
      </Block>
      <UberLogo />
    </StyledFooter>
  );
}

export default Footer;
