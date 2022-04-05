import React, { useContext } from 'react'
import {Container, Row, Image, Card, Text, Spacer, Table, Modal, Input, Button} from "@nextui-org/react"
import { useState, useEffect} from 'react';
import DataContext from '../store/data-store';
function Users() 
{
  const dataCtx = useContext(DataContext);
  const [contact,setContact] = useState("");
  const [visable,setVisible] = useState(false);
  var user = dataCtx.getUser();
  var balence = dataCtx.getBalence();
  var contacts = dataCtx.getUserContacts();
  const handler = () =>{setVisible(true)}
  const handleSubmit = () => {
    var data = {
      userName: user,
      contactName: contact
    }
    dataCtx.addContact(data);
    setVisible(false)
  }
  const closeHandler = () =>{
    setVisible(false);
  }
  const handleUserName = (event) =>{
    setContact(event.target.value);
  }
  const columns = [
    {
      key: "contactName",
      label: "NAME",
    },
  ];
  const rows = [
    {
      key: "1",
      contactName: contacts,
    },
  ];
  return (
    <Container gap={0}>

      <Spacer y={3}/>
      <Image
        width={320}
        height={180}  
        src="https://www.iop.org/sites/default/files/styles/original_optimised/public/2020-06/12.2-Edward-Denbee-001.jpg?itok=pQwUGgtI"
        alt="Default Image"
        objectFit="cover"
      />

      <Spacer y={2}/>
      <Card color="success">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Account Details
              </Text>
      </Card>

      <Row>
        <Container gap={0}>
        <Row gap={1}>
          </Row>
          <Spacer y={1}/>
          <Row gap={1}>
          <Card css={{ mw: "400px", background:"#d9d9d9"}}>
            <Text h6 size={15} color="black" css={{ m: 0 }}>
              Name: {user}
            </Text>
          </Card>

          </Row>
          <Spacer y={1}/>
          <Row gap={1}>
          <Card css={{ mw: "400px", background:"#d9d9d9"}}>
            <Text h6 size={15} color="black" css={{ m: 0 }}>
              Balance: €{balence}
            </Text>
          </Card>
          </Row>
        </Container>
      </Row>

      <Spacer/>
      <Card color="success">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              Contacts Details
            </Text>
      </Card>
      <Spacer/>

      <Row>
        <Table
          aria-label="Example table with dynamic content"
          css={{
            height: "auto",
            minWidth: "100vh",
          }}
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={rows}>
            {(item) => (
              <Table.Row key={item.key}>
                {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Row>

      <Spacer/>
      <Row gap={1}>
        <Button onClick={handler}>
          Add Contact
        </Button>
        <Modal
            closeButton
            aria-aria-labelledby='modal-title'
            open = {visable}
            onClose = {closeHandler}
          >
            <Modal.Header>
              <Text id="modal-title" size={10}>
                Add Contact
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input clearable label="Name" placeholder="Name" initialValue="" onChange={handleUserName}/> 
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleSubmit}>
                Add
              </Button>
              <Button auto flat color="error" onClick={closeHandler}>
                Close
              </Button>
            </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
}
  
  export default Users;