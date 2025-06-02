import { render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState } from "@/store/feautures/authSlice";

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
  }));

test("find logo", () => {
  const mockStore = configureStore([]);
  const store = mockStore({ auth: initialState });
  render(
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
  const text = screen.getAllByAltText("logo");
  expect(text.length).toBeGreaterThan(0);
});

