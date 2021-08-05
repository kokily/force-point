import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useUser from '../../store/hooks/useUser';
import { RootState } from '../../store/modules';

export default function useAuth() {
  const { userId } = useSelector((state: RootState) => state.user);
  const [time, setTime] = useState(0);
  const { onLogout } = useUser();

  const onTimeReset = () => {
    setTime(0);
  };

  useEffect(() => {
    const tick = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    if (time > 60 * 20) {
      onLogout();
    }

    return () => clearTimeout(tick);
  }, [time]);

  useEffect(() => {
    if (userId === '') {
      // document.location.href = '/customLogin';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onTimeReset);
    window.addEventListener('mousedown', onTimeReset);
    window.addEventListener('keypress', onTimeReset);

    return () => {
      window.removeEventListener('mousemove', onTimeReset);
      window.removeEventListener('mousedown', onTimeReset);
      window.removeEventListener('keypress', onTimeReset);
    };
  }, []);
}
