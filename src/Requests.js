import { MovieItem } from "./Components/MovieItem/MovieItem";
import { auth } from "./firebase";

const API_KEY = "9158afab45f5cfe0e694118fd97ab5da";
const URL_BODY = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru&sort_by=vote_count.desc&page=1`;

export const getList = async (
  setFunc,
  lowerDate,
  upperDate,
  criminal,
  horror,
  comedy,
  action,
  thriller,
  animation,
  adventure,
  documentary,
  drama,
  family,
  fantasy,
  history,
  music
) => {
  const genres = (genre, id) => {
    if (genre === true) {
      return `%2C${id}`;
    } else return "";
  };
  const lDate = `&primary_release_date.gte=${lowerDate}`;
  const gDate = `&primary_release_date.lte=${upperDate}`;
  const response = await fetch(
    URL_BODY +
      lDate +
      gDate +
      "&with_genres=" +
      genres(criminal, 80) +
      genres(horror, 27) +
      genres(comedy, 35) +
      genres(action, 28) +
      genres(thriller, 53) +
      genres(animation, 16) +
      genres(adventure, 12) +
      genres(documentary, 99) +
      genres(drama, 18) +
      genres(family, 10751) +
      genres(fantasy, 14) +
      genres(history, 36) +
      genres(music, 10402)
  );
  const result = await response.json();
  const results = result.results;
  console.log(results);
  if (result.total_results === 0) {
    setFunc(<div>No results found</div>);
  } else {
    setFunc(
      results.map((e, i) => {
        if (e.id !== 272050000) {
          return (
            <MovieItem
              title={e.title}
              key={i}
              img={e.poster_path}
              overview={e.overview}
              year={e.release_date.substr(0, 4)}
            />
          );
        } else return false;
      })
    );
  }
  console.log(auth.currentUser);
};
