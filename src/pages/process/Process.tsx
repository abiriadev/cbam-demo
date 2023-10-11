import React from 'react';
import styles from './Process.module.scss';
import { Descriptions, Table } from 'antd';
import ContentBox from 'components/ContentBox/ContentBox';
import NoHeaderTable from 'components/noHeaderTable/NoHeaderTable';

const Process = () => {
  const dataSource1 = [
    {
      idx: <b>(a)</b>,
      d1: <b>Total production levels</b>,
      d2: <b>Production route</b>,
      d3: <b>Unit</b>,
      d4: <b>Amounts</b>,
    },
    {
      d0: '1',
      d1: 'test | Cement clinker',
      d2: 'All production routes',
      d3: 't',
      d4: '1,255,000',
    },
    {
      d0: '2',
      d1: '',
      d2: 'n.a.',
    },
    {
      d0: '3',
      d1: '',
      d2: 'n.a.',
    },
    {
      d0: '4',
      d1: '',
      d2: 'n.a.',
    },
    {
      d0: '5',
      d1: '',
      d2: 'n.a.',
    },
    {
      d1: (
        <b>
          Total production within installation (= denominator for SEE
          calculation)
        </b>
      ),
      d3: <b>t</b>,
      d4: <b>1,255,000</b>,
    },
    {},
    {
      idx: <b>(b)</b>,
      d1: <b>Production details</b>,
      d3: <b>Unit</b>,
      d4: <b>Amounts</b>,
    },
    {
      d0: 'i',
      d1: 'Produced for the market',
      d3: 't',
      d4: '1,255,000',
    },
    {
      d0: 'ii',
      d1: 'Share of total under (a) produced for the market',
      d4: '100.0%',
    },
    {
      d0: 'iii',
      d1: 'Total production only for the market?',
      d4: 'TRUE',
    },
    {},
    {
      idx: <b>(c)</b>,
      d1: (
        <b>Consumed in other 'production processes' within the installation</b>
      ),
      d3: <b>Unit</b>,
      d4: <b>Amounts</b>,
    },
    {
      d0: '1',
      d1: 'test2',
      d3: 't',
      d4: '1,255,000',
    },
    {
      d0: '2',
      d3: 't',
    },
    {
      d0: '3',
      d3: 't',
    },
    {
      d0: '4',
      d3: 't',
    },
    {
      d0: '5',
      d3: 't',
    },
    {},
    {
      idx: <b>(d)</b>,
      d1: <b>Consumed for non-CBAM goods within the installation</b>,
      d3: <b>t</b>,
    },
    {},
    {
      idx: <b>(e)</b>,
      d1: <b>Control</b>,
      d3: <b>t</b>,
      d4: <b>-125500</b>,
    },
  ];

  const columns1 = [
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
    },
    {
      title: '',
      dataIndex: 'd2',
    },
    {
      title: '',
      dataIndex: 'd3',
    },
    {
      title: '',
      dataIndex: 'd4',
    },
  ];

  const dataSource6 = [
    {
      data2: <b>Measurable heat</b>,
      data3: <b>Waste gases</b>,
      data4: <b>Indirect emissions</b>,
    },
    {
      idx: <b>(f)</b>,
      data1: <b>Please select which elements are applicable</b>,
      data2: 'FALSE',
      data3: 'FALSE',
      data4: 'TRUE',
    },
    {},
    {
      data2: <b>Unit</b>,
      data3: <b>Value</b>,
    },
    {
      idx: <b>(g)</b>,
      data1: <b>Directly attributable emissions (DirEm*)</b>,
      data2: 'tCO2e',
      data3: '1,037,310',
    },
    {},
    {
      idx: '(h)',
      data1: 'Import and export of measurable heat',
      data2: 'Unit',
      data3: 'Imported',
      data4: 'Exported',
    },
    {
      data0: 'i',
      data1: 'Amount of net measurable heat',
      data2: 'TJ',
      data3: '0',
      data4: '0',
    },
    {
      data0: 'ii',
      data1: 'Emissions factor',
      data2: 'tCO2/TJ',
      data3: '0.00',
      data4: '0.00',
    },
    {},
    {
      idx: '(i)',
      data1: 'Waste gases',
      data2: 'Unit',
      data3: 'Imported',
      data4: 'Exported',
    },
    {
      data0: 'i',
      data1: 'Amount of waste gas',
      data2: 'TJ',
      data3: '0',
      data4: '0',
    },
    {
      data0: 'ii',
      data1: 'Emissions factor',
      data2: 'tCO2/TJ',
    },
    {},
    {
      idx: <b>(j)</b>,
      data1: <b>Indirect emissions from electricity consumption</b>,
      data2: <b>Unit</b>,
      data3: <b>Value</b>,
    },
    {
      data0: 'i',
      data1: 'Electricity consumption',
      data2: 'MWh',
      data3: '81,575',
    },
    {
      data0: 'ii',
      data1: ' Emission factor of the electricity',
      data2: 'tCO2/MWh',
      data3: '0.833',
    },
    {
      data0: 'iii',
      data1: 'Source of the emission factor',
      data2: '-	',
      data3: 'D.2.1	',
    },
    {},
    {
      idx: <b>(k)</b>,
      data1: <b>Electricity exported from the production process</b>,
      data2: <b>Unit</b>,
      data3: <b>Value</b>,
    },
    {
      data0: 'i',
      data1: 'Amounts exported',
      data2: 'MWh',
      data3: '0',
    },
    {
      data0: 'ii',
      data1: 'Emission factor of the electricity	',
      data2: 'tCO2/MWh',
    },
  ];

  const columns6 = [
    {
      title: '',
      dataIndex: 'idx',
    },
    {
      title: '',
      dataIndex: 'data0',
    },
    {
      title: '',
      dataIndex: 'data1',
    },
    {
      title: '',
      dataIndex: 'data2',
    },
    {
      title: '',
      dataIndex: 'data3',
    },
    {
      title: '',
      dataIndex: 'data4',
    },
  ];
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.boxContainer} style={{ marginRight: '10px' }}>
          <div
            className={styles.box}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <div className={styles.title}>
              Production level and attributed emissions for SEE calculation
            </div>
            <div
              style={{
                overflowY: 'scroll',
                overflowX: 'hidden',
                height: '95%',
                display: 'flex',
              }}
            >
              <div
                style={{
                  flex: 1,
                  marginRight: '10px',
                }}
              >
                <ContentBox title={'Production process 1'}>
                  <Table
                    id="processTb1"
                    size={'small'}
                    dataSource={dataSource1}
                    columns={columns1}
                    pagination={false}
                  />
                  {/* <NoHeaderTable dataSource={dataSource1} columns={columns1} /> */}
                </ContentBox>
              </div>
              <div style={{ flex: 1 }}>
                <ContentBox title={'Calculation of the attributed emissions'}>
                  <Table
                    id="processTb2"
                    size={'small'}
                    dataSource={dataSource6}
                    columns={columns6}
                    pagination={false}
                  />
                </ContentBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
