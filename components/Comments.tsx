import React, { SyntheticEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';

import useAuthStore from '../store/authStore';
import NoResults from './NoResults';
import { Video } from '../types';

interface IProps {
  isPostingComment: boolean;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  addComment: (e: React.FormEvent) => Promise<void>;
  comments: Video['comments']
}

const Comments = ({ isPostingComment, comment, setComment, addComment, comments }: IProps) => {
  const { userProfile, allUsers } = useAuthStore();
  return (
    <div className='border-t-2 border-gray-200 pt-4 px-10 bg-[#F8f8f8] border-b-2 lg:pb-0 pb-[100px]'>
      <div className='overflow-scroll lg:h-[475px]'>
        {comments?.length ? (
          <div>
            {comments.map((item, idx) => (
              <>
                {allUsers.map((user) => (
                  user._id === (item.postedBy._ref || item.postedBy._id) && (
                    <div className='p-2 items-center' key={idx + user._id}>
                      <Link href={`/profile/${user._id}`}>
                        <div className='flex items-start gap-3'>
                          <div className='w-8 h-8'>
                            <Image
                              src={user.image}
                              width={34}
                              height={34}
                              className="rounded-full"
                              alt="user-profile"
                              layout='responsive'
                            />

                          </div>
                          <div className='hidden xl:block'>
                            <p className='flex gap-1 items-center text-md font-bold text-primary lowercase'>
                              {user.userName.replaceAll(' ', '')} <GoVerified className='text-blue-400' />
                            </p>
                            <p className='capitalize text-gray-400 text-xs'>
                              {user.userName}
                            </p>
                          </div>
                        </div>
                      </Link>
                      <div>
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  )
                ))}
              </>
            ))}
          </div>
        ) : (
          <NoResults text='NO comments yet!' />
        )}
      </div>
      {userProfile && (
        <div className='absolute bottom-0 left-0 pb-6 px-2 md:px-10'>
          <form onSubmit={addComment} className='flex gap-4'>
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add comment..."
              className='bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px]
              lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300
              flex-1 rounded-lg
              '
            />
            <button className='text-md text-gray-400' onClick={() => { }}>
              {isPostingComment ? 'Commenting...' : 'Comment'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Comments