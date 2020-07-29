import React from "react";
import { Button } from "@material-ui/core";

function Btn(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      type={props.type}
      onClick={props.sendMsg}
      disabled={props.disabled}
    >
      Send Message
    </Button>
  );
}

export default Btn;
