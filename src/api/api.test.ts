import { getTracks } from "./api";

jest.mock("./api");

test("Получение списка треков", async () => {
  const track = await getTracks();
  expect(track).toHaveProperty("_id");
});
