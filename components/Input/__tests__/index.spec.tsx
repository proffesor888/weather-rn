import { Input } from "../index";
import {render, screen, fireEvent} from '@testing-library/react-native'

describe("<Input />", () => {
    test("component renders", () => {
        const {getByText} = render(<Input />);
        screen.debug();
    })
})