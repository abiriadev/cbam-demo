import React from 'react';
import { Table } from 'antd';

const NoHeaderTable = ({ dataSource, columns }: any) => {
  return (
    <Table
      id="noHeaderTb"
      size={'small'}
      dataSource={dataSource}
      columns={columns}
      pagination={false}
    />
  );
};

export default NoHeaderTable;
