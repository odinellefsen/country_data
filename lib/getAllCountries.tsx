export default async function getAllCountries() {
    const res = await fetch('https://restcountries.com/v3.1/all');

    if (!res.ok) throw new Error('failed to fetch data');

    return res.json();
}
