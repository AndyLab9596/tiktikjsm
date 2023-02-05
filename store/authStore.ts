import axios from 'axios';
import create, { SetState, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '../types';

import { BASE_URL } from '../utils';

interface IAuthStore {
    userProfile: IUser | null;
    allUsers: IUser[];
    addUser: (user: IUser) => void;
    removeUser: () => void;
    fetchAllUsers: () => Promise<void>;
}

const authStore = (set: StoreApi<IAuthStore>['setState']) => ({
    userProfile: null,
    allUsers: [],
    addUser: (user: any) => set({ userProfile: user }),
    removeUser: () => set({ userProfile: null }),

    fetchAllUsers: async () => {
        const response = await axios.get(`${BASE_URL}/api/users`)

        set({ allUsers: response.data })
    }
});

const useAuthStore = create(
    persist<IAuthStore>(authStore, {
        name: 'auth'
    })
)

export default useAuthStore;