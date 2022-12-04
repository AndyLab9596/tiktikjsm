import { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

import useAuthStore from '../store/authStore';

const UploadPage: NextPage = () => {
    return (
        <div>UploadPage</div>
    )
}

export default UploadPage