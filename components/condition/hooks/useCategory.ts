import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { setCategory } from '../../../store/modules/condition';

export default function useCategory() {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.condition.category);

  const onToggleCategory = useCallback((close?: boolean) => {
    dispatch(
      setCategory({
        condition: {
          visible: close ? false : !category.visible,
          value: close ? '' : category.value,
          sort: category.sort,
        },
      })
    );
  }, []);

  const onChangeCategory = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setCategory({
          condition: {
            visible: category.visible,
            value: e.target.value,
            sort: category.sort,
          },
        })
      );
    },
    [category]
  );

  return {
    category,
    onToggleCategory,
    onChangeCategory,
  };
}
