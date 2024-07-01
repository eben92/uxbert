export function generateStylesFromValues(values: number[], hex: string) {
  return {
    "--tw-gradient-from": `${hex} var(--tw-gradient-from-position)`,
    "--tw-gradient-to": `rgb(${values[1]} ${values[2]} ${values[3]} / 0) var(--tw-gradient-to-position)`,
    "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)",
  };
}
