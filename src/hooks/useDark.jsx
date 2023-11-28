import { useEffect, useState } from 'react';

export function useDark() {
  const [isDark, setIsDark] = useState(function () {
    const storedValue = localStorage.getItem('isDark');
    if (storedValue) return JSON.parse(storedValue);
    return true;
  });

  const handleClick = function handleClick() {
    setIsDark(isDark => !isDark);
  };

  useEffect(
    function () {
      localStorage.setItem('isDark', JSON.stringify(isDark));
    },
    [isDark]
  );

  useEffect(() => {
    const body = document.documentElement;
    if (isDark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDark]);

  return { isDark, handleClick };
}
