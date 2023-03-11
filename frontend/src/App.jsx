import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import React from "react";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/MainNavigation/MainNavigation";

const App = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <main>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/:userId/places' element={<UserPlaces />} />
          <Route path='/places/new' element={<NewPlace />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
