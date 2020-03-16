import { useMemo } from 'react';

export default function useDateTimeFormat(
  options: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormat {
  return useMemo(() => new Intl.DateTimeFormat('en-US', options), [
    JSON.stringify(options),
  ]);
}
