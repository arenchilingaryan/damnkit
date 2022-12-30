import React from 'react';
import { DamnProviderType } from './damn-provider-types';
import { mergeConfig } from '../merge-config';
import defaultConfig from '../base-config';
import { ConfigContext } from '../context/config-context';

export default function DamnProvider({ config: settings, children }: DamnProviderType) {
  return (
    <ConfigContext.Provider value={settings ? mergeConfig(settings) : defaultConfig}>{children}</ConfigContext.Provider>
  );
}
