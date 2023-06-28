import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "./layouts";
import Context from "./utils/Context";
import { Auth0Provider } from "@auth0/auth0-react";
import { block } from "million/react";

const AppBlock = /* @optimize */ block(App);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-vmqm5my5tnynvbsm.us.auth0.com"
      clientId="2uzkpI66ylLQdZEkerXdufpwjQGEc6ax"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Context>
        <BrowserRouter>
          <div className="flex flex-col h-[100vh]  justify-between">
            <Navbar />
            <div>
              <AppBlock />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Context>
    </Auth0Provider>
  </React.StrictMode>
);
