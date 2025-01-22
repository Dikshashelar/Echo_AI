import React from "react";
import "./signInPage.css";
import { SignIn } from "@clerk/clerk-react";

const SigninPage = () => {
  return (
    <div className="signInPage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default SigninPage;
