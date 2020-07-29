import React from 'react';

function Button(props) {

  return(
    <>
      <button type={props.type} onClick={props.sendMsg}>Send Messages</button>
    </>
  );
}

export default Button;