import axios from "axios";

import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //Fetch Axios
  const popularData = await axios.get(popularGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

// //Action is a object discribe what gone happen
// {type: 'FETCH_GAMES'}
// dispatch({type:"FETCH_GAMES"})

// //Action Creator
// const fetchGames = (userData) => {
//     return {
//         type: 'FETCH_GAMES',
//         payload: userData
//     }
// }

// {type: 'FETCH_GAMES'}
// '
// fetchGames({user: "sandip"})
