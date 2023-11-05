import React from "react";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import RecipeInfo from "./pages/RecipeInfo";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipe-voice-bot/" element={<Home />} />
          <Route path="/recipe-voice-bot/search_recipe" element={<RecipeList />} />
          <Route path="/recipe-voice-bot/recipe_info" element={<RecipeInfo />} />
          <Route path="/recipe-voice-bot/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
