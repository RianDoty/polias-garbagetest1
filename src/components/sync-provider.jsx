import React from 'react';
import useSync from '../hooks/sync';
import getSyncContext from '../contexts/sync';

export default function SyncProvider({keyword, children}) {
  const store = useSync(keyword);
  const Context = getSyncContext(keyword);
  
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
}