import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState } from "@/store/feautures/tracksSlice";
import { MusicFilter } from "./MusicFilter";

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
  }));

test("проверка", () => {
    const mockStore = configureStore([]);
    const store = mockStore({ tracksSlice: initialState });
    render(
        <Provider store={store}>
          <MusicFilter />
        </Provider>
    );
    const text = screen.getByText("Искать по:");
    expect(text).toBeTruthy();
  });