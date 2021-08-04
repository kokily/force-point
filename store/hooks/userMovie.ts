import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { moviesRequest } from '../modules/movie';

export default function useMovie() {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.movie);

  const onMoviesList = useCallback(() => {
    dispatch(moviesRequest({}));
  }, []);

  return { data, onMoviesList };
}
