import ContentBox from '../../components/ContentBox/ContentBox.tsx';
import React from 'react';
import styles from './SummaryProcesses.module.scss';
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
          }}
        >
          <ContentBox>
            <div className={styles.ctitle}>1. Summary of the installation</div>
            <br />
            <Table
              id="summmaryProcessTB1"
              size={'small'}
              dataSource={dataSource1}
              columns={columns1}
              pagination={false}
            />
            <br />
            <br />
            <div className={styles.ctitle}>
              2. Summary of the production processes, included precursors and
              production routes, where relevant
            </div>
            <br />
            <Table
              id="summmaryProcessTB2"
              size={'small'}
              dataSource={[
                {
                  idx: <b>(a)</b>,
                  d0: <b>Aggregated good produced</b>,
                  d1: <b>Routes</b>,
                  d2: <b>Route 1</b>,
                  d3: <b>Route 2</b>,
                  d4: <b>Route 3</b>,
                  d5: <b>Route 4</b>,
                  d6: <b>Route 5</b>,
                  d7: <b>Route 6</b>,
                },
                {
                  idx: 'G1',
                  d0: 'Cement clinker',
                  d1: 'All production routes',
                },
                {
                  idx: 'G2',
                  d0: 'Cement',
                  d1: 'All production routes',
                },
                {
                  idx: 'G3',
                },
                {
                  idx: 'G4',
                },
                {
                  idx: 'G5',
                },

                {},
                {
                  idx: <b>(b)</b>,
                  d0: <b>Production process</b>,
                  d1: <b>Aggregated goods category</b>,
                  d2: <b>1</b>,
                  d3: <b>2</b>,
                  d4: <b>3</b>,
                  d5: <b>4</b>,
                  d6: <b>5</b>,
                  d7: <b>6</b>,
                },
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
                {
                  idx: 'P3',
                },
                {
                  idx: 'P4',
                },
                {
                  idx: 'P5',
                },
                {},
                {
                  idx: <b>(c)</b>,
                  d0: <b>Purchased precursor</b>,
                  d1: <b>Aggregated goods category</b>,
                  d2: <b> Route 1</b>,
                  d3: <b> Route 2</b>,
                  d4: <b> Route 3</b>,
                  d5: <b> Route 4</b>,
                  d6: <b> Route 5</b>,
                  d7: (
                    <b>
                      Country
                      <br />
                      code
                    </b>
                  ),
                },

                {
                  idx: 'PP1',
                },
                {
                  idx: 'PP2',
                },
                {
                  idx: 'PP3',
                },
                {
                  idx: 'PP4',
                },
                {
                  idx: 'PP5',
                },
              ]}
              columns={columns1}
              pagination={false}
            />
          </ContentBox>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
