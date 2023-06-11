export default async function countries(searchTerm: string) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  // The endpoint returns an array of matching countries. We assume the first match is the correct one.
  return data[0];
}