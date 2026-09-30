/**
 * Minimal className joiner (a tiny subset of the `clsx` package) so the
 * component library has zero runtime dependencies beyond React/Next --
 * every byte counts on a 3G/4G budget.
 */
export default function clsx(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}
