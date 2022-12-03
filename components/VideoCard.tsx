import { NextPage } from 'next';
import React from 'react';
import { Video } from '../types';

interface IVideoCardProps {
    post: Video
}

const VideoCard: NextPage<IVideoCardProps> = ({ post }) => {
    return (
        <div>VideoCard</div>
    )
}

export default VideoCard