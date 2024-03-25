import { useOktaAuth } from "@okta/okta-react";
import { SpinnerLoading } from "../layouts/Shared/SpinnerLoading.tsx";
import { OktaSignInWidget } from "./OktaSignInWidget.jsx";
import { Navigate } from "react-router-dom";

const LoginWidget = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const onSuccess = (token) => {
    oktaAuth.handleLoginRedirect(token);
  };

  const onError = (err) => {
    console.log("Sign in error: ", err);
  };

  if (!authState) {
    return <SpinnerLoading />;
  }

  return authState.isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <OktaSignInWidget onSuccess={onSuccess} onError={onError} />
  );
};

export default LoginWidget;
