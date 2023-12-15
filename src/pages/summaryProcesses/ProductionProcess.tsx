import { Table } from 'antd';
import { RootState } from 'store';
import { useSelector } from 'react-redux';

const rr = (a: number) => Math.round(a * 1000) / 1000;

export const ProductionProcess = () => {
  const { dsee, dse, ise, isee } = useSelector(
    (state: RootState) => state.cbam,
  );

  const p1 = {
    idx: 'P1',
    d0: 'test',
    d1: 'Cement Clinker',
    d2: rr(dse),
    d3: rr(dsee),
    d4: rr(ise),
    d5: rr(isee),
    d6: '0.065',
    d7: '0.065',
    d8: '4.40',
    d9: '3.52',
  };

  const pds = [
    {
      idx: <b>(a)</b>,
      d0: <b>Production process</b>,
      d1: <b>Aggregated goods category</b>,
      d2: (
        <b>
          SE (direct)
          <br /> tCO2e/t
        </b>
      ),
      d3: <b>SEE (direct)</b>,
      d4: (
        <b>
          SE (indirect)
          <br /> tCO2e/t
        </b>
      ),
      d5: (
        <b>
          SEE (indirect)
          <br />
          tCO2e/t
        </b>
      ),
      d6: (
        <b>
          Electricity consumed <br />
          MWh/t
        </b>
      ),
      d7: (
        <b>
          Embedded electricity
          <br />
          MWh/t
        </b>
      ),
      d8: (
        <b>
          CP due (per t or MWh)
          <br />
          MWh/t
        </b>
      ),

      d9: (
        <b>
          Rebate (per t or MWh)
          <br />
          MWh/t
        </b>
      ),
    },
    p1,

    {
      idx: 'P2',
      d0: 'test2',
      d1: 'Cement',
      d2: '0.000',
      d3: '0.785',
      d4: '0.071',
      d5: '0.122',
      d6: '0.085',
      d7: '0.147',
      d8: '4.54',
      d9: '3.63',
    },
    { idx: 'P3' },
    { idx: 'P4' },
    { idx: 'P5' },
    {},
    {
      idx: <b>(b)</b>,
      d0: <b>Purchased precursors </b>,
      d1: <b>Type of precursor</b>,

      d2: (
        <b>
          SE (direct)
          <br />
          tCO2e/t
        </b>
      ),
      d3: (
        <b>
          SEE (direct)
          <br />
          tCO2e/t
        </b>
      ),
      d4: (
        <b>
          SE (indirect)
          <br />
          tCO2e/t
        </b>
      ),
      d5: (
        <b>
          SEE (indirect)
          <br />
          tCO2e/t
        </b>
      ),
    },
    { idx: 'PP1' },
    { idx: 'PP2' },
    { idx: 'PP3' },
    { idx: 'PP4' },
    { idx: 'PP5' },
    { idx: 'PP6' },
    { idx: 'PP7' },
    { idx: 'PP8' },
    { idx: 'PP9' },
    { idx: 'PP10' },
  ];

  return (
    <Table
      id="summmaryProcessTB5"
      size={'small'}
      dataSource={pds}
      columns={col}
      pagination={false}
    />
  );
};

const col: Parameters<typeof Table>[0]['columns'] = [
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
];
