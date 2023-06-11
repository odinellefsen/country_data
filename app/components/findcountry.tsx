'use client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/navigation'
import countriesapi from '../components/countries';

type CountryProps = {
  country: {
    name: {
      common: string;
    };
    maps: {
      population: number;
    };
  }
}

export default function Country({ country }: CountryProps) {
  // const router = useRouter()

  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  return (
    <div>
      <h1>{country?.name?.common ?? 'loading...'}</h1>
      <p>Population: {country?.maps?.population ?? 'loading...'}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries: Country[] = await res.json();
  
  const paths = countries.map((country: any) => ({
    params: { searchTerm: country.name.common },
  }))

  return { 
    paths, 
    fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || params.searchTerm === undefined || typeof params.searchTerm !== 'string') {
    return {
      notFound: true,
    }
  }

  const res = await fetch(`https://restcountries.com/v3.1/name/${params.searchTerm}`);
  const countries: Country[] = await res.json();

  const country = countries.find(c => c.name.common.toLowerCase() === (params.searchTerm as string).toLowerCase());

  if (!country) {
    return {
      notFound: true,
    }
  }

  return { 
    props: { 
      country 
    } 
  }
}