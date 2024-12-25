import { create } from "zustand";

const useHomeStore = create((set) => ({
    selectedUser: "",
    selectUser: (id) => set({ selectedUser: id }),
    messeges:[],
    setmesseges:(msgs)=>set({messeges:msgs})

  }));
  

export default useHomeStore;
