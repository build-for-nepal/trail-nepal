type ClassValue = string | false | null | undefined;

// A plain join, not tailwind-merge. Conflicting utilities are settled by stylesheet order,
// not by their order here, so never pass two classes that set the same property.
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
