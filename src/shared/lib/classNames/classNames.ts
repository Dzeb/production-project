type Mods = Record<string, boolean | string>;

export const classNames = (
  className: string,
  mods: Mods = {},
  addintional: string[] = [],
): string =>
  [
    className,
    ...addintional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(' ');
