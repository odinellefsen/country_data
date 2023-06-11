import getCountry from "@/lib/getCountry"
import Header from "../components/header"
import Flag from "../components/Flag"
// import { Suspense } from "react"

type Params = {
  params: {
      countryId: string;
  }
}

type Country = {
  name: {
    common: string;
  }
  maps: {
    population: number;
  }
  flags: {
    svg: string;
  }
}

export default async function CountrySite({ params: { countryId } }: Params) {
  // const countryRes: Promise<Country[]> = getCountry(countryId);
  let country: Country | null = null;

  try {
    const countryRes: Promise<Country[]> = getCountry(countryId);
    [country] = await countryRes;
  } catch (error) {
    console.error('Failed to fetch country:', error);
  }
// bg-[#030711]
  return (
    <div className="text-xl">
      <Header />
      {country && <Flag country={country} />}
    </div>
  )
}