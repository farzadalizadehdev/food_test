import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./containers/Home/Home"));
const Vendors = React.lazy(() => import("./containers/Vendors/Vendors"));

const RoutesWithNavigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesWithNavigation;
