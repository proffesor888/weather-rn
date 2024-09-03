import { API_KEY, BASE_URL, DAYS, FORMAT } from "@/constants";
import useSWRMutation from "swr/mutation";

export const getSearchResult = async (url: string, { arg }: { arg: string }) => {
  const urlWithParams = `${url}.${FORMAT}?key=${API_KEY}&q=${arg}&days=${DAYS}`;
  const response = await fetch(urlWithParams, { method: "GET" });
  return response.json();
};

export const useSearch = () => {
  const { data, trigger, error } = useSWRMutation(BASE_URL, getSearchResult);
  return {
    data,
    error,
    trigger,
  };
};
