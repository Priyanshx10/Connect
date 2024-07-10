import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';


const Search = () => {
  return (
    <div className='flex items-center p-[20px]'>
       
        <IconButton className='p-3 text-slate-500 bg-white hover:text-white hover:bg-slate-500'>
            <SearchIcon />
        </IconButton>
        <input placeholder='Search in Chats' className='no-border px-5 mx-4 py-2 outline-none flex-1'>
        </input>
       
    </div>
  )
}

export default Search