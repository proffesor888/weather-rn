import useSWRMutation from 'swr/mutation';

const BASE_URL = "http://api.weatherapi.com/v1/current";
const FORMAT = "json";
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const getSearchResult = async (
    url: string,
    { arg }: { arg: string }
  ) => {
    const urlWithParams = `${url}.${FORMAT}?key=${API_KEY}&q=${arg}`;
    const response = await fetch(urlWithParams, {method: "GET"});
    return response.json();
  }

export const useSearch = () => {
    const {data, trigger} = useSWRMutation(BASE_URL, getSearchResult)
    return {
        data,
        trigger
    }
} 