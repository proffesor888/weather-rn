import { useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import { styles } from "./styles";
import { useSearch } from "@/hooks/useSearch";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchResults,
  eraseSearchResults,
  setError,
} from "@/store/searchSlice";
import { ThemedView } from "../common/ThemedView";
import { ThemedText } from "../common/ThemedText";
import { getSearchError } from "@/store/selectors";

export const Input = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { data, trigger } = useSearch();
  const dispatch = useDispatch();
  const errorFromState = useSelector(getSearchError);
  const hasError = data?.error && errorFromState;

  useEffect(() => {
    if (data?.location && data?.current) {
      dispatch(setSearchResults(data));
    }
    if (data?.error) {
      dispatch(eraseSearchResults());
      dispatch(setError(data.error.message));
    }
  }, [data]);

  const handleOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setInputValue(e.nativeEvent.text);
  };
  const onSearch = () => {
    trigger(inputValue);
  };
  const onClear = () => {
    dispatch(eraseSearchResults());
    setInputValue("");
  };
  return (
    <ThemedView>
      <TextInput
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Please, enter city name"
        style={styles.input}
      />
      <ThemedView style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={onSearch}>
          <ThemedText lightColor="#ccc8c8" type="subtitle">
            Search
          </ThemedText>
        </Pressable>
        <Pressable style={styles.button} onPress={onClear}>
          <ThemedText lightColor="#ccc8c8" type="subtitle">
            Clear search
          </ThemedText>
        </Pressable>
      </ThemedView>
      <ThemedView style={styles.errorContainer}>
        {hasError && (
          <ThemedText type="subtitle" lightColor="#ff0000">
            {data.error.message}
          </ThemedText>
        )}
      </ThemedView>
    </ThemedView>
  );
};
