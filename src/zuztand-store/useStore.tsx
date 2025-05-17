import { create } from 'zustand';

export interface IUser {
  name: string;
  sname: string;
  gender: 'Male' | 'Female';
  terms: boolean;
  date: { from: string; to: string };
}
interface IUsersStore {
  users: IUser[];
  setUser: (user: IUser) => void;
}

export const useStore = create<IUsersStore>(set => ({
  users: [],
  setUser: user => set(state => ({ users: [...state.users, user] })),
}));
