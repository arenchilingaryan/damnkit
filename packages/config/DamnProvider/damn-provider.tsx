import React from 'react';
import { DamnProviderType } from './damn-provider-types';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../base-theme';
import { mergeTheme } from '../mergeTheme';

export function DamnProvider({ theme, children }: DamnProviderType) {
  const customTheme = theme ? mergeTheme(theme) : defaultTheme;
  console.log('defaultTheme', defaultTheme);
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
}
