import { createContext, useState } from 'react';

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState('initialValue');

  return (
    <StateContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;