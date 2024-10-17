import renderer from "react-test-renderer";
import { Player } from "./Player";
import { useAppSelector } from "@/store/store";

const {thisTrack} = useAppSelector((state)=>
  state.tracksSlice.thisTrack)

it("renders correctly", () => {
  const tree = renderer.create(Player (thisTrack)).toJSON();
  expect(tree).toMatchSnapshot();
});
