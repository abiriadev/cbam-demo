import React from 'react';
import styles from './EmissionsEnergy.module.scss';
import { Descriptions, Table } from 'antd';
import ContentBox from 'components/ContentBox/ContentBox';

const EmissionsEnergy = () => {
  const items1: any = [
    {
      key: '1',
      label: 'General information on data quality',
      children: (
        <p>
          Please select from the hierarchical order (descending order) in the
          drop-down list the predominant approach for determining the
          installation's direct emissions.
        </p>
      ),
    },
    {
      key: '2',
      label: 'Justification for use of default values (if relevant)',
      children: (
        <p>
          If the predominant method was to use default values published by the
          European Commission, please select from the drop-down list the most
          appropriate justification for not achieving higher data quality.
        </p>
      ),
    },
    {
      key: '3',
      label: 'Information on quality assurance',
      children: (
        <p>
          Please select from the hierarchical order (descending order) in the
          drop-down list the approach for quality assurance of emissions data.
        </p>
      ),
    },
  ];

  const items2: any = [
    {
      key: '1',
      label: 'i.	General information on data quality',
      children: (
        <p>
          Mostly measurements & national standard factors for e.g. the emission
          factor
        </p>
      ),
    },
    {
      key: '2',
      label: 'ii.	Justification for use of default values (if relevant)	',
    },
    {
      key: '3',
      label: 'iii.	Information on quality assurance',
      children: <p>Four eyes principle </p>,
    },
  ];

  const dataSource1 = [
    {
      id: 'i',
      fule: 'from page B "EmInst" ',
      unit: 'TJ',
      total: '4,420.00',
    },
    {
      id: 'ii',
      fule: 'manual entries',
      unit: 'TJ',
    },
    {
      id: 'iii',
      fule: 'Results',
      unit: 'TJ',
      total: '4,420.00',
      rest: '4,420.00',
    },
  ];

  const columns1: any = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      align: 'right',
    },
    {
      title: 'Fuel balance',
      dataIndex: 'fule',
      key: 'fule',
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Total fuel <br />
          input
        </div>
      ),
      dataIndex: 'total',
      key: 'total',
      align: 'right',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Direct fuel for <br />
          CBAM goods
        </div>
      ),
      dataIndex: 'goods',
      key: 'goods',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Fuel for <br />
          electricity
        </div>
      ),
      dataIndex: 'electricity',
      key: 'electricity',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Direct fuel for <br />
          non-CBAM <br />
          goods
        </div>
      ),
      dataIndex: 'nonGoods',
      key: 'nonGoods',
    },
    {
      title: <div style={{ textAlign: 'center' }}>Rest</div>,
      dataIndex: 'rest',
      key: 'rest',
      align: 'right',
    },
  ];

  const dataSource2 = [
    {
      id: 'i',
      levelData: 'from page B "EmInst" ',
      unit: 'tCO2e',
      data1: '4,420.00',
      data2: '6,225',
      data3: 0,
      data4: 0,
      data5: '1,037,310',
    },
    {
      id: 'ii',
      levelData: 'manual entries',
      unit: 'tCO2e',
      data6: '152,370',
    },
    {
      id: 'iii',
      levelData: 'Results',
      unit: 'tCO2e',
      data1: '4,420.00',
      data2: '6,225',
      data3: 0,
      data4: 0,
      data5: '1,037,310',
      data6: '152,370',
      data7: '1,189,680',
    },
  ];
  const columns2: any = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      align: 'right',
    },
    {
      title: 'Installation level data',
      dataIndex: 'levelData',
      key: 'levelData',
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Total CO2 <br />
          emissions
        </div>
      ),
      dataIndex: 'data1',
      key: 'data1',
      align: 'right',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Biomass
          <br />
          emissions
        </div>
      ),

      dataIndex: 'data2',
      key: 'data2',
      align: 'right',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Total N2O <br />
          emissions
        </div>
      ),

      dataIndex: 'data3',
      key: 'data3',
      align: 'right',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Total PFC <br />
          emissions
        </div>
      ),
      dataIndex: 'data4',
      key: 'data4',
      align: 'right',
    },

    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Total direct <br />
          emissions
        </div>
      ),
      dataIndex: 'data5',
      key: 'data5',
      align: 'right',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Total indirect <br />
          emissions
        </div>
      ),
      dataIndex: 'data6',
      key: 'data6',
      align: 'right',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Total <br />
          emissions
        </div>
      ),
      dataIndex: 'data7',
      key: 'data7',
      align: 'right',
    },
  ];
  const columns3: any = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      align: 'right',
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Calculation - based <br />
          (excl. PFC emissions)
        </div>
      ),
      dataIndex: 'data1',
      key: 'data1',
      align: 'right',
    },

    {
      title: <div style={{ textAlign: 'center' }}>Total PFC emissions</div>,

      dataIndex: 'data2',
      key: 'data2',
      align: 'right',
    },

    {
      title: <div style={{ textAlign: 'center' }}>Measurement- based</div>,

      dataIndex: 'data3',
      key: 'data3',
      align: 'right',
    },
    {
      title: <div style={{ textAlign: 'center' }}>Other</div>,
      dataIndex: 'data4',
      key: 'data4',
      align: 'right',
    },
  ];

  const dataSource3 = [
    {
      id: 'Emissions',

      unit: 'tCO2e',
      data1: '1,037,310',
      data2: '0',
      data3: 0,
      data4: 0,
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
            }}
          >
            <div className={styles.title}>
              Installation-level GHG emissions and energy consumption
            </div>
            <ContentBox title={'1.	Fuel balance	'}>
              <div className={styles.sDesc}>
                Please enter in the table below the amount of energy consumed
                for each use type: <br /> - Fuel input to all CBAM production
                processes (including precursors produced within the
                installation), either directly or via the production of
                measurable heat (e.g. steam) with the exception of fuel for
                electricity.
                <br /> - Fuel input for electricity production
                <br /> - Fuel input to all non-CBAM production processes, either
                directly or via the production of measurable heat (e.g. steam).
                <br />
                <br />
              </div>

              <br />
              <Table
                id="eeTb1"
                size={'small'}
                dataSource={dataSource1}
                columns={columns1}
                pagination={false}
              />
            </ContentBox>
          </div>
        </div>

        <div className={styles.boxContainer} style={{ marginRight: '10px' }}>
          <div
            className={styles.box}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ContentBox
              title={
                '2.	Greenhouse gas emissions balance & information on data quality				'
              }
            >
              <div className={styles.ctitle}>
                (a) GHG balance by type of GHG
              </div>
              <br />
              <div className={styles.sDesc}>
                Values below are taken automatically from entries in sheet
                "B_EmInst". If entries made in that sheet are incomplete, please
                enter the total emissions figures manually under ii. to override
                automatic results displayed under i.
              </div>
              <br />
              <Table
                id="eeTb2"
                size={'small'}
                dataSource={dataSource2}
                columns={columns2}
                pagination={false}
              />

              <br />
              <div className={styles.ctitle}>
                (b) GHG balance by type of monitoring methodology
              </div>
              <br />
              <div className={styles.sDesc}>
                Values below are taken automatically from entries in sheet
                "B_EmInst" and point (a) above.
              </div>
              <br />
              <Table
                id="eeTb3"
                size={'small'}
                dataSource={dataSource3}
                columns={columns3}
                pagination={false}
              />
              <br />
              <Descriptions
                bordered
                size="small"
                title={
                  '(c) Information on the data quality and quality assurance'
                }
                column={1}
                items={items1}
                labelStyle={{
                  width: '180px',
                }}
              />
              <br />
              <Descriptions
                bordered
                size="small"
                column={1}
                items={items2}
                labelStyle={{
                  width: '300px',
                }}
                className="ddDesc"
              />
            </ContentBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmissionsEnergy;
