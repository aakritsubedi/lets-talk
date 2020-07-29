import React from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";

function InputFeild(props) {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Enter a message...</InputLabel>
      <Input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        id="my-input"
        aria-describedby="my-helper-text"
      />
    </FormControl>
  );
}

export default InputFeild;
