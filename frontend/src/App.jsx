import { Routes, Route, Navigate,} from "react-router-dom";

import React from "react";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />}>
        <Route path="places/new" element={<NewPlace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
