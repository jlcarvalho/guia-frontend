import { useContext, createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const StorageStateContext = createContext();
const StorageDispatchContext = createContext();

function StorageProvider({ children }) {
  const [state, dispatch] = useLocalStorage("ngStorage-done", []);

  return (
    <StorageStateContext.Provider value={state}>
      <StorageDispatchContext.Provider value={dispatch}>
        {children}
      </StorageDispatchContext.Provider>
    </StorageStateContext.Provider>
  );
}
function useStorageState() {
  const context = useContext(StorageStateContext);
  if (context === undefined) {
    throw new Error("useStorageState must be used within a StorageProvider");
  }
  return context;
}

function useStorageDispatch() {
  const context = useContext(StorageDispatchContext);
  if (context === undefined) {
    throw new Error("useStorageDispatch must be used within a StorageProvider");
  }
  return context;
}

function useStorage() {
  return [useStorageState(), useStorageDispatch()];
}

export { StorageProvider, useStorage };
