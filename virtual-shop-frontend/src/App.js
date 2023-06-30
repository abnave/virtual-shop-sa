import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
