import { create } from "zustand";

interface Client {
  nickname: string;
  setNickname: (newNickname: string) => void;
}

const useStore = create<Client>()((set) => ({
  nickname: "",
  setNickname: (newNickname) => set(() => ({ nickname: newNickname })),
}));

export default useStore;
