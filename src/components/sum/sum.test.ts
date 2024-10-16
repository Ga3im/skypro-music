import { sum, isEven } from "./sum";
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test('число четное', ()=>{
    expect(isEven(2)).toBe(true)
});