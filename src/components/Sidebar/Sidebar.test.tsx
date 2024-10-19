import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState } from "@/store/feautures/authSlice";
import { Sidebar } from "./Sidebar";

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
  }));

test("проверка на слово главное", () => {
    const mockStore = configureStore([]);
    const store = mockStore({ auth: initialState });
    render(
        <Provider store={store}>
          <Sidebar />
        </Provider>
    );
    const text = screen.getAllByAltText("day's playlist");
    expect(text.length).toBeGreaterThan(0);
  });