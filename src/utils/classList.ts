/** Builds a space-separated string from a list of HTML class names. */
export default function classList(...classNames: unknown[]): string {
  return classNames
    .filter((className) => typeof className === 'string')
    .join(' ')
    .trim();
}
