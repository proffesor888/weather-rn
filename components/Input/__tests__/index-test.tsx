import { Input } from "..";
import { screen, render } from "@testing-library/react-native";

describe("<Input />", () => {
    test("renders input", () => {
        render(<Input />)
    })
    screen.debug()
})