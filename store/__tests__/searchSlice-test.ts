import { RootState } from "..";
import { MOCKED_STORE } from "../mocks";
import {
  searchReducer,
  setSearchResults,
  eraseSearchResults,
  setError,
  initialSearchState,
} from "../searchSlice";
import { ICurrent, ILocation } from "../types";

describe("searchSlice", () => {
  test("setSearchResults sets data to store", () => {
    const data = {
      current: MOCKED_STORE.search.current as ICurrent,
      location: MOCKED_STORE.search.location as ILocation,
    };
    const action = setSearchResults(data);
    const result = searchReducer(initialSearchState, action);
    expect(result).toEqual({
        ...initialSearchState,
        ...data
    })
  });
  test("eraseSearchResults removes all data", () => {
    const action = eraseSearchResults();
    const result = searchReducer(MOCKED_STORE.search, action);
    expect(result).toEqual(initialSearchState);
  })
  test("setError sets error data", () => {
    const action = setError({error: "ERROR"});
    const result = searchReducer(initialSearchState, action);
    expect(result).toEqual({...initialSearchState, error: {error: "ERROR"}});
  })
});
