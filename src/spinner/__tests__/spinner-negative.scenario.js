/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import { Spinner } from '../index.js';

export function Scenario() {
  return (
    <Spinner
      overrides={{
        ActivePath: { style: ({ $theme }) => ({ fill: $theme.colors.negative }) },
      }}
    />
  );
}
