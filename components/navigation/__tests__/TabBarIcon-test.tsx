import { render } from "@testing-library/react-native";
import { TabBarIcon } from "../TabBarIcon";

describe("<TabBarIcon />", () => {
  test("renders component", () => {
    const {getByRole} = render(<TabBarIcon name="search" style={{ marginTop: 3 }} />);
    getByRole("text");
  });
});
