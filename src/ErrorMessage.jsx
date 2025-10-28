import React from "react";

const ErrorMessage = ({ error }) => (
  <div
    data-testid="error"
    style={{
      backgroundColor: "red",
    }}
  >
    An error occured: {error.toString()}
  </div>
);

export default ErrorMessage;
