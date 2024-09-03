import { render, screen } from "@testing-library/react-native";
import { TabBarIcon } from "../TabBarIcon";


describe("<TabBarIcon />", () => {
    test("renders", () => {
        render(<TabBarIcon name="search" style={{marginTop: 3}}/>);
        screen.debug();
        expect(screen.getByRole("text")).toBeOnTheScreen();
    })
})