import { NextPage } from 'next';
import { useEffect } from 'react';
import useUser from '../store/hooks/useUser';
import PageTemplate from '../components/common/PageTemplate';
import Logout from '../components/Logout';
import useAuth from './hooks/useAuth';
import Condition from '../components/condition/Condition';

const IndexPage: NextPage = () => {
  const { checkLoggedIn, onLogout, loading, error } = useUser();
  useAuth();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  if (loading) return null;
  if (error) return null;

  return (
    <PageTemplate>
      <Logout onLogout={onLogout} />
      <Condition />
    </PageTemplate>
  );
};

export default IndexPage;
