import React, { useContext } from 'react'
import DataContext from "../store/data-store.js";
import { Input, Spacer, Modal, Button, Text, Card, Radio } from '@nextui-org/react';

function Transfer() {
  const dataCtx = useContext(DataContext);
  var contacts = dataCtx.getUserContacts();

  const [recipient, setRecipient] = React.useState("");

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const [selection, setSelection] = React.useState("");
  const noneClicked = () => setSelection("None");
  const contactClicked = () => setSelection(contacts);

  function selectClicked() {
    if(selection == contacts) {
      setRecipient(contacts);
    }
    else {
      setRecipient("N/A");
    }
    closeHandler();
  } 

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <Spacer/>

      <Card color="success">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Recipient
              </Text>
      </Card>
      <Spacer/>

      <Input onClick={handler} value={recipient}/>

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Select Recipient
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Radio.Group>
            <Radio value="None" onClick={noneClicked}>None</Radio>
            <Radio value={contacts} onClick={contactClicked}>{contacts}</Radio>
          </Radio.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={selectClicked}>
            Select
          </Button>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Spacer/>

      <Card color="success">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Amount
              </Text>
      </Card>
      <Spacer/>

      <Input type={Number}>
      
      </Input>
    </>
  );
}
  
  export default Transfer;