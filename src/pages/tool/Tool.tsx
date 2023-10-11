import React from 'react';
import styles from './Tool.module.scss';
import { Descriptions, Table } from 'antd';
import ContentBox from 'components/ContentBox/ContentBox';
import { TbColumns2 } from 'react-icons/tb';

const Tool = () => {
  const dataSource1 = [
    {
      idx: <b>(a)</b>,
      d0: <b>Total amount of fuel input into CHP units </b>,
    },
    {
      d1: <b>Parameter</b>,
      d2: (
        <b>
          Fuel input into <br />
          CHP
        </b>
      ),
      d3: (
        <b>
          Heat output <br />
          from CHP
        </b>
      ),
      d4: (
        <b>
          Electricity
          <br /> output from
          <br /> CHP
        </b>
      ),
      d5: (
        <b>
          Electricity
          <br /> output from
          <br /> CHP
        </b>
      ),
    },
    {
      d1: <b>Unit</b>,
      d2: <b>TJ</b>,
      d3: <b>TJ</b>,
      d4: <b>MWh</b>,
      d5: <b>TJ</b>,
    },
    {
      d0: 'Inputs and outputs',
      d1: <b>Value</b>,
    },
    {},
    {
      idx: <b>(b)</b>,
      d0: <b>Total emissions from CHP </b>,
    },
    {
      d1: <b>Unit</b>,
      d2: (
        <b>
          From fuel
          <br /> input to CHP
        </b>
      ),
      d3: (
        <b>
          From flue gas
          <br /> cleaning
        </b>
      ),
      d4: (
        <b>
          Total
          <br /> emissions
        </b>
      ),
    },
    {
      d0: 'GHG emissions',
      d1: 'tCO2',
    },
    {},
    {
      idx: <b>(c)</b>,
      d0: <b>Default efficiencies</b>,
      d2: <b>Heat</b>,
      d3: <b>55.00%</b>,
      d4: <b>Electricity</b>,
      d5: <b>25.00%</b>,
    },
    {},
    {
      idx: <b>(d)</b>,
      d0: <b>Efficiencies for heat and electricity</b>,
    },
    {
      d1: <b>Unit</b>,
      d2: (
        <b>
          Heat
          <br /> production
        </b>
      ),
      d3: (
        <b>
          Electricity <br />
          production
        </b>
      ),
      d4: <b>Total</b>,
    },
    {
      d0: 'Efficiencies',
      d1: '-',
    },
    {},
    {
      idx: <b>(e)</b>,
      d0: <b>Reference efficiencies </b>,
    },
    {
      d1: <b>Unit</b>,
      d2: (
        <b>
          Heat <br />
          production
        </b>
      ),
      d3: (
        <b>
          Electricity <br />
          production
        </b>
      ),
    },
    {
      d0: 'Reference efficiencie',
      d1: '-',
    },
    {},
    {
      idx: <b>(f)</b>,
      d0: <b>Emissions attributable to heat production from CHP</b>,
    },
    {
      d1: <b>Parameter</b>,
      d2: (
        <b>
          Emissions <br />
          attributable to <br />
          heat output
        </b>
      ),
      d3: <b>Emission factor, heat</b>,
      d4: (
        <b>
          Emissions <br />
          attributable to <br />
          electricity
        </b>
      ),
      d5: (
        <b>
          Emission
          <br /> factor,
          <br /> electricity
        </b>
      ),
    },

    {
      d1: <b>Unit</b>,
      d2: <b>tCO2</b>,
      d3: <b>tCO2/TJ</b>,
      d4: <b>tCO2</b>,
      d5: <b>tCO2/TJ</b>,
    },

    {
      d0: 'Attributable emissions',
      d1: <b>Value</b>,
    },
    {},
    {
      idx: <b>(g)</b>,
      d0: <b>Fuel input attributable to heat and electricity production</b>,
    },
    {
      d1: <b>Unit</b>,
      d2: (
        <b>
          Fuel input for <br />
          heat
        </b>
      ),
      d3: (
        <b>
          Fuel input for <br />
          electricity/TJ
        </b>
      ),
    },
    {
      d0: 'Attributable fuel input',
      d1: <b>TJ</b>,
    },
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
  ];

  const dataSource2 = [
    {
      d1: <b>Parameter</b>,
      d2: <b>Fuel input into CHP</b>,
      d3: <b>Heat output from CHP </b>,
      d4: <b>Electricity output from CHP </b>,
      d5: <b>Electricity output from CHP</b>,
    },
    {
      idx: <b>(a)</b>,
      d0: <b>Total amount of fuel</b>,
      d1: <b>Unit</b>,
      d2: <b>TJ</b>,
      d3: <b>TJ</b>,
      d4: <b>MWh</b>,
      d5: <b>TJ</b>,
    },
    {
      d0: 'Inputs and outputs',
      d1: <b>Value</b>,
    },
    {},
    {
      idx: <b>(b)</b>,
      d0: <b>Total emissions from CHP </b>,
      d1: <b>Unit</b>,
      d2: (
        <b>
          From fuel <br />
          input to CHP
        </b>
      ),
      d3: (
        <b>
          From flue gas <br />
          cleaning
        </b>
      ),
      d4: (
        <b>
          Total <br />
          emissions
        </b>
      ),
    },
    {
      d0: 'GHG emissions',
      d1: 'tCO2',
    },
    {
      idx: <b>(c)</b>,
      d0: <b>Default efficiencies</b>,
      d2: <b>Heat</b>,
      d3: <b>55.00%</b>,
      d4: <b>Electricity</b>,
      d5: <b>25.00%</b>,
    },
    {},
    {
      idx: <b>(d)</b>,
      d0: <b>Efficiencies for heat and electricity</b>,
    },
    {
      d1: <b>Unit</b>,
      d2: (
        <b>
          Heat
          <br /> production
        </b>
      ),
      d3: (
        <b>
          Electricity <br />
          production
        </b>
      ),
      d4: <b>Total</b>,
    },
    {
      d0: 'Efficiencies',
      d1: '-',
    },
    {},
    {
      idx: <b>(e)</b>,
      d0: <b>Reference efficiencies </b>,
    },
    {
      d1: <b>Unit</b>,
      d2: (
        <b>
          Heat <br />
          production
        </b>
      ),
      d3: (
        <b>
          Electricity <br />
          production
        </b>
      ),
    },
    {
      d0: 'Reference efficiencie',
      d1: '-',
    },
    {},
    {
      idx: <b>(f)</b>,
      d0: <b>Emissions attributable to heat production from CHP</b>,
    },
    {
      d1: <b>Parameter</b>,
      d2: (
        <b>
          Emissions <br />
          attributable to <br />
          heat output
        </b>
      ),
      d3: <b>Emission factor, heat</b>,
      d4: (
        <b>
          Emissions <br />
          attributable to <br />
          electricity
        </b>
      ),
      d5: (
        <b>
          Emission
          <br /> factor,
          <br /> electricity
        </b>
      ),
    },

    {
      d1: <b>Unit</b>,
      d2: <b>tCO2</b>,
      d3: <b>tCO2/TJ</b>,
      d4: <b>tCO2</b>,
      d5: <b>tCO2/TJ</b>,
    },

    {
      d0: 'Attributable emissions',
      d1: <b>Value</b>,
    },
    {},
    {
      idx: <b>(g)</b>,
      d0: <b>Fuel input attributable to heat and electricity production</b>,
    },
    {
      d1: <b>Unit</b>,
      d2: (
        <b>
          Fuel input for <br />
          heat
        </b>
      ),
      d3: (
        <b>
          Fuel input for <br />
          electricity/TJ
        </b>
      ),
    },
    {
      d0: 'Attributable fuel input',
      d1: <b>TJ</b>,
    },
  ];

  const dataSource3: any = [
    { d4: 'Currency', d5: 'SGD	', d6: 'Singapore Dollar' },
    {
      d0: <b>Production process</b>,
      d1: <b>Aggregated goods category</b>,
      d2: (
        <b>
          SE (total)
          <br />
          <div className={styles.unit}> tCO2e/t</div>
        </b>
      ),
      d3: (
        <b>
          Share of emissions <br /> covered by the <br /> carbon price{' '}
        </b>
      ),
      d4: (
        <b>
          Covered SE <br />
          <div className={styles.unit}> tCO2e/t</div>
        </b>
      ),
      d5: (
        <b>
          Carbon price (CP) <br />
          due (local currency) <br />
          <div className={styles.unit}> SGD/tCO2e</div>
        </b>
      ),
      d6: (
        <b>
          Amount of rebate <br />
          (local currency)
          <div className={styles.unit}> SGD/tCO2e</div>
        </b>
      ),
      d7: (
        <b>
          CP due <br /> (per t or MWh)
        </b>
      ),
      d8: (
        <b>
          {' '}
          Rebate <br />
          (per t or MWh)
        </b>
      ),
      d9: (
        <b>
          Result: Effective <br /> CP due
        </b>
      ),
    },
    {
      idx: 'P1',
      d0: 'test',
      d1: 'Cement clinker',
      d2: '0.881',
      d3: '100.0%',
      d4: '0.881',
      d5: '5.00',
      d6: '4.00',
      d7: '4.40',
      d8: '3.52',
      d9: '0.88',
    },
    {
      idx: 'P2',
      d0: 'test2',
      d1: 'Cement ',
      d2: '0.071',
      d3: '100.0%',
      d4: '0.071',
      d5: '5.00',
      d6: '4.00',
      d7: '4.54',
      d8: '3.63',
      d9: '0.91',
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
    {
      idx: 'P6',
    },
    {
      idx: 'P7',
    },
    {
      idx: 'P8',
    },
    {
      idx: 'P9',
    },
    {
      idx: 'P10',
    },
    {
      idx: 'PP1',
      d3: '80.0%',
      d5: '50.00',
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
    {
      idx: 'PP6',
    },
    {
      idx: 'PP7',
    },
    {
      idx: 'PP8',
    },
    {
      idx: 'PP9',
    },
    {
      idx: 'PP10',
    },
    {
      idx: 'PP11',
    },
    {
      idx: 'PP12',
    },
    {
      idx: 'PP13',
    },
    {
      idx: 'PP14',
    },
    {
      idx: 'PP15',
    },
    {
      idx: 'PP16',
    },
    {
      idx: 'PP17',
    },
    {
      idx: 'PP18',
    },
    {
      idx: 'PP19',
      d3: '100.0%',
      d5: '20.00',
    },
    {
      idx: 'PP20',
    },
  ];

  const columns3: any = [
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
    {
      title: '',
      dataIndex: 'd5',
    },
    {
      title: '',
      dataIndex: 'd6',
    },
    {
      title: '',
      dataIndex: 'd7',
    },
    {
      title: '',
      dataIndex: 'd8',
    },
    {
      title: '',
      dataIndex: 'd9',
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
            <div className={styles.title}>Tools for facilitating reporting</div>
            <ContentBox title={'1	Cogeneration Tool	'}>
              <div className={styles.sDesc}>
                This is a tool for attributing fuels and emissions of CHPs to
                heat and electricity output. This tool exists twofold in this
                template and each tool should only be used for one CHP. If more
                CHPs are relevant, you must aggregate energy amounts and
                emissions from multiple CHPs. Periods during which the CHP is
                operated in heat-only or electricity-only generation mode (i.e.
                periods during which only one of the two products was produced)
                should be excluded and assignment of fuels and emissions should
                be calculated separately.
              </div>
              <br />
              <div className={styles.ctitle}>
                1. Tool to calculate the emissions attributable to heat
                production in combined heat and power units (CHP){' '}
              </div>
              <br />
              <div className={styles.sDesc}>
                Please enter here the annual fuel input into the CHP unit, the
                net amount of heat produced and the net amount of electricity
                (or mechanical energy, where applicable) produced by the CHP.
              </div>
              <br />
              <Table
                id="toolTb1"
                size={'small'}
                dataSource={dataSource1}
                columns={columns1}
                pagination={false}
              />
              <br />
              <br />
              <div className={styles.ctitle}>
                2 Tool to calculate the emissions attributable to heat
                production in combined heat and power units (CHP)
              </div>

              <br />
              <Table
                id="toolTb2"
                size={'small'}
                dataSource={dataSource2}
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
            <ContentBox title={'2	Tool to calculate the carbon price due'}>
              <div className={styles.sDesc}>
                This tool aims to help you with the calculation of the carbon
                price due. Similar to the calculation of the specific embedded
                emissions in sheets D + E, please only enter the carbon price
                due and any rebate received in respect of the system boundaries
                of the production process. The results obtained here in columns
                L and M have to be manually entered into the respective fields
                in sheet "Summary_Products". The following conditions apply: -
                the carbon price used for each production process has to be
                converted into one common currency. - the system boundaries of
                carbon pricing have to be consistent with the boundaries of the
                production process and precursors. If the conditions above are
                not satisfied, this tool can only be used to support you with
                the calculation of the carbon price, but results cannot be used
                directly.
              </div>
              <br />
              <Table
                id="toolTb3"
                size={'small'}
                dataSource={[
                  {
                    d0: 'SE (total)',
                    d1: 'Specific direct + indirect emissions of the production process, i.e. excluding any embedded emissions from any precursors consumed in the process.',
                  },
                  {
                    d0: 'Share of emissions covered by the carbon price',
                    d1: 'Please enter here the share of the TOTAL (direct + indirect) specific emissions that are subject to carbon pricing. For instance, if only direct emissions are covered by a carbon pricing system, the share to be provided here would be exactly the share of the direct emissions of the total emissions.',
                  },
                  {
                    d0: 'Carbon price (CP) due',
                    d1: 'Please enter here the carbon price due per tonne of CO2e in the relevant currency. This value shall not include any rebate such as free allocation or financial compensation. It shall also not include any carbon price due for any precursors outside the production process to avoid double counting.',
                  },
                  {
                    d0: 'Amount of rebate (local currency)',
                    d1: 'Please enter here the rebate per tonne of CO2e covered by the rebate in the relevant currency. It shall also not include any rebate for any precursors outside the production process to avoid double counting.			',
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
              <br />
              <br />
              <Table
                id="toolTb4"
                size={'small'}
                dataSource={dataSource3}
                columns={columns3}
                pagination={false}
              />
            </ContentBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
