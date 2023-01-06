import React, { useMemo } from 'react';
import { DamnProviderType } from './damn-provider-types';
import { mergeConfig } from '../merge-config';
import defaultConfig from '../base-config';
import { ConfigContext } from '../context/config-context';

export default function DamnProvider({ config: settings, children }: DamnProviderType) {
  const providerValue = useMemo(() => {
    return settings ? mergeConfig(settings) : defaultConfig;
  }, [settings, settings, defaultConfig]);

  return <ConfigContext.Provider value={providerValue}>{children}</ConfigContext.Provider>;
}
