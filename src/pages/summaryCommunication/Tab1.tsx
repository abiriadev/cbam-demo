import ContentBox from 'components/ContentBox/ContentBox';
import React from 'react';
import styles from './SummaryCommunication.module.scss';
import { Table } from 'antd';
const Tab1 = () => {
  const dataSource1: any = [
    {
      d0: 'Name of the installation (English name)',
      d2: 'test',
      d5: 'Reporting period start',
      d7: '2023.1.1',
    },
    { d0: 'Street, Number', d5: 'Reporting period end', d7: '2023.12.31' },
    { d0: 'Economic activity' },
    { d0: 'Country', d2: 'United States' },
    { d0: 'UNLOCODE ' },
    { d0: 'Coordinates of the main emission source (latitude) ' },
    { d0: 'Coordinates of the main emission source (longitude) ' },
  ];

  const columns1: any = [
    {
      title: '',
      dataIndex: 'idx',
    },
    {
      title: '',
      dataIndex: 'd0',
    },
    {
      title: '',
      dataIndex: 'd1',
      align: 'center',
    },
    {
      title: '',
      dataIndex: 'd2',
      align: 'center',
    },
    {
      title: '',
      dataIndex: 'd3',
      align: 'center',
    },
    {
      title: '',
      dataIndex: 'd4',
      align: 'center',
    },
    {
      title: '',
      dataIndex: 'd5',
      align: 'center',
    },
    {
      title: '',
      dataIndex: 'd6',
      align: 'center',
    },
    {
      title: '',
      dataIndex: 'd7',
      align: 'center',
    },
  ];

  return (
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <div
          style={{
            marginRight: '10px',
            display: 'flex',

            flex: 1,
          }}
        >
          <div style={{ flex: 1 }}>
            <ContentBox>
              <div className={styles.ctitle}>1. Installation details</div>
              <br />
              <Table
                id="scTb1"
                size={'small'}
                dataSource={[
                  { d0: 'Name of the installation (English name)', d1: 'test' },
                  { d0: 'Street, Number', d1: '' },
                  { d0: 'Economic activity', d1: '' },
                  { d0: 'Country', d1: 'US' },
                  { d0: 'UNLOCODE', d1: '' },
                  {
                    d0: 'Coordinates of the main emission source (latitude)',
                    d1: '',
                  },
                  {
                    d0: 'Coordinates of the main emission source (longitude)',
                    d1: '',
                  },
                  { d0: 'Reporting period start', d1: '2023.1.1' },
                  { d0: 'Reporting period end', d1: '2023.12.31' },
                ]}
                columns={[
                  {
                    title: 'Parameter',
                    dataIndex: 'd0',
                  },
                  {
                    title: 'Value',
                    dataIndex: 'd1',
                  },
                ]}
                pagination={false}
              />
            </ContentBox>
          </div>
          <div style={{ flex: 1 }}>
            {' '}
            <ContentBox>
              <div className={styles.ctitle}>
                2. Summary of the production processes and production routes,
                where relevant
              </div>
              <br />
              <Table
                id="scTb2"
                size={'small'}
                dataSource={[
                  { idx: 'G1', d0: 'Cement clinker' },
                  { idx: 'G2', d0: 'Cement' },
                  { idx: 'G3' },
                  { idx: 'G4' },
                  { idx: 'G5' },
                  { idx: 'G6' },
                  { idx: 'G7' },
                  { idx: 'G8' },
                  { idx: 'G9' },
                  { idx: 'G10' },
                ]}
                columns={[
                  { title: '(a)', dataIndex: 'idx' },
                  {
                    title: 'Aggregated good produced',
                    dataIndex: 'd0',
                  },
                  {
                    title: 'Route 1',
                    dataIndex: 'd1',
                  },
                  {
                    title: 'Route 2',
                    dataIndex: 'd3',
                  },
                  {
                    title: 'Route 3',
                    dataIndex: 'd3',
                  },
                  {
                    title: 'Route 4',
                    dataIndex: 'd4',
                  },
                  {
                    title: 'Route 5',
                    dataIndex: 'd5',
                  },
                  {
                    title: 'Route 6',
                    dataIndex: 'd6',
                  },
                ]}
                pagination={false}
              />
              <br />
              <Table
                id="scTb3"
                size={'small'}
                dataSource={[
                  {
                    idx: 'P1',
                    d0: 'test',
                    d1: 'Cement clinker',
                    d2: 'Cement clinker',
                  },
                  {
                    idx: 'P2',
                    d0: 'test2',
                    d1: 'Cement',
                    d2: 'Cement',
                  },
                  { idx: 'P3' },
                  { idx: 'P4' },
                  { idx: 'P5' },
                  { idx: 'P6' },
                  { idx: 'P7' },
                  { idx: 'P8' },
                  { idx: 'P9' },
                  { idx: 'P10' },
                ]}
                columns={[
                  { title: '(b)', dataIndex: 'idx' },
                  {
                    title: 'Production process',
                    dataIndex: 'd0',
                  },
                  {
                    title: '1',
                    dataIndex: 'd1',
                  },
                  {
                    title: '2',
                    dataIndex: 'd3',
                  },
                  {
                    title: '3',
                    dataIndex: 'd3',
                  },
                  {
                    title: '4',
                    dataIndex: 'd4',
                  },
                  {
                    title: '5',
                    dataIndex: 'd5',
                  },
                  {
                    title: '6',
                    dataIndex: 'd6',
                  },
                ]}
                pagination={false}
              />
              <br />
            </ContentBox>
          </div>
          <div style={{ flex: 1 }}>
            <ContentBox>
              <div className={styles.ctitle}>
                3. Summary of emissions by monitoring methodology and data
                quality
              </div>
              <br />
              <Table
                id="scTb4"
                size={'small'}
                dataSource={[
                  {
                    d0: 'tCO2e',
                    d1: 'tCO2e',
                    d2: 'tCO2e',
                    d3: 'tCO2e',
                  },
                  {
                    d0: '1,037,310',
                    d1: '0',
                    d2: '0',
                    d3: '0',
                  },
                ]}
                columns={[
                  {
                    title: 'Calculation - based (excl. PFC emissions)	',
                    dataIndex: 'd0',
                  },
                  {
                    title: 'Total PFC emissions	',
                    dataIndex: 'd1',
                  },
                  {
                    title: 'Measurement - based	',
                    dataIndex: 'd3',
                  },
                  {
                    title: 'Other	',
                    dataIndex: 'd3',
                  },
                ]}
                pagination={false}
              />
              <br />
              <Table
                id="scTb5"
                pagination={false}
                columns={[
                  {
                    title: '',
                    dataIndex: 'd0',
                  },
                  {
                    title: '',
                    dataIndex: 'd1',
                  },
                  {
                    title: '',
                    dataIndex: 'd3',
                  },
                ]}
                dataSource={[
                  {
                    d0: 'Total direct emissions during reporting period',
                    d1: 'tCO2e',
                    d2: '1,037,310',
                  },
                  {
                    d0: 'Total indirect emissions during reporting period',
                    d1: 'tCO2e',
                    d2: '152,370',
                  },
                  {
                    d0: 'Total emissions during reporting period',
                    d1: 'tCO2e',
                    d2: '1,189,680',
                  },
                  {},
                  {
                    d0: 'General information on data quality			',
                    d1: 'Mostly measurements & national standard factors for e.g. the emission factor	',
                  },
                  {
                    d0: 'Justification for use of default values (if relevant)',
                    d1: '',
                  },
                  {
                    d0: 'Information on quality assurance',
                    d1: 'Four eyes principle	',
                  },
                ]}
                size={'small'}
              />
            </ContentBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
