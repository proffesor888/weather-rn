import {
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { useSearch } from "@/hooks/useSearch";
import {
  setSearchResults,
  eraseSearchResults,
  setError,
} from "@/store/searchSlice";
import { ThemedView } from "../common/ThemedView";
import { ThemedText } from "../common/ThemedText";
import { getSearchError } from "@/store/selectors";
import { ERROR_COLOR, MAIN_LIGHT_COLOR } from "@/constants";
import { useEffect, useState } from "react";

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
    text: string
  ) => {
    setInputValue(text);
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
        onChangeText={handleOnChange}
        placeholder="Please, enter city name"
        style={styles.input}
        testID="search-input"
      />
      <ThemedView style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={onSearch}>
          <ThemedText lightColor={MAIN_LIGHT_COLOR} type="subtitle">
            Search
          </ThemedText>
        </Pressable>
        <Pressable testID="search-clear" style={styles.button} onPress={onClear}>
          <ThemedText lightColor={MAIN_LIGHT_COLOR} type="subtitle">
            Clear search
          </ThemedText>
        </Pressable>
      </ThemedView>
      <ThemedView style={styles.errorContainer}>
        {hasError && (
          <ThemedText
            testID="search-error"
            type="subtitle"
            lightColor={ERROR_COLOR}
          >
            {data.error.message}
          </ThemedText>
        )}
      </ThemedView>
    </ThemedView>
  );
};
