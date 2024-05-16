'use client';

import React, { useState, ChangeEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchProps {
  name: {
    common: string;
  };
}

const Searchbar: React.FC<SearchProps> = (props) => {
  const { name } = props;
  const [activeSearch, setActiveSearch] = useState<string[]>([]);

  const countryArray = name.common.split(',').map((country) => country.trim());
  console.log(countryArray);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      countryArray.filter((n) =>
        n.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <form className='w-[500px] relative'>
      <div className='relative'>
        <input
          type='search'
          placeholder='Type Here'
          className='w-full p-4 rounded-full bg-slate-800'
          onChange={(e) => handleSearch(e)}
        />
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full'>
          <AiOutlineSearch />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className='absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
          {activeSearch.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;