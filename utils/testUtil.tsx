import { setupStore } from "../store/index";
import { Provider } from "react-redux";
import { render } from "@testing-library/react-native";

export function renderWithRedux(
  renderedComponent: any,
  preloadedState = {},
  store = setupStore(preloadedState)
) {
  return render(<Provider store={store}>{renderedComponent}</Provider>);
}
