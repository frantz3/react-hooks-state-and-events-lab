import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
//  const [items, setItems] = useState(itemData) 
 const [isDarkMode, setIsDarkMode] = useState(false)

 function handleDarkMode() {
  setIsDarkMode((isDarkMode) => !isDarkMode)
 }
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDarkMode? 'Dark' : 'Light'} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
