import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookie from 'js-cookie';
import { loggedIn, logoutRequest } from '../modules/user';
import { RootState } from '../modules';

export default function useUser() {
  const { userId, error, loading } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  const checkLoggedIn = useCallback(() => {
    let userId = '';

    if (typeof window !== 'undefined') {
      userId = cookie.get('JSESSIONID');
    }

    dispatch(loggedIn({ userId, error: null }));
  }, []);

  const onLogout = useCallback(() => {
    dispatch(logoutRequest({}));
    document.location.href = '/';
  }, []);

  return { userId, checkLoggedIn, onLogout, error, loading };
}
