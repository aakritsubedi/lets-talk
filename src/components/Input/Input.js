import React from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";

function InputFeild(props) {
  return (
    <FormControl className='app-form-control'>
      <InputLabel htmlFor="my-input">Enter a message...</InputLabel>
      <Input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        id="my-input"
        autoComplete="off"
        aria-describedby="my-helper-text"
      />
    </FormControl>
  );
}

export default InputFeild;
