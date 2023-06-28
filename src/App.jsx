import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "./components";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyBlog = React.lazy(() => import("./pages/Blog"));
const LazyForm = React.lazy(() => import("./pages/Form"));
const LazyProfile = React.lazy(() => import("./pages/Profile"));
const LazyEdit = React.lazy(() => import("./pages/Edit"));
const LazySearch = React.lazy(() => import("./pages/Search"));

const App = () => {
  return (
    <div className="mt-[68px] relative lg:p-0 px-5 m-auto overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyBlog />
            </React.Suspense>
          }
        />
        <Route
          path="/form"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyForm />
            </React.Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyProfile />
            </React.Suspense>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyEdit />
            </React.Suspense>
          }
        />
        <Route
          path="/search/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazySearch />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
