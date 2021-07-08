import { KEY_WEATHERMAP, URL_WEATHERMAP } from "@env";

import axios from "axios";

import { Forecast } from "../utils/types/global";

const weatherApi = axios.create({
  baseURL: URL_WEATHERMAP,
  timeout: 5000,
});

export const fetch = async <T>(endpoint: string, options: Partial<T> | undefined = undefined) => {
  try {
    if (options) {
      options = {
        ...options,
        appid: KEY_WEATHERMAP,
        lang: "pt",
      };
    }
    const { data } = await weatherApi.get(endpoint, { params: options });
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchForecast = async (city: string, stateCode: string) => {
  const { list } = (await fetch("/forecast", { q: `${city},${stateCode}` })) as { list: Array<Forecast> };
  return list;
};
