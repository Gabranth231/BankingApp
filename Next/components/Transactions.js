import React, { useContext } from 'react'
import { Table, Spacer, Card, Text } from '@nextui-org/react';
import DataContext from '../store/data-store';

export default function Transactions() 
{
  const dataCtx = useContext(DataContext);
  var user = dataCtx.getUser();
  var transactions = dataCtx.getTransactions();
  var contacts = dataCtx.getUserContacts();

  const columns = [
    {
      key: "sender",
      label: "SENDER",
    },
    {
      key: "receiver",
      label: "RECEIVER",
    },
    {
      key: "amount",
      label: "AMOUNT",
    },
  ];
  const rows = [
    {
      key: "1",
      sender: contacts,
      receiver: user,
      amount: "€" + transactions,
    },
  ];
  return (
    <>
      <Spacer/>

      <Card color="success">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Transaction History
              </Text>
      </Card>
      <Spacer/>

      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: "auto",
          minWidth: "100%",
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
    </>
  );
}
  
