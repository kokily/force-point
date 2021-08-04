import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookie from 'js-cookie';
import { loggedIn } from '../modules/user';
import { RootState } from '../modules';

export default function useUser() {
  const { userId } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const checkLoggedIn = useCallback(() => {
    let userId = '';

    if (typeof window !== 'undefined') {
      userId = cookie.get('JSESSIONID');
    }

    dispatch(loggedIn({ userId }));
  }, []);

  return { userId, checkLoggedIn };
}
