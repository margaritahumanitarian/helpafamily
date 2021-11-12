export function isAvailable(value) {
  return (
    value != null ||
    value != undefined ||
    (typeof value === 'string' && value.strip() != '')
  );
}
