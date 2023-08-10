export function formatDate(dateString) {
  const [year, month, day] = dateString?.split('-');
  const date = new Date(year, month - 1, day); // month is zero-based in Date constructor
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(options);
}
