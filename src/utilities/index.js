export function GetListFromEnum(value, resource) {
  return Object
    .entries(resource)
    .filter(entry => value & entry[1])
    .map(entry => entry[0]);
}

export function GetReadablePropName(string) {
  return string
    .split('')
    .map((char, i) => {
      if (i === 0) return char.toUpperCase();
      if (char === char.toUpperCase()) return ` ${char}`;
      return char;
    })
    .join('');
}
