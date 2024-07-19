"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

// Note: This context was created to fix a bug between the 'Header' and 'Drawer' components specifically on phone screens.

const headerContext = createContext<{
  headerVisible: boolean;
  setHeaderVisible?: Dispatch<SetStateAction<boolean>>;
}>({ headerVisible: true });

export default function HeaderProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [headerVisible, setHeaderVisible] = useState<boolean>(true);
  return (
    <headerContext.Provider value={{ headerVisible, setHeaderVisible }}>
      {children}
    </headerContext.Provider>
  );
}

export function useHeaderContext() {
  const { headerVisible, setHeaderVisible } = useContext(headerContext);

  return {
    headerVisible,
    setHeaderVisible,
  };
}
