import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

const SideBar = () => {
  return (
    <div className=''>
        <header className='flex sticky bg-slate-500 z-1 justify-between align-middle h-[80px] p-[15px] border-b border-slate-200'>
            <div> 
                <Avatar className=''>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>        
            <div className=''>
                <IconButton className='p-3 text-white'>
                    <MessageIcon />
                </IconButton>
               <IconButton className='p-3 text-white'>
                    <MoreVertIcon />
               </IconButton>
            </div>
        </header>
    </div>
  )
}

export default SideBar