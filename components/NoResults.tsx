import { NextPage } from 'next';
import React from 'react'
import { MdOutlineVideocamOff } from 'react-icons/md';
import { BiCommentX } from 'react-icons/bi';

interface INoResultsProps {
    text: string;
}

const NoResults: NextPage<INoResultsProps> = ({ text }) => {
    return (
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <p className='text-8xl'>
               {text === 'NO comments yet!' ? <BiCommentX/> : <MdOutlineVideocamOff />} 
            </p>
            <p className='text-2xl text-center'>{text}</p>
        </div>
    )
}

export default NoResults