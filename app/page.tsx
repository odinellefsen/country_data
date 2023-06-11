import countriesapi from './components/countries1';
import Header from './components/header';

export default async function Home() {
  
  const countryData: Promise<Country[]> = countriesapi();

  const country = await countryData;

  return (
    <main className="bg-[#030711]">
      <Header />
      {country.map(current_country => {
        return (
          <div key={current_country.maps.population} className="flex text-white pl-5">
            <p className="mr-2 font-bold">
              country:
            </p>
            <p className="mr-2 font-normal">
              {current_country.name.common}
            </p>
            <p className="mr-2 font-bold">
              capital:
            </p>
            <p className="mr-2 font-normal">
              {current_country.capital}
            </p>
            <p className="mr-2 font-bold">
              UN member:
            </p>
            <p className="mr-2 font-normal">
              {current_country.unMember ? 'Yes' : "No"}
            </p>
          </div>
        )
      })}
    </main>
  )
}