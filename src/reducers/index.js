import { combineReducers } from "redux";

import gameReducer from "./gamesReducers";
import detailReducer from "./datailReducer";

const rootReducer = combineReducers({
  games: gameReducer,
  detail: detailReducer,
});

export default rootReducer;
