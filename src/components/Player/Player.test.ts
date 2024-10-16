import renderer from "react-test-renderer";
import { Player } from "./Player";

it("renders correctly", () => {
  const tree = renderer.create(<Player />).toJSON();
  expect(tree).toMatchSnapshot();
});
