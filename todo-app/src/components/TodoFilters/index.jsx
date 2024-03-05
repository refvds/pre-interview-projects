import { useDispatch, useSelector } from 'react-redux';
import { filterList } from '../../store/todoSlice';

export const TodoFilters = () => {
  const dispatch = useDispatch();
  const { allCount, finishedCount, unfinishedCount } = useSelector((state) => state.todos);

  return (
    <div>
      <button onClick={() => dispatch(filterList('all'))}>All {allCount}</button>
      <button onClick={() => dispatch(filterList('finished'))}>Finished {finishedCount}</button>
      <button onClick={() => dispatch(filterList('unfinished'))}>Unfinished {unfinishedCount}</button>
    </div>
  );
};
