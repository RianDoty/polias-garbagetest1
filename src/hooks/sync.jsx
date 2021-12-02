import { useState, useEffect } from "react";
import useVolatileState from "./volatile-state";
import { useSocket, useSocketCallbacks } from "./socket";
import useForceUpdate from "./force-update";

const useSync = (keyword, def) => {
  const socket = useSocket();
  const [store, setStore] = useVolatileState(def || {});

  useEffect(() => {
    socket.emit(`sync subscribe ${keyword}`, s => setStore(def => {
      //Prune out elements that were already defined by the client
      //Prevents 'refreshing' info that the client already knows
      Object.keys(def).forEach(key => {
        delete s[key];
      })
      
      return s;
    }));
    return () => socket.emit(`sync unsubscribe ${keyword}`);
  }, [keyword]);

  useSocketCallbacks({
    [`sync create ${keyword}`]: (key, value) => {
      setStore(store => {
        store[key] = value;
        return store;
      });
    },
    [`sync update ${keyword}`]: (key, prop, value) => {
      setStore(store => {
        if (!value) {
          value = prop;
          
          store[key] = value;
          return store
        }
        if (!store[key]) return store;
        store[key][prop] = value
        
        return store
      })
    },
    [`sync delete ${keyword}`]: key => {
      setStore(store => {
        delete store[key];
        return store;
      })
    }
  });

  return [store, setStore];
};

export default useSync;