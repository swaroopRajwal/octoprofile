import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Search: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const router = useRouter();

  const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue('');
    router.push(`/user/${inputValue}`)
  }

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return(
    <div className='relative self-center'>
      <form
        onSubmit={submitHandler}
      >
        <input
          type="text"
          onChange={changeHandler}
          value={inputValue}
          placeholder='Username'
          className='pl-11 rounded-md text-cream text-lg font-semibold bg-white focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-black focus:border-0' 
        />
        <svg className='left-2 h-7 w-7 top-2/4 transform -translate-y-2/4 absolute z-40' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#BF1363" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.9999 21L16.6499 16.65" stroke="#BF1363" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* <br /> */}
      </form>

    </div>
  )
}
export default Search;