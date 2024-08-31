import { useState } from "react";
import { NativeSyntheticEvent, Pressable, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { styles } from "./styles";
import { useSearch } from "@/hooks/useSearch";

export const Input = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const {data, trigger} = useSearch();
    const handleOnChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setInputValue(e.nativeEvent.text);
    }
    const onSearch = () => {
        trigger(inputValue);
    }
    return(
        <View>
            <TextInput 
                value={inputValue}
                onChange={handleOnChange}
                placeholder="Please, enter city name"
                style={styles.input}
            />
            <Pressable 
                onPress={onSearch}
            >
                <Text>Search</Text>
            </Pressable>
        </View>
    )
}