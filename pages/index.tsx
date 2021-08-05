import { NextPage } from 'next';
import { useEffect } from 'react';
import useContents from '../store/hooks/useContents';
import useUser from '../store/hooks/useUser';
import useMovie from '../store/hooks/useMovie';
import PageTemplate from '../components/common/PageTemplate';
import Logout from '../components/Logout';

const IndexPage: NextPage = () => {
  const { checkLoggedIn, onLogout, loading, error } = useUser();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  if (loading) return null;
  if (error) return null;

  return (
    <PageTemplate>
      <Logout onLogout={onLogout} />
    </PageTemplate>
  );
};

export default IndexPage;
