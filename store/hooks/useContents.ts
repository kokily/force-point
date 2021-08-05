import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { dataRequest } from '../modules/contents';

export default function useContents() {
  const dispatch = useDispatch();
  const contents = useSelector((state: RootState) => state.contents);

  const onLoadData = useCallback(() => {
    dispatch(dataRequest({}));
  }, []);

  return {
    contents: contents.data,
    loading: contents.loading,
    error: contents.error,
    onLoadData,
  };
}
