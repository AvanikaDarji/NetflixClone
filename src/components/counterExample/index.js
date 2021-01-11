import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

export function Counter() {
  return (
    <div>
      <h1> counter Value</h1>
      <Button variant="contained" color="primary">
        Increment{" "}
      </Button>
      <Button variant="contained" color="deafult">
        Decrement{" "}
      </Button>
    </div>
  );
}
