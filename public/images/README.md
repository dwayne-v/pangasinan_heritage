# Image assets

The `.jpg` files in this folder are lightweight placeholder
illustrations (not real photographs) so the project runs and screens
correctly out of the box. Replace them with the Provincial Tourism
Office's actual photography using these filenames referenced in
`src/data/heritageSites.ts`:

- `hundred-islands.jpg`
- `bolinao-lighthouse.jpg`
- `balungao-hot-spring.jpg`
- `patar-beach.jpg`
- `manleluag-spring.jpg`

Recommended: pre-resized WebP/JPEG, max 1600px wide, under 200KB each,
so the "lightning fast on 3G/4G" requirement holds without relying on
an on-demand image optimizer (which `output: "export"` does not run).
