import Movie from "../components/Movie";
import MovieDetail from "../components/MovieDetail";
import { NotFound } from "../components/NotFound";

export default {
  root: "$",
  routes: [
    {
      path: "$",
      component: Movie,
    },
    {
      path: "*", // routes that does not exist will show NotFound page
      component: NotFound,
    },
    {
      path: "movie/:movieId", 
      component: MovieDetail,
    },
    {
      path: "movie", 
      component: MovieDetail,
    }
  ],
};
