import { useState, useEffect } from "react";
import useVolatileState from "./volatile-state";
import { useSocket, useSocketCallbacks } from "./socket";
import useForceUpdate from "./force-update";

const useSync = keyword => {
  const socket = useSocket();
  const [store, setStore] = useVolatileState({});

  useEffect(() => {
    socket.emit(`sync subscribe ${keyword}`, s => setStore(s));
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
        store[key][prop] = value;
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