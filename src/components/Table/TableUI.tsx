import React from 'react';
import { Table } from '@mantine/core';
import { IconCurrencyBitcoin, IconCurrencyEthereum } from '@tabler/icons-react';
import classes from './TableUI.module.css';

const elements = [
  { position: 'Bitcoin', mass: '+10%', symbol: '$53000', name: '$52000', result: '$1000', entry: '$ 10000' },
  { position: 'Ethereum', mass: '-10%', symbol: '$53000', name: '$52000', result: '$1000', entry: '$ 10000' },
  { position: 'Ethereum', mass: '-10%', symbol: '$52300', name: '$52000', result: '$1000', entry: '$ 10000' },
  { position: 'Bitcoin', mass: '+10%', symbol: '$53000', name: '$52000', result: '$1000', entry: '$ 10000' },
  { position: 'Bitcoin', mass: '+10%', symbol: '$53000', name: '$52000', result: '$1000', entry: '$ 10000' },
  { position: 'Ethereum', mass: '+10%', symbol: '$53000', name: '$52000', result: '$1000', entry: '$ 10000' },
  { position: 'Bitcoin', mass: '+10%', symbol: '$54000', name: '$52000', result: '$1000', entry: '$ 10000 ' },

];

function getIcon(position: string) {
  if (position === 'Bitcoin') {
    return <IconCurrencyBitcoin size={16} color="orange" className={classes.icon} />;
  } else if (position === 'Ethereum') {
    return <IconCurrencyEthereum size={16} color="purple" className={classes.icon} />;
  }
}

export function TableUI() {
  const rows = elements.map((element, index) => (
    <Table.Tr key={index} className={classes.tableRow}>
      <Table.Td>
      {getIcon(element.position)} {element.position} 
      </Table.Td>
      <Table.Td>{element.entry}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td>{element.result}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table className={classes.table} style={{ borderCollapse: 'collapse' }}>
      <Table.Thead>
        <Table.Tr>
          <th className={classes.leftAlign}>Market Pair</th>
          <th className={classes.leftAlign}>Position Size</th>
          <th className={classes.leftAlign}>Average Entry</th>
          <th className={classes.leftAlign}>Current Price</th>
          <th className={classes.leftAlign}>P&L</th>
          <th className={classes.leftAlign}>Result</th>
        </Table.Tr>
      </Table.Thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className={classes.tableRowHover}>
            {row.props.children}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
