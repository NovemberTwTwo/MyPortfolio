function useState<T>(initialState: T): [() => T, (arg: T) => void] {
  let state = initialState;
  const getState = (): T => state;
  const setState = (newState: T): void => {
    state = newState;
  };
  return [getState, setState];
}

export default useState;
