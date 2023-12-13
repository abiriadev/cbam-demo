import React from 'react';
import styles from './SummaryProducts.module.scss';
import { Descriptions, Table } from 'antd';
import ContentBox from '../../components/ContentBox/ContentBox';

const SummaryProducts = () => {
  const dataSource1 = [
    {
      idx: 'Ex',
      data1: 'Example process A',
      data2: ' Iron or steel products',
      data3: '72071919',
      data4:
        'Semi-finished products of iron or non-alloy steel, containing by weight < 0,25% carbon, of circular or polygonal cross-section, forged',
      data5: 'Example name A',
      data6: '0.915',
      data7: '0.396',
      data8: '1.311',
      data9: 'tCO2e/t',
      data10: '',
      data11: 'D.2.1',
      data12: '0.281',
      data13: 'Coal or coke',
      data14: '623108',
      data15: '13.95%',
      data16: '8.41%',
      data17: '2.10%',
      data18: '3.00%',
      data19: '0.35%',
      data21: '0.01%',
      data34: 'Tax or levy',
      data35: '69.8%',
      data36: '0.915',
      'data36-2': 'tCO2e/t',
      data38: '50.00',
      'data38-2': 'USD/t',
      data39: 'Tax deduction',
      data40: '90.0%',
      data41: '1.180',
      'data41-2': 'tCO2e/t',
      data42: '20.00',
      'data42-2': 'USD/t',
      data43: '35.41',
      'data43-2': 'USD/t',
    },
    { idx: 1 },
    { idx: 2 },
    { idx: 3 },
    { idx: 4 },
    { idx: 5 },
    { idx: 6 },
    { idx: 7 },
    { idx: 8 },
    { idx: 9 },
    { idx: 10 },
    { idx: 11 },
    { idx: 12 },
    { idx: 13 },
    { idx: 14 },
    { idx: 15 },
    { idx: 16 },
    { idx: 17 },
    { idx: 18 },
    { idx: 19 },
    { idx: 20 },
    { idx: 21 },
    { idx: 22 },
    { idx: 23 },
    { idx: 24 },
    { idx: 25 },
    { idx: 26 },
    { idx: 27 },
    { idx: 28 },
    { idx: 29 },
    { idx: 30 },
    { idx: 31 },
    { idx: 32 },
    { idx: 33 },
    { idx: 34 },
    { idx: 35 },
    { idx: 36 },
    { idx: 37 },
    { idx: 38 },
    { idx: 39 },
    { idx: 40 },
    { idx: 41 },
    { idx: 42 },
    { idx: 43 },
    { idx: 44 },
    { idx: 45 },
    { idx: 46 },
    { idx: 47 },
    { idx: 48 },
    { idx: 49 },
    { idx: 50 },
    { idx: 51 },
    { idx: 52 },
    { idx: 53 },
    { idx: 54 },
    { idx: 55 },
    { idx: 56 },
    { idx: 57 },
    { idx: 58 },
    { idx: 59 },
    { idx: 60 },
    { idx: 61 },
    { idx: 62 },
    { idx: 63 },
    { idx: 64 },
    { idx: 65 },
    { idx: 66 },
    { idx: 67 },
    { idx: 68 },
    { idx: 69 },
    { idx: 70 },
    { idx: 71 },
    { idx: 72 },
    { idx: 73 },
    { idx: 74 },
    { idx: 75 },
    { idx: 76 },
    { idx: 77 },
    { idx: 78 },
    { idx: 79 },
    { idx: 80 },
    { idx: 81 },
    { idx: 82 },
    { idx: 83 },
    { idx: 84 },
    { idx: 85 },
    { idx: 86 },
    { idx: 87 },
    { idx: 88 },
    { idx: 89 },
    { idx: 90 },
    { idx: 91 },
    { idx: 92 },
    { idx: 93 },
    { idx: 94 },
    { idx: 95 },
    { idx: 96 },
    { idx: 97 },
    { idx: 98 },
    { idx: 99 },
    { idx: 100 },
  ];

  const columns1: any = [
    {
      title: '',
      dataIndex: 'idx',
      fixed: 'left',
      align: 'center',
      width: '35px',
    },
    {
      title: (
        <b>
          Production process from
          <br /> which the products arise
        </b>
      ),
      dataIndex: 'data1',
      fixed: 'left',
      width: '180px',
    },
    {
      title: (
        <b>
          Type of aggregated good or
          <br /> precursor
        </b>
      ),
      dataIndex: 'data2',
      fixed: 'left',
      width: '180px',
    },
    {
      title: 'CN Codes',
      fixed: 'left',
      dataIndex: 'data3',
      align: 'center',
    },
    {
      title: 'CN Name',
      dataIndex: 'data4',
      align: 'left',
      width: '300px',
      ellipsis: true,
    },
    {
      title: (
        <div style={{ textAlign: 'left' }}>
          Product name <br />
          (used for communication with reporting <br />
          declarant, e.g. on invoices)
        </div>
      ),
      dataIndex: 'data5',
      align: 'left',
      width: '280px',
    },

    {
      title: ' SEE (direct)',
      dataIndex: 'data6',
      align: 'center',
    },
    {
      title: <div style={{ textAlign: 'center' }}>SEE (indirect)</div>,
      dataIndex: 'data7',
      align: 'center',
    },
    {
      title: 'SEE (total)',
      dataIndex: 'data8',
      align: 'center',
    },
    {
      title: 'Unit',
      dataIndex: 'data9',
      align: 'center',
      width: '130px',
    },

    {
      title: (
        <b>
          Share of <br />
          emissions by <br />
          default value
        </b>
      ),
      dataIndex: 'data10',
      align: 'center',
      width: '130px',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>Source for electricity EF</div>
      ),
      dataIndex: 'data11',
      align: 'center',
      width: '130px',
    },
    {
      title: 'Embedded electricity (MWh/t)',
      dataIndex: 'data12',
      align: 'center',
      width: '130px',
    },

    {
      title: (
        <div style={{ textAlign: 'center' }}>
          The main reducing agent of the precursor, if known
        </div>
      ),
      dataIndex: 'data13',
      align: 'center',
      width: '130px',
    },
    {
      title: '	Steel mill identification number',
      dataIndex: 'data14',
      align: 'center',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>% Mn</div>,
      dataIndex: 'data15',
      align: 'center',
      width: '130px',
    },
    {
      title: '% Cr',
      dataIndex: 'data16',
      align: 'center',
      width: '130px',
    },

    {
      title: <div style={{ textAlign: 'center' }}>% Ni</div>,
      dataIndex: 'data17',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>% other alloys</div>,
      dataIndex: 'data18',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>% carbon</div>,
      dataIndex: 'data19',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>t scrap per t steel</div>,
      dataIndex: 'data20',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>% other materials</div>,
      dataIndex: 'data21',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>% pre-consumer scrap</div>,
      dataIndex: 'data22',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>t scrap per t aluminium</div>,
      dataIndex: 'data23',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>Clinker factor</div>,
      dataIndex: 'data24',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>Calcined or not</div>,
      dataIndex: 'Clinker factor',
      width: '130px',
    },
    {
      title: 'Concentration, if hydrous solution',
      dataIndex: 'data26',
      width: '130px',
    },
    {
      title: '% nitric acid',
      dataIndex: 'data27',
      width: '130px',
    },
    {
      title: '% urea',
      dataIndex: 'data28',
      width: '130px',
    },
    {
      title: '% N contained',
      dataIndex: 'data29',
      width: '130px',
    },
    {
      title: '% N as ammonium (NH4+)',
      dataIndex: 'data30',
      width: '130px',
    },
    {
      title: '% N as nitrate (NO3–)',
      dataIndex: 'data31',
      width: '130px',
    },
    {
      title: '% N as Urea',
      dataIndex: 'data32',
      width: '130px',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>% N in other (organic) forms</div>
      ),
      dataIndex: 'data33',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>Form of carbon price</div>,
      dataIndex: 'data34',
      width: '130px',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Share of total embedded emissions covered by the carbon price
        </div>
      ),
      dataIndex: 'data35',
      width: '130px',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          Embedded emissions covered by the carbon price
        </div>
      ),
      dataIndex: 'data36',
      width: '130px',
    },
    {
      title: '',
      dataIndex: 'data36-2',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>Currency</div>,
      dataIndex: 'data37',
      width: '130px',
    },
    {
      title: '',
      dataIndex: 'data37-2',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>Carbon price (CP)</div>,
      dataIndex: 'data38',
      width: '130px',
    },
    {
      title: '',
      dataIndex: 'data38-2',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>Form of rebate</div>,
      dataIndex: 'data39',
      width: '130px',
    },
    {
      title: 'Share of embedded emissions covered by the rebate',
      dataIndex: 'data40',
      align: 'center',
      width: '130px',
    },
    {
      title: 'Embedded emissions covered by rebate		',
      dataIndex: 'data41',
      align: 'center',
      width: '130px',
    },
    {
      title: '',
      dataIndex: 'data41-2',
      width: '130px',
    },
    {
      title: <div style={{ textAlign: 'center' }}>Amount of rebate</div>,
      dataIndex: 'data42',
      align: 'center',
      width: '130px',
    },
    {
      title: '',
      dataIndex: 'data42-2',
      width: '130px',
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>Result: Effective CP due</div>
      ),
      dataIndex: 'data43',
      align: 'center',
      width: '130px',
    },
    {
      title: '',
      dataIndex: 'data43-2',
      width: '130px',
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
              overflow: 'hidden',
            }}
          >
            <div className={styles.title}>Summary of products</div>

            <ContentBox>
              <Table
                id="summaryProductTb1"
                scroll={{ x: 7000, y: `calc(100vh - 380px )` }}
                size={'small'}
                dataSource={dataSource1}
                columns={columns1}
                pagination={false}
              />
            </ContentBox>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SummaryProducts;
