export type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
  className: string,
  mods: Mods = {},
  addintional: Array<string | undefined> = [],
): string =>
  [
    className,
    ...addintional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(' ');
