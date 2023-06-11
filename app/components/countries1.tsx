export default async function countries() { // searchTerm: string

    const res = await fetch('https://restcountries.com/v3.1/all')
  
    if (!res.ok) throw new Error('Failed to fetch data');
    
    return res.json();
  }