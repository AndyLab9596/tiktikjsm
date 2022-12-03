import { NextPage } from 'next';
import React from 'react'

interface INoResultsProps {
    text: string;
}

const NoResults: NextPage<INoResultsProps> = ({ text }) => {
    return (
        <div>NoResults</div>
    )
}

export default NoResults