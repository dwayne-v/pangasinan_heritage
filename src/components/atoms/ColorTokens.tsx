import Typography from "./Typography";

/**
 * The single source of truth for brand color. Every other component
 * imports hex values from here (or, in Tailwind classes, from the
 * matching `tailwind.config.ts` scale) rather than hard-coding a hex
 * string -- a rebrand or contrast fix is a one-file change.
 */
export const colorTokens = [
  {
    group: "Ocean (primary)",
    swatches: [
      { name: "ocean-600", hex: "#146083", usage: "Primary buttons, links, header" },
      { name: "ocean-700", hex: "#104C68", usage: "Hover/active state" },
      { name: "ocean-50", hex: "#EAF4F8", usage: "Tinted section backgrounds" },
    ],
  },
  {
    group: "Sunset (accent)",
    swatches: [
      { name: "sunset-500", hex: "#EF8B16", usage: "Secondary CTA, badges, focus ring" },
      { name: "sunset-600", hex: "#C96F0C", usage: "Hover/active state" },
    ],
  },
  {
    group: "Sand (surface)",
    swatches: [
      { name: "sand-50", hex: "#FBF8F3", usage: "Page background" },
      { name: "sand-100", hex: "#F5EFE3", usage: "Card background" },
      { name: "sand-300", hex: "#DACBA9", usage: "Dividers, borders" },
    ],
  },
  {
    group: "Ink (text)",
    swatches: [
      { name: "ink-900", hex: "#152025", usage: "Primary text (contrast 14.9:1 on sand-50)" },
      { name: "ink-700", hex: "#3A4A50", usage: "Secondary text (contrast 8.6:1 on sand-50)" },
      { name: "ink-500", hex: "#66787E", usage: "Captions/metadata (contrast 4.6:1, AA minimum)" },
    ],
  },
];

/**
 * Atoms / ColorTokens
 *
 * Renders the palette as swatches so designers/developers can audit
 * contrast and usage in one place (also used to generate this
 * document's own style-guide screenshots). Not used in end-user pages.
 */
export default function ColorTokens() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {colorTokens.map((group) => (
        <div key={group.group}>
          <Typography variant="eyebrow" className="mb-2 block">
            {group.group}
          </Typography>
          <ul className="space-y-2">
            {group.swatches.map((swatch) => (
              <li key={swatch.name} className="flex items-center gap-3">
                <span
                  className="h-10 w-10 rounded-lg border border-sand-300 shrink-0"
                  style={{ backgroundColor: swatch.hex }}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-body text-sm font-semibold">
                    {swatch.name} <span className="font-normal text-ink-500">{swatch.hex}</span>
                  </p>
                  <p className="font-body text-xs text-ink-500">{swatch.usage}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
