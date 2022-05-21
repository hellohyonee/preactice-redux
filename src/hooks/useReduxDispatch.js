import { useContext } from 'react';
import ReduxContext from '../contexts/ReduxContext';

// Dispatch Custom Hook
export default function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}