import {create} from 'zustand';

const useAdminAuth = create((set) => ({
  adminAuth: JSON.parse(localStorage.getItem('adminAuth')) || null,
  setAdminAuth: (adminAuth) => {
    set((state) => ({ adminAuth }));
    localStorage.setItem('adminAuth', JSON.stringify(adminAuth));
  },
  logout: () => set({ adminAuth: null }),
}));

export default useAdminAuth;
