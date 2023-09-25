import { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { state } from '../state';

export const Stateful: FunctionComponent = () => {
  // `state` is an asynchronous selector, so this component will suspend until
  // the value is available.
  const value = useRecoilValue(state);

  return <p>{value}</p>;
}