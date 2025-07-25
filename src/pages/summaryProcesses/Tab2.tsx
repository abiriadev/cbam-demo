import ContentBox from '../../components/ContentBox/ContentBox';
import styles from './SummaryProcesses.module.scss';
import { Table } from 'antd';
import { RootState } from '../../store/index';
import { useSelector } from 'react-redux';
import { ProductionProcess } from './ProductionProcess';

const Tab2 = () => {
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
                  dataSource={[
                    {
                      idx: <b>(a)</b>,
                      d0: <b>Production process</b>,
                      d1: <b>Aggregated goods category</b>,
                      d2: <b>Unit</b>,
                      d3: <b>DirEm*</b>,
                      d4: (
                        <b>
                          Heat
                          <br /> emissions
                        </b>
                      ),
                      d5: (
                        <b>
                          Waste gas <br />
                          emissions
                        </b>
                      ),
                      d6: (
                        <b>
                          Total direct <br />
                          emissionss
                        </b>
                      ),
                      d7: (
                        <b>
                          Indirect, if <br />
                          relevant
                        </b>
                      ),
                    },
                    {
                      idx: 'P1',
                      d0: 'test',
                      d1: 'Cement Clinker',
                      d2: 'tCO2e',
                      d3: direm,
                      d4: '0',
                      d5: '0',
                      d6: '1,037,310',
                      d7: '67,952',
                    },
                    {
                      idx: 'P2',
                      d0: 'test2',
                      d1: 'Cement',
                      d2: 'tCO2e',
                      d3: '0',
                      d4: '0',
                      d5: '0',
                      d6: '0',
                      d7: '93,537',
                    },
                    { idx: 'P3', d2: 'tCO2e' },
                    { idx: 'P4', d2: 'tCO2e' },
                    { idx: 'P5', d2: 'tCO2e' },

                    {
                      d0: <b>Total</b>,
                      d2: 'tCO2e',
                      d3: '1,037,310',
                      d4: '0',
                      d5: '0',
                      d6: '1,037,310',
                      d7: '161,489',
                    },
                    {},
                    {
                      idx: <b>(b)</b>,
                      d0: <b>Comparison</b>,

                      d5: <b>Unit</b>,
                      d6: (
                        <b>
                          Total direct
                          <br />
                          emissions
                        </b>
                      ),
                      d7: (
                        <b>
                          Total indirect
                          <br />
                          emissions
                        </b>
                      ),
                    },
                    {
                      idx: 'i',
                      d0: 'Total emissions of the installation (from sheet "C_Emissions&Energy")',
                      d5: 'tCO2e',
                      d6: '1,037,310',
                      d7: '152,370',
                    },
                    {
                      idx: 'ii',
                      d0: 'Rest (= emissions not attributed to CBAM processes)',
                      d5: 'tCO2e',
                      d6: '0',
                      d7: '-9,119',
                    },
                    {
                      idx: 'iii',
                      d0: 'Rest (expressed as % of total)',
                      d5: '-',
                      d6: '0%',
                      d7: '-6%',
                    },
                  ]}
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
            <div style={{ flex: 1 }}>
              <ContentBox>
                <div className={styles.ctitle}>
                  2. Specific direct and indirect (embedded) emissions
                </div>
                <br />
                <div className={styles.sDesc} style={{ width: '940px' }}>
                  The following abbreviations are used in the tables below:
                </div>
                <br />
                <StaticHelp />
                <br />
                <ProductionProcess />
              </ContentBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab2;

const StaticHelp = () => (
  <Table
    id="summmaryProcessTB4"
    size={'small'}
    dataSource={[
      {
        d0: 'SE (direct)',
        d1: 'Specific direct emissions of the production process, i.e. excluding any embedded emissions from any precursors consumed in the process.								',
      },
      {
        d0: 'SEE (direct)',
        d1: 'Specific embedded direct emissions of the production process, i.e. including any embedded emissions from any precursors consumed in the process.								',
      },
      {
        d0: 'SE (indirect)',
        d1: 'Specific indirect emissions of the production process, i.e. excluding any embedded indirect emissions from any precursors consumed in the process.								',
      },
      {
        d0: 'SEE (indirect)',
        d1: 'Specific embedded indirect emissions of the production process, i.e. including any embedded indirect emissions from any precursors consumed in the process.								',
      },
      {
        d0: 'Electricity consumed',
        d1: 'Specific electricity consumption within the production process.								',
      },
      {
        d0: 'Embedded electricity',
        d1: 'Specific embedded electricity consumption of the production process, i.e. including any embedded electricity consumption in other production processes within the installation (i.e. excl. from purchased precursors).								',
      },
      {
        d0: 'CP due (per t or MWh)',
        d1: 'This information is taken from the "tool to calculate the carbon price due" in sheet "F_Tools", where relevant.								',
      },
      {
        d0: 'Rebate (per t or MWh)',
        d1: 'This information is taken from the "tool to calculate the carbon price due" in sheet "F_Tools", where relevant.								',
      },
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
);

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
