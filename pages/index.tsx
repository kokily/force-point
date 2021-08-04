import { NextPage } from 'next';
import { useEffect } from 'react';
import useMovie from '../store/hooks/userMovie';
import useUser from '../store/hooks/useUser';

const IndexPage: NextPage = () => {
  const { userId, checkLoggedIn } = useUser();
  const { data, onMoviesList } = useMovie();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div>
      <h2>IndexPage</h2>

      <div>Logged: {userId}</div>

      <div>
        <button onClick={onMoviesList}>Move List</button>
      </div>

      <div>
        <ul>
          {data &&
            data.map((movie, i) => (
              <li key={i}>
                <span>제목 : {movie.show.name}</span>
                <span>점수 : {movie.score}</span>
                <span>타입 : {movie.show.type}</span>
                <span>언어 : {movie.show.language}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;
