import { useState, useEffect } from "react";
import useVolatileState from "./volatile-state";
import { useSocket, useSocketCallbacks } from "./socket";
import useForceUpdate from "./force-update";

const useSync = (keyword, def) => {
  const socket = useSocket();
  const [store, setStore] = useVolatileState(def || {});

  useEffect(() => {
    socket.emit(`sync subscribe ${keyword}`, s => setStore(s));
    return () => socket.emit(`sync unsubscribe ${keyword}`);
  }, [keyword]);

  useSocketCallbacks({
    [`sync set ${keyword}`]: (key, value) => {
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

  return store;
};

export default useSync;