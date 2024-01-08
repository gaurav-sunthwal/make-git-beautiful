import React, { createContext, useContext, useState } from "react";

// Step 1: Create a context
const MyContext = createContext();

// Step 2: Create a provider
const MyProvider = ({ children }) => {
  // Step 2.1: Set up a state to hold the value
  const [contextValue, setContextValue] = useState("Initial Value");

  // Step 3: Create a function to update the context value
  const updateContextValue = () => {
    setContextValue("Updated Value");
  };

  // Step 2.2: Provide the context value and the update function
  return (
    <MyContext.Provider value={{ contextValue, updateContextValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Step 4: Use useContext in components
const MyComponent = () => {
  const { contextValue } = useContext(MyContext);

  return <div>Context Value: {contextValue}</div>;
};

// Step 5: Implement a button in another component to trigger the update
const ButtonComponent = () => {
  const { updateContextValue } = useContext(MyContext);

  return <button onClick={updateContextValue}>Update Context</button>;
};




export default {MyProvider, MyComponent, ButtonComponent }