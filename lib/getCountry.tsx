export default async function getCountry(countryId: string) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryId}`);

  if (!res.ok) throw new Error('failed to fetch data');

  return res.json()
}
