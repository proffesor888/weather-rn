import { useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { styles } from "./styles";
import { useSearch } from "@/hooks/useSearch";
import { useDispatch } from "react-redux";
import { setSearchResults, eraseSearchResults } from "@/store/searchSlice";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

export const Input = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { data, trigger } = useSearch();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.location && data?.current) {
      dispatch(setSearchResults(data));
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
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={onSearch}>
          <ThemedText lightColor="#ccc8c8" type="subtitle">Search</ThemedText>
        </Pressable>
        <Pressable style={styles.button} onPress={onClear}>
          <ThemedText lightColor="#ccc8c8" type="subtitle">Clear search</ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
};
