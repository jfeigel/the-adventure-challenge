import { useEffect, useRef } from 'react';

/**
 * EXAMPLE:
 *
 * function Component() {
 *   const [value, setValue] = useState(0);
 *   const prevValue = usePrevState(value)
 *
 *   return <span>Now: {value}, before: {prevValue}</span>;
 * }
 */
export function usePrevState<T>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
