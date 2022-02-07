import { Breakpoint, Theme, useMediaQuery } from '@mui/material';

export default function useScreenSize() {
  const useMatchesBreakpoint = (
    breakpoint?: number | Breakpoint,
    direction?: 'down' | 'up'
  ): boolean =>
    useMediaQuery((theme: Theme) =>
      theme.breakpoints[direction ?? 'down'](breakpoint ?? 'sm')
    );

  const useMatchesQuery = (query: string): boolean => useMediaQuery(query);

  return { useMatchesBreakpoint, useMatchesQuery };
}
