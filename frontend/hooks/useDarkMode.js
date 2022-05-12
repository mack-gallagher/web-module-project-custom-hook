import useLocalStorage from './useLocalStorage.js';

import React, { useState } from 'react';

export default function useDarkMode(initialMode) {
  const [mode, setMode] = useLocalStorage('mode', initialMode);

  return (
    [mode, setMode]
  )
}
