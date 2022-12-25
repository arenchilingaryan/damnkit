import React from 'react';
import { DamnProvider } from '../packages/config/DamnProvider/damn-provider';

const withThemeProvider = (Story) => {
  return <DamnProvider>{Story()}</DamnProvider>;
};
export const decorators = [withThemeProvider];
