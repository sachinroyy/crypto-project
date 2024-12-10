// import { AnyArray } from "mongoose";
import createNewStore from "../lib/Store";

interface InitialState{
    // videos : any;
    playingVideoId : string | null;
    visibleVideos : number;
}


const initialState:InitialState = {  playingVideoId: null, visibleVideos: 6 };


const useGlobalState = createNewStore(initialState, {
  name: "GlobalState",
  devTools: true,
  persist: false,
});

export default useGlobalState;
