import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton ,Button} from '@mui/material';
import Search from './Search';
import * as EmailValidator from 'email-validator';

const SideBar = () => {
    const createChat = () => {
        const input = prompt("Please enter the email address of the user you wish to chat with")

        if (!input) return null;
        if(EmailValidator.validate(input)){
            //we need to add the chat into the DB 'chats collection'.
        }
    }

  return (
    <div className=''>
        <header className='flex sticky bg-orange-500 z-1 justify-between align-middle h-[80px] p-[15px] border-b border-slate-200'>
            <div> 
                <Avatar className=' cursor-pointer hover:opacity-80'>
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

        <Search/>
        <Button className="text-slate-500 w-full hover:bg-orange-500 border-y-2 border hover:text-white" onClick={createChat}>Start a New Chat!</Button>

        {/* chat */}

    </div>
  )
}

export default SideBar