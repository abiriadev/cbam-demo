import React from 'react';
import styles from './PurchPrec.module.scss';
import { Descriptions, Table } from 'antd';
import ContentBox from '../../components/ContentBox/ContentBox';
import { EditableCell, Rec } from '../../pages/process/Process';

const PurchPrec = () => {
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
    },
    {
      d0: '2',
    },
    {
      d0: '3',
    },
    {
      d0: '4',
    },
    {
      d0: '5',
    },
    {
      d1: 'Total consumption within installation',
    },
    {},
    {
      idx: <b>(b)</b>,
      d1: <b>Consumed in "production processes" within the installation</b>,
      d3: <b>Unit</b>,
      d4: <b>Amounts</b>,
    },
    {
      d0: '1',
      d1: 'test',
    },
    {
      d0: '2',
      d1: 'test2',
    },
    {
      d0: '3',
    },
    {
      d0: '4',
    },
    {
      d0: '5',
    },
    {},
    {
      idx: <b>(c)</b>,
      d1: <b>Consumed for non-CBAM goods within the installation</b>,
    },
    {},
    {
      idx: <b>(d)</b>,
      d1: <b>Control</b>,
    },
  ];

  const columns1 = [
    {
      title: '',
      dataIndex: 'idx',
      width: '20px',
    },
    {
      title: '',
      dataIndex: 'd0',
      width: '20px',
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
      onCell: ({ isEditable, stNum, cb }: Rec) => ({
        isEditable,
        stNum,
        cb,
      }),
    },
  ];

  const columns2 = [
    {
      title: '',
      dataIndex: 'idx',
      width: '20px',
      render: (text: any, row: any, index: any) => {
        if (index === 0) {
          return {
            children: text,
            props: {
              rowSpan: 1,
            },
          };
        }
      },
    },
    {
      title: '',
      dataIndex: 'd0',
      width: '20px',
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

  const dataSource2 = [
    {
      idx: <b>(a)</b>,
      d1: <b>Emissions embedded in this purchased precursor</b>,
    },
  ];
  const dataSource3 = [
    {
      d1: <b>Parameter</b>,
      d2: <b>Unit</b>,
      d3: <b>Value</b>,
      d4: <b>Source</b>,
    },
    {
      d0: 'i',
      d1: 'Specific embedded direct emissions (SEE (direct) )',
      d2: '',
      d3: '',
      d4: 'Default',
    },
    {
      d0: 'ii',
      d1: 'Specific embedded indirect emissions (SEE (indirect) )',
      d2: '',
      d3: '',
      d4: 'D.2.4',
    },
    {
      d0: 'iii',
      d1: 'Justification for use of default values (if relevant)',
      d2: 'Unreasonable costs for more accurate monitoring',
      d3: 'Unreasonable costs for more accurate monitoring',
      d4: 'Unreasonable costs for more accurate monitoring',
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
              Purchased precursors for SEE calculation
            </div>
            <div
              style={{
                overflowY: 'scroll',
                overflowX: 'hidden',
                height: '95%',
              }}
            >
              <div
                className={styles.content}
                style={{
                  display: 'flex',
                  borderBottom: '1px solid #eff1ed',
                  paddingBottom: '30px',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    maxWidth: '800px',
                    marginRight: '10px',
                  }}
                >
                  <ContentBox title={'Purchased precursor 1 : '}>
                    <Table
                      style={{ width: '700px' }}
                      id="purchTb1"
                      size={'small'}
                      dataSource={dataSource1}
                      columns={columns1}
                      pagination={false}
                    />
                  </ContentBox>
                </div>
                <div
                  style={{
                    flex: 1,
                    //  maxWidth: '1200px',
                  }}
                >
                  <ContentBox title={'Specific embedded emissions :'}>
                    <br />
                    <Table
                      id="purchTb2"
                      style={{ width: '700px !important' }}
                      size={'small'}
                      dataSource={dataSource2}
                      columns={columns2}
                      pagination={false}
                    />
                    <div className={styles.sDesc}>
                      Please enter here the values and sources for the specific
                      embedded direct and indirect emissions, as obtained from
                      the supplier. For the SEE (direct), the 'Type of value'
                      relates to whether the direct emissions are measured, or
                      whether a default value provided by the European
                      Commission was applied. In order to obtain these data and
                      information, you may want to ask your supplier to fill in
                      an empty copy of this communication template.{' '}
                    </div>
                    <Table
                      id="cal"
                      size={'small'}
                      dataSource={dataSource3}
                      columns={columns1}
                      pagination={false}
                      components={{
                        body: {
                          cell: EditableCell,
                        },
                      }}
                    />
                  </ContentBox>
                </div>
              </div>
              <div
                className={styles.content}
                style={{
                  display: 'flex',
                  borderBottom: '1px solid #eff1ed',
                  paddingBottom: '30px',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    marginRight: '10px',
                    maxWidth: '800px',
                  }}
                >
                  <ContentBox title={'Purchased precursor 2 : '}>
                    <Table
                      id="cal"
                      size={'small'}
                      dataSource={dataSource1}
                      columns={columns1}
                      pagination={false}
                    />
                  </ContentBox>
                </div>
                <div
                  style={{
                    flex: 1,
                    //  maxWidth: '1200px'
                  }}
                >
                  <ContentBox title={'Specific embedded emissions :'}>
                    <br />
                    <Table
                      id="cal"
                      size={'small'}
                      dataSource={dataSource2}
                      columns={columns1}
                      pagination={false}
                    />
                    <div className={styles.sDesc}>
                      Please enter here the values and sources for the specific
                      embedded direct and indirect emissions, as obtained from
                      the supplier. For the SEE (direct), the 'Type of value'
                      relates to whether the direct emissions are measured, or
                      whether a default value provided by the European
                      Commission was applied. In order to obtain these data and
                      information, you may want to ask your supplier to fill in
                      an empty copy of this communication template.{' '}
                    </div>
                    <Table
                      id="cal"
                      size={'small'}
                      dataSource={dataSource3}
                      columns={columns1}
                      pagination={false}
                    />
                  </ContentBox>
                </div>
              </div>
              <div
                className={styles.content}
                style={{
                  display: 'flex',
                  borderBottom: '1px solid #eff1ed',
                  paddingBottom: '30px',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    marginRight: '10px',
                    maxWidth: '800px',
                  }}
                >
                  <ContentBox title={'Purchased precursor 3 : '}>
                    <Table
                      id="cal"
                      size={'small'}
                      dataSource={dataSource1}
                      columns={columns1}
                      pagination={false}
                    />
                  </ContentBox>
                </div>
                <div
                  style={{
                    flex: 1,
                    //  maxWidth: '1200px'
                  }}
                >
                  <ContentBox title={'Specific embedded emissions :'}>
                    <br />
                    <Table
                      id="cal"
                      size={'small'}
                      dataSource={dataSource2}
                      columns={columns1}
                      pagination={false}
                    />
                    <div className={styles.sDesc}>
                      Please enter here the values and sources for the specific
                      embedded direct and indirect emissions, as obtained from
                      the supplier. For the SEE (direct), the 'Type of value'
                      relates to whether the direct emissions are measured, or
                      whether a default value provided by the European
                      Commission was applied. In order to obtain these data and
                      information, you may want to ask your supplier to fill in
                      an empty copy of this communication template.{' '}
                    </div>
                    <Table
                      id="cal"
                      size={'small'}
                      dataSource={dataSource3}
                      columns={columns1}
                      pagination={false}
                    />
                  </ContentBox>
                </div>
              </div>{' '}
              <div
                className={styles.content}
                style={{
                  display: 'flex',
                  borderBottom: '1px solid #eff1ed',
                  paddingBottom: '30px',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    maxWidth: '800px',
                    marginRight: '10px',
                  }}
                >
                  <ContentBox title={'Purchased precursor 4 : '}>
                    <Table
                      id="cal"
                      size={'small'}
                      dataSource={dataSource1}
                      columns={columns1}
                      pagination={false}
                    />
                  </ContentBox>
                </div>
                <div
                  style={{
                    flex: 1,
                    // maxWidth: '1200px'
                  }}
                >
                  <ContentBox title={'Specific embedded emissions :'}>
                    <br />
                    <Table
                      id="cal"
                      size={'small'}
                      dataSource={dataSource2}
                      columns={columns1}
                      pagination={false}
                    />
                    <div className={styles.sDesc}>
                      Please enter here the values and sources for the specific
                      embedded direct and indirect emissions, as obtained from
                      the supplier. For the SEE (direct), the 'Type of value'
                      relates to whether the direct emissions are measured, or
                      whether a default value provided by the European
                      Commission was applied. In order to obtain these data and
                      information, you may want to ask your supplier to fill in
                      an empty copy of this communication template.{' '}
                    </div>
                    <Table
                      id="cal"
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
      </div>
    </div>
  );
};
export default PurchPrec;
