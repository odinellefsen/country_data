'use client'

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function Header() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}/`);
  }

  return (
    <header className="p-3 bg-[#030711] text-white flex justify-between items-center border-[#1D283A] border">
      <div className="flex items-center justify-start space-x-20">
        <div className="font-bold cursor-pointer">
          <Link href="/" className="text-lg text-bold pl-4 pr-4 py-2 w-34 rounded border border-[#1D283A]">
                GEOLEARN
          </Link>
        </div>
        <nav className="">
          <ul className="flex space-x-10 text-lg">
            <li>
              <Link href="/about">
                Countries
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Flags
              </Link>
            </li>
            <li>
              <Link href="/capitals">
                Capitals
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
      <form onSubmit={handleSubmit} className="relative">
        <input 
          type="text"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
          className="bg-[#030711] text-white rounded pl-4 pr-4 py-2 mr-10 w-64 focus:outline-none focus:ring-0 border-[#1D283A] border" 
          placeholder="Search a country..." 
        />
      </form>
    </header>
  );
}