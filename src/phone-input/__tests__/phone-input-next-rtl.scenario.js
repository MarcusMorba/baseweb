/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import { ThemeProvider, LightTheme } from '../../index.js';
import { Scenario as PhoneInputNextScenario } from './phone-input-next.scenario.js';

export function Scenario() {
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <PhoneInputNextScenario />
      </div>
    </ThemeProvider>
  );
}
