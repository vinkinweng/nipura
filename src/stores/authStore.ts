import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LoginUser {
    id: number;
    username: string;
    name: string;
    roles: string[];
}

interface AuthState {
    token: string | null;
    user: LoginUser | null;
    isAuthenticated: boolean;
    login: (token: string, user: LoginUser) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            user: null,
            isAuthenticated: false,

            login: (token, user) =>
                set({
                    token,
                    user,
                    isAuthenticated: true,
                }),

            logout: () =>
                set({
                    token: null,
                    user: null,
                    isAuthenticated: false,
                }),
        }),
        {
            name: "nipura-auth-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )

);