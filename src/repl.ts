export function cleanInput(input: string): string[] {
  const regSep = /\s+?/;
  const result = input.trim().toLowerCase().split(regSep);
  return result;
}
