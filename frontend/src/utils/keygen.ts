export const keygen = (identifier: string) =>
  identifier.toLowerCase().split(' ').join('-')
