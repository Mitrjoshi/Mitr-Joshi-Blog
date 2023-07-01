import React, { createContext, useState, useEffect } from "react";

export const ContextConstant = createContext(null);

const Context = (props) => {
  // initialize
  const [searchText, setSearchText] = useState("");

  //   export
  const contextValue = { searchText, setSearchText };

  return (
    <ContextConstant.Provider value={contextValue}>
      {props.children}
    </ContextConstant.Provider>
  );
};

export default Context;
