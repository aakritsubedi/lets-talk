import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

function Btn(props) {
  return (
    <IconButton
      variant="contained"
      color="primary"
      type={props.type}
      onClick={props.sendMsg}
      disabled={props.disabled}
    >
      <SendIcon />
    </IconButton>
  );
}

export default Btn;
