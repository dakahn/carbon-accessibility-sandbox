import React from 'react';
import Layout from '../../components/layout';
import Back from '../../components/back';
import DataTable from 'carbon-components-react/lib/components/DataTable';

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} = DataTable;

export default () => {
  const rows = [
    {
      id: 'mono',
      value: 'Field 1a'
    },
    {
      id: 'poly',
      value: 'Field 1b'
    },
    {
      id: 'FM',
      value: 'Field 1c'
    }
  ];

  const headers = [
    {
      // `key` is the name of the field on the row object itself for the header
      key: 'moog',
      // `header` will be the name you want rendered in the Table Header
      header: 'Moog'
    },
    {
      key: 'yamaha',
      header: 'Yamaha'
    },
    {
      key: 'roland',
      header: 'Roland'
    }
  ];

  return (
    <Layout>
      <Back to="/components">return to components</Back>
      <DataTable
        rows={rows}
        headers={headers}
        render={({ rows, headers, getHeaderProps }) => (
          <TableContainer title="A table of data">
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map(header => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </Layout>
  );
};
