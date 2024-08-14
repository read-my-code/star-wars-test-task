import {useState} from 'react';
import {getFilm} from '../../api/filmsApi';

interface Film {
  url: string;
  name: string;
}

const useFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);

  const getFilmName = async (url: string): Promise<string | null> => {
    const cachedFilm = films.find(film => film.url === url);
    if (cachedFilm) {
      return cachedFilm.name;
    }

    const film = await getFilm(url);

    if (film) {
      setFilms(prevFilms => [...prevFilms, {url, name: film.title}]);
      return film.title;
    } else return null;
  };

  const getAllFilmsOfPerson = async (urls: string[]): Promise<string[]> => {
    const promises = urls.map(async url => {
      const filmName = await getFilmName(url);
      return filmName;
    });

    const results = await Promise.all(promises);

    return results.filter((name): name is string => name !== null);
  };

  return {getAllFilmsOfPerson};
};

export default useFilms;
