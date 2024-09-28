import { useTheme } from "next-themes";
import React, { useMemo } from "react";

function useCurrentTheme() {
  const { systemTheme, theme } = useTheme();

  const currentTheme = useMemo(() => {
    if (theme == "system") {
      return systemTheme;
    }
    return theme;
  }, [theme, systemTheme]);

  return {
    currentTheme,
  };
}

export default useCurrentTheme;
