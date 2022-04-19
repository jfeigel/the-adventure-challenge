export function getTypedKeys<T>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof typeof obj>;
}
