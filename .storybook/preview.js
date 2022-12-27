import React from 'react';

const withThemeProvider = (Story) => {
  return Story();
};
export const decorators = [withThemeProvider];
