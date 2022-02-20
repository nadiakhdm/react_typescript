import React from "react";
import "./App.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/store";
import TodList from "./View/TodList";
import { Route, Routes } from "react-router-dom";
import Issues from "./View/Issues";
export default function App() {
  return (
    <>
      <div className="w-full p-8  text-center">
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<TodList />} />
            <Route path="/:id" element={<Issues />} />
          </Routes>
        </Provider>
      </div>
    </>
  );
}
