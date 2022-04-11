import React, { useState } from "react";
import Login from "./Login";

import Modal from "react-modal";

function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (

    <>
    {/* Need to be able to call modal for more than login. Pass in a component that will use the modal for display.  */}
      <button onClick={toggleModal}>Login</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >{/* Change the component between divs to a prop? to reuse the LoginModal */ }
        <div>{<Login/>}</div>
        <button onClick={toggleModal}>Cancel</button>
      </Modal>
    

    </>
  );
}

export default LoginModal