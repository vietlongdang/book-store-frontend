import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar.tsx";
import { Footer } from "./layouts/NavbarAndFooter/Footer.tsx";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage.tsx";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "./layouts/Homepage/HomePage.tsx";
import { BookCheckoutPage } from "./layouts/BookCheckoutPage/BookCheckoutPage.tsx";
import { oktaConfig } from "./lib/oktaConfig.ts";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
// @ts-ignore
import LoginWidget from "./Auth/LoginWidget.jsx";
import { ShelfPage } from "./layouts/ShelfPage/ShelfPage.tsx";
import { RequiredAuth } from "./Auth/SecureRoute.tsx";
import { ManageLibraryPage } from "./layouts/ManageLibraryPage/ManageLibraryPage.tsx";

const oktaAuth = new OktaAuth(oktaConfig);

function App() {
  const customAuthHandler = () => {
    navigate("/login");
  };

  const navigate = useNavigate();
  const location = window.location.origin;

  const restoreOriginalUrl = async (_oktaAuth: any, originalUrl: any) => {
    navigate(toRelativeUrl(originalUrl || "/", location), { replace: true });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUrl}
        onAuthRequired={customAuthHandler}
      >
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchBooksPage />} />
            <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />
            <Route path="/login" element={<LoginWidget />} />
            <Route path="/login/callback" element={<LoginCallback />} />
            <Route path="/shelf" element={<RequiredAuth />}>
              <Route path="" element={<ShelfPage />} />
            </Route>
            <Route path="/admin" element={<RequiredAuth />}>
              <Route path="" element={<ManageLibraryPage />} />
            </Route>
          </Routes>
        </div>
      </Security>
      <Footer />
    </div>
  );
}

export default App;
