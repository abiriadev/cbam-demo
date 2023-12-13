import ContentBox from '../../components/ContentBox/ContentBox.tsx';
import styles from './SummaryProcesses.module.scss';
import { Table } from 'antd';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { pds, ppds } from './process.ds';

const Tab2 = () => {
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

  const { direm } = useSelector((state: RootState) => state.cbam);

  return (
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <div
          style={{
            marginRight: '10px',
            width: '100%',

            display: 'flex',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <div
              style={{
                flex: 1,
                marginRight: '10px',
              }}
            >
              <ContentBox>
                <div className={styles.ctitle}>
                  1. GHG emissions balance of the installation and all
                  production processes
                </div>
                <br />
                <Table
                  id="summmaryProcessTB3"
                  size={'small'}
                  dataSource={pds}
                  columns={columns1}
                  pagination={false}
                />
                <br />

                <div className={styles.sDesc} style={{ width: '940px' }}>
                  Note: the system boundaries between production processes,
                  indirect emissions and the installation's total emissions
                  might not be consistent. Therefore, values for "Rest"
                  different from zero are not necessarily indicative of any
                  omissions or errors being made in this report.
                </div>
                <br />
              </ContentBox>
            </div>

                  ]}
                  columns={[
                    {
                      title: '',
                      dataIndex: 'd0',
                    },
                    {
                      title: '',
                      dataIndex: 'd1',
                    },
                  ]}
                  pagination={false}
                />
                <br />
                <Table
                  id="summmaryProcessTB5"
                  size={'small'}
                  dataSource={ppds}
                  columns={[
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
                    {
                      title: '',
                      dataIndex: 'd8',
                      align: 'center',
                    },
                    {
                      title: '',
                      dataIndex: 'd9',
                      align: 'center',
                    },
                  ]}
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

export default Tab2;
