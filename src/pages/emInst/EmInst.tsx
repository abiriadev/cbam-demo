import React from 'react';
import styles from './EmInst.module.scss';
import { Descriptions, Table } from 'antd';
import ContentBox from 'components/ContentBox/ContentBox';

const EmInst = () => {
  const dataSource1 = [
    {
      id: 'Ex.1',
      data1: 'Combustion',
      data2: 'Heavy fuel oil',
      data3: '252,000.00',
      data4: 't',
      data5: '45.00',
      data6: 'GJ/t',
      data7: '73.00',
      data8: 'tCO2/TJ',
      data11: '100.00',
      data12: '%',
      data14: '%',
      data15: '0.00',
      data16: '%',
      data40: '827,820',
      data41: '0',
      data42: '11,340.0',
      data43: '0.0',
    },
    {
      id: 'Ex.2',
      data1: 'Process Emissions',
      data2: 'Raw meal for clinker',
      data3: '121,000.00',
      data4: 't',
      data7: '0.09',
      data8: 'tCO2/t',
      data12: '%',
      data14: '%',
      data15: '0.00',
      data16: '%',
      data40: '10,641',
      data41: '0',
      data42: '0.0',
      data43: '0.0',
    },
    {
      id: 'Ex.3',
      data1: 'Mass balance',
      data2: 'Steel',
      data3: '-1,808,226.00',
      data4: 't',
      data7: '0.00',
      data9: '0.39',
      data10: 'tC/t',
      data12: '%',
      data13: '100.00',
      data14: '%',
      data15: '0.00',
      data16: '%',
      data40: '-2,569,307',
      data41: '0',
      data42: '0.0',
      data43: '0.0',
    },
    {
      id: '1',
      data1: 'Process emissions',
      data2: 'Raw meal for clinker',
      data3: '1,255,000.00',
      data4: 't',

      data6: 'GJ/t',
      data7: '0.53',
      data8: 'tCO2/t',

      data12: '%',
      data13: '100.00',
      data14: '%',
      data15: '0.00',
      data16: '%',
      data40: '658,875',
      data41: '0',
      data42: '0.0',
      data43: '0.0',
    },
    {
      id: '2',
      data1: 'Combustion',
      data2: 'Coal',
      data3: '88,000.00',
      data4: 't',
      data5: '25.00',
      data6: 'GJ/t',
      data7: '95.00',
      data8: 'tCO2/TJ',
      data11: '100.00',
      data12: '%',
      data14: '%',
      data15: '0.00',
      data16: '%',
      data40: '209,000',
      data41: '0',
      data42: '2,200.0',
      data43: '0.0',
    },
    {
      id: '3',
      data1: 'Combustion',
      data2: 'High NCV household waste',
      data3: '43,000.00',
      data4: 't',
      data5: '20.00',
      data6: 'GJ/t',
      data7: '83.00',
      data8: 'tCO2/TJ',
      data11: '100.00',
      data12: '%',
      data14: '%',
      data15: '15.00',
      data16: '%',
      data40: '35,275',
      data41: '6,225',
      data42: '425.0',
      data43: '75.0',
    },
    {
      id: '4',
      data1: 'Combustion',
      data2: 'HFO',
      data3: '1,255,000.00',
      data4: 't',
      data5: '40.00',
      data8: 'tCO2/TJ',
      data7: '78.00',

      data11: '100.00',
      data12: '%',
      data14: '%',
      data15: '0.00',
      data16: '%',
      data40: '134,160',
      data41: '0',
      data42: '1,720.0',
      data43: '0.0',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
  ];
  const dataSource2 = [
    {
      id: 'Ex.1',
      data1: 'Overvoltage method',
      data2: 'Centre Worked Pre-Bake (CWPB)',
      data3: '5,000.00',
      data4: 't',
      data26: '300.00',

      data27: '2.00',
      data28: '0.00',
      data29: '0.15',

      data30: '0.00',
      data31: '0.00',
      data32: '0.12',
      data33: '4.38',
      data34: '0.53',
      data35: '6,630',
      data36: '11,100',
      data37: '32,368',
      data38: '98.00',
      data39: '39,681',
    },
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
  ];
  const dataSource3 = [
    {
      id: 'Ex.1',
      data1: 'N2O',
      data2: 'N2O',
      data15: '0',
      data16: '%',
      data17: '64.293',
      data18: 'g/Nm3',
      data19: '4',
      data20: 'h/year',
      data21: '265',
      data22: '1000Nm3/h',
      data23: '68',
      data24: 't',
      data25: '265',
      data40: '20,309',
      data41: '0',
      data42: '0',
      data43: '0',
    },
    {
      id: 'Ex.2',
      data1: 'CO2 transfer',
      data2: 'CO2',
      data15: '0',
      data16: '%',
      data17: '1,820.000',
      data18: 'g/Nm3',
      data19: '5,000',
      data20: 'h/year',
      data21: '50',
      data22: '1000Nm3/h',
      data23: '455,000',
      data24: 't',
      data25: '1',
      data40: '455,000',
      data41: '0',
      data42: '0',
      data43: '0',
    },
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
  ];
  const columns1: any = [
    {
      title: '#',
      dataIndex: 'id',
      fixed: 'left',
      align: 'center',
      width: '50px',
    },
    {
      title: 'Method',
      dataIndex: 'data1',
      fixed: 'left',
      width: '130px',
    },
    {
      title: 'Source stream name',
      dataIndex: 'data2',
      fixed: 'left',
      width: '180px',
    },
    {
      title: 'Activity data (AD)',
      dataIndex: 'data3',
      align: 'center',
    },
    {
      title: 'AD Unit',
      dataIndex: 'data4',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Net calorific
          <br />
          value (NCV)
        </div>
      ),
      dataIndex: 'data5',
      align: 'center',
    },

    {
      title: 'NCV Unit',
      dataIndex: 'data6',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Emission <br />
          factor (EF)
        </div>
      ),
      dataIndex: 'data7',
      align: 'center',
    },
    {
      title: 'EF Unit',
      dataIndex: 'data8',
      align: 'center',
    },
    {
      title: 'Carbon content',
      dataIndex: 'data9',
      align: 'center',
    },
    {
      title: 'C-Content Unit',
      dataIndex: 'data10',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Oxidation <br />
          factor (OxF)
        </div>
      ),
      dataIndex: 'data11',
      align: 'center',
    },
    {
      title: 'OxF Unit',
      dataIndex: 'data12',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Conversion <br />
          factor (ConvF)
        </div>
      ),
      dataIndex: 'data13',
      align: 'center',
    },
    {
      title: 'ConvF Unit',
      dataIndex: 'data14',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Biomass <br />
          content (BioC)
        </div>
      ),
      dataIndex: 'data15',
      align: 'center',
    },
    {
      title: 'BioC Unit	',
      dataIndex: 'data16',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          hourly GHG <br />
          conc. Average
        </div>
      ),
      dataIndex: 'data17',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          hourly GHG <br />
          conc. Unit
        </div>
      ),
      dataIndex: 'data18',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          hours
          <br />
          operating
        </div>
      ),
      dataIndex: 'data19',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          hours
          <br />
          operating Unit
        </div>
      ),
      dataIndex: 'data20',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Flue gas
          <br />
          (average)
        </div>
      ),
      dataIndex: 'data21',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Flue gas
          <br />
          (average), Unit
        </div>
      ),
      dataIndex: 'data22',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Annual amount
          <br />
          of GHG
        </div>
      ),
      dataIndex: 'data23',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Annual amount
          <br />
          of GHG Unit
        </div>
      ),
      dataIndex: 'data24',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Global
          <br />
          Warming <br /> Potential <br />
          (GWP, tCO2e/t)
        </div>
      ),
      dataIndex: 'data25',
      align: 'center',
    },
    {
      title: 'A: Frequency',
      dataIndex: 'data26',
      align: 'center',
    },
    {
      title: 'A: Duration',
      dataIndex: 'data27',
      align: 'center',
    },
    {
      title: 'A: SEF(CF4)',
      dataIndex: 'data28',
      align: 'center',
    },
    {
      title: 'B: AEO',
      dataIndex: 'data29',
      align: 'center',
    },
    {
      title: 'B: CE	',
      dataIndex: 'data30',
      align: 'center',
    },
    {
      title: 'B: OVC',
      dataIndex: 'data31',
      align: 'center',
    },
    {
      title: 'F(C2F6)',
      dataIndex: 'data32',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          CF4 Emissions
          <br />
          (t CF4)
        </div>
      ),
      dataIndex: 'data33',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          C2F6 Emissions
          <br />
          (t C2F6)
        </div>
      ),
      dataIndex: 'data34',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          GWP (CF4)
          <br />
          (tCO2e/t)
        </div>
      ),
      dataIndex: 'data35',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          GWP (C2F6)
          <br />
          (tCO2e/t)
        </div>
      ),
      dataIndex: 'data36',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          CF4 Emissions
          <br />
          (t CO2e)
        </div>
      ),
      dataIndex: 'data37',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          C2F6
          <br />
          Emissions <br /> (t CO2e)
        </div>
      ),
      dataIndex: 'data38',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Collection
          <br />
          efficiency, %
        </div>
      ),
      dataIndex: 'data39',
      align: 'center',
    },
    {
      title: 'CO2e fossil (t)',
      dataIndex: 'data40',
      align: 'center',
    },
    {
      title: 'CO2e bio (t)',
      dataIndex: 'data41',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Energy content
          <br />
          (fossil), TJ
        </div>
      ),
      dataIndex: 'data42',
      align: 'center',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Energy content
          <br />
          (bio), TJ
        </div>
      ),
      dataIndex: 'data43',
      align: 'center',
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
              Installation's emission at source stream and emission source level
            </div>
            <div
              style={{
                overflowY: 'scroll',
                overflowX: 'hidden',
                height: '95%',
              }}
            >
              <ContentBox title={'Source Streams (excluding PFC emissions)'}>
                <Table
                  id="emInst1"
                  bordered={true}
                  scroll={{ x: 4000 }}
                  size={'small'}
                  dataSource={dataSource1}
                  columns={columns1}
                  pagination={false}
                />
              </ContentBox>

              <ContentBox title={'PFC Emissions'}>
                <Table
                  id="emInst2"
                  bordered={true}
                  scroll={{ x: 4000 }}
                  size={'small'}
                  dataSource={dataSource2}
                  columns={columns1}
                  pagination={false}
                />
              </ContentBox>

              <ContentBox
                title={'Emissions Sources (Measurement-Based Approaches)'}
              >
                <Table
                  id="emInst3"
                  bordered={true}
                  scroll={{ x: 4000 }}
                  size={'small'}
                  dataSource={dataSource3}
                  columns={columns1}
                  pagination={false}
                />
              </ContentBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmInst;
