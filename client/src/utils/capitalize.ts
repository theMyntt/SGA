export function CapitalizeOneLetter(text: string): string {
  text = text.toLocaleLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function CapitalizeName(firstName: string, lastName: string): string {
  const capitalizedFirstName = CapitalizeOneLetter(firstName);

  const capitalizedLastNames = lastName
      .split(" ")
      .map(name => CapitalizeOneLetter(name))
      .join(" ");

  return `${capitalizedFirstName} ${capitalizedLastNames}`;
}