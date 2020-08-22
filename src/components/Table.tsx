import React from 'react';
import {
  Table as GrommetTable,
  TableHeader,
  TableCell,
  TableRow,
  TableBody,
  Text,
} from 'grommet';

type Props<T extends Object> = {
  data: T[];
  config: {
    title: string;
    render: (item: T) => any;
    size?: string;
  }[];
};

const Table = <T extends Object>({ data, config }: Props<T>) => {
  return (
    <GrommetTable style={{ width: '100%' }}>
      <TableHeader>
        <TableRow>
          {config.map(({ title, size }, i) => (
            <TableCell
              scope="col"
              border="bottom"
              margin={{ vertical: 'small' }}
              size={size}
            >
              <Text
                textAlign={i === 0 ? 'start' : 'center'}
                weight={i === 0 ? 'bold' : 'normal'}
              >
                {title}
              </Text>
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow>
            {config.map(({ render, size }) => (
              <TableCell scope="row" margin={{ vertical: 'small' }} size={size}>
                {render(item)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </GrommetTable>
  );
};

export default Table;