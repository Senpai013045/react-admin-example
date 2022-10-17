import jsonServerProvider from "ra-data-json-server";
import { CONFIG } from "./config";
import { fetchUtils } from "react-admin";

export const httpClient = (url: string, options = {} as RequestInit) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.credentials = "include";
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider = jsonServerProvider(CONFIG.API_URL, httpClient)