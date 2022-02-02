import { useState, useEffect, createContext } from "react";

export const DetailsContext = createContext(null);

const DetailsProvider = ({ children }) => {
  const [details, setDetails] = useState({});

  useEffect(() => {}, []);

  return (
    <DetailsContext.Provider
      value={{
        details,
        setDetails,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
