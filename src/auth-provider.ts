import type { AuthProvider } from "react-admin"
import { CONFIG } from "./config"
import { httpClient } from "./data-provider"

const getProfile = async () => {
    const response = await httpClient(`${CONFIG.API_URL}/auth/me`)
    return response.json;
}

export const authProvider: AuthProvider = {
    login: ({ username, password }: { username: string, password: string }) => {
        return httpClient(CONFIG.API_URL + "/auth/sign-in", {
            method: "POST",
            body: JSON.stringify({ email: username, password }),
            credentials: "include"
        })
    },
    logout: async () => {
        const response = await httpClient(CONFIG.API_URL + "/auth/sign-out", {
            method: "POST"
        });
        if (response.status === 200) {
            return Promise.resolve();
        }
        return Promise.reject();
    },
    checkError: (params) => {
        if (params.status === 401 || params.status === 403) {
            localStorage.removeItem("token");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: getProfile,
    getIdentity: getProfile,
    getPermissions: () => Promise.resolve()
}