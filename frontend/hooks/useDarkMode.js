import React, { useState } from 'react';

export default function useDarkMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  return (
    [mode, setMode]
  )
}
