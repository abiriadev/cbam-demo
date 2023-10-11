import ContentBox from 'components/ContentBox/ContentBox';
import React from 'react';
import styles from './SummaryProcesses.module.scss';
import { Table } from 'antd';

const Tab3 = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <div
          style={{
            marginRight: '10px',
          }}
        >
          <ContentBox>
            <div className={styles.sDesc}>
              The following abbreviations are used in the tables below
            </div>

            <br />
            <Table
              id="cal"
              size={'small'}
              dataSource={[
                {
                  d0: 'General aspects	',
                  d1: `The term 'specific' of all elements below is to be understood as being expressed per unit of good (usually tonnes) of the production process in consideration. 													`,
                },
                {
                  d0: '',
                  d1: `Example: a precursor has specific embedded emissions of 0,8 tonnes of CO2e per tonne. The 'mass share' is 0,3 tonnes of precursor consumed per tonne of production from the relevant 'production process'. Under the block of the relevant 'production process, the value for 'SEE' for this precursor will therefore be displayed as 0,24 tonnes CO2e per tonne.													`,
                },
                {
                  d0: 'Mass share	',
                  d1: `This is the specific consumption of each precursor per unit of products produced by the relevant 'production process'.													`,
                },
                {
                  d0: '(Share of) Default value	',
                  d1: `This is relevant for purchased precursors and indicates whether the embedded direct emissions are determined based on default values ("TRUE") or actual measurements ("FALSE"). For the whole process, this indicator will calculate the share of embedded emissions determined by default values.													`,
                },
                {
                  d0: 'SEE (direct)	',
                  d1: `Specific embedded direct emissions of the production process, i.e. including any embedded emissions from any precursors consumed in the process.													`,
                },
                {
                  d0: 'SEE (indirect)	',
                  d1: `Specific embedded indirect emissions of the production process, i.e. including any embedded indirect emissions from any precursors consumed in the process.													`,
                },
                {
                  d0: 'SEE (total)	',
                  d1: `Total (direct + indirect) specific embedded emissions of the production process, i.e. including any embedded indirect emissions from any precursors consumed in the process.													`,
                },
                {
                  d0: 'EmbEm (direct)	',
                  d1: `Embedded direct emissions of the production process, i.e. including any embedded emissions from any precursors consumed in the process.													`,
                },
                {
                  d0: 'EmbEm (indirect)	',
                  d1: `Embedded indirect emissions of the production process, i.e. including any embedded indirect emissions from any precursors consumed in the process.													`,
                },
                {
                  d0: 'EmbEm (total)	',
                  d1: `Total (direct + indirect) specific embedded emissions of the production process, i.e. including any embedded indirect emissions from any precursors consumed in the process.													`,
                },
                {
                  d0: 'Source of electricity EF	',
                  d1: `The source or method based on which the electricity emission factor (EF) was determined for the relevant production process or precursor.													`,
                },
                {
                  d0: '',
                  d2: 'D.2.1',
                  d1: `CO2 emission factor based on specific default values  													
            `,
                },
                {
                  d0: '',
                  d2: 'D.2.2',
                  d1: `CO2 emission factor based on alternative default value 													
            `,
                },

                {
                  d0: '',
                  d2: 'D.2.3',
                  d1: `CO2 emission factor based on reliable data demonstrated by the importer													
            `,
                },
                {
                  d0: '',
                  d2: 'D.2.4',
                  d1: `CO2 emission factor based on actual CO2 emissions of the installation 													
            `,
                },
                {
                  d0: '',
                  d2: 'Mix',
                  d1: `Where the electricity is not predominantly obtained from one source or the EF by one of the above sources, the EF is determined as a mix of the methods above.													
            `,
                },
                {
                  d0: 'Specific electricity',
                  d1: `Specific electricity consumption within the production process, excluding any electricity embedded in purchased precursors.													
            `,
                },
                {
                  d0: 'Country code',
                  d1: `This is the country in which the relevant precursor is produced, where imported from outside the own installation.													
            `,
                },
                {
                  d0: 'CP due (per t or MWh)',
                  d1: `This information is taken from the "tool to calculate the carbon price due" in sheet "F_Tools", where relevant.													
            `,
                },
                {
                  d0: 'Rebate (per t or MWh)',
                  d1: `This information is taken from the "tool to calculate the carbon price due" in sheet "F_Tools", where relevant.													
            `,
                },
              ]}
              columns={[
                {
                  title: '',
                  dataIndex: 'd0',
                },
                {
                  title: '',
                  dataIndex: 'd2',
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
              id="summmaryProcessTB6"
              size={'small'}
              dataSource={[
                {
                  idx: <b>1</b>,
                  d0: <b>test</b>,
                  d1: <b>Aggregated goods category</b>,
                  d2: (
                    <b>
                      Mass share
                      <br /> t/t
                    </b>
                  ),
                  d3: (
                    <b>
                      (Share of)
                      <br /> Default
                      <br /> value
                    </b>
                  ),
                  d4: (
                    <b>
                      SEE (direct)
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
                  d6: (
                    <b>
                      SEE (total)
                      <br />
                      tCO2e/t
                    </b>
                  ),
                  d7: (
                    <b>
                      EmbEm (direct)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d8: (
                    <b>
                      EmbEm (indirect)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d9: (
                    <b>
                      EmbEm (total)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d10: (
                    <b>
                      Source of <br />
                      electricity <br /> EF
                    </b>
                  ),
                  d11: (
                    <b>
                      Specific electricity
                      <br />
                      MWh/t
                    </b>
                  ),
                  d12: (
                    <b>
                      Country <br />
                      code
                    </b>
                  ),
                  d13: (
                    <b>
                      CP due (per t <br /> or MWh){' '}
                    </b>
                  ),
                  d14: (
                    <b>
                      Rebate (per t <br />
                      or MWh)
                    </b>
                  ),
                },
                {
                  d0: 'Total production process',
                  d1: 'Cement clinker',
                  d2: '-',
                  d3: '0%',
                  d4: '0.827',
                  d5: '0.054',
                  d6: '0.881',
                  d7: '1,037,310',
                  d8: '67,952',
                  d9: '1,105,262',
                  d10: '-',
                  d11: '0.065',
                  d12: '-',
                  d13: '5.00',
                  d14: '4.00',
                },
                {
                  d0: 'test',
                  d1: 'Cement clinker',
                  d2: '1.000',
                  d3: '-',
                  d4: '0.827',
                  d5: '0.054',
                  d6: '0.881',
                  d7: '1,037,310',
                  d8: '67,952',
                  d9: '1,105,262',
                  d10: 'D.2.1',
                  d11: '0.065',
                  d12: '-',
                  d13: '5.00',
                  d14: '4.00',
                },
                { idx: 1 },
                { idx: 2 },
                { idx: 3 },
                { idx: 4 },
                { idx: 5 },
              ]}
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
                {
                  title: '',
                  dataIndex: 'd10',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd11',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd12',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd13',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd14',
                  align: 'center',
                },
              ]}
              pagination={false}
            />
            <br />

            <Table
              id="summmaryProcessTB7"
              size={'small'}
              dataSource={[
                {
                  idx: <b>2</b>,
                  d0: <b>test 2</b>,
                  d1: <b>Aggregated goods category</b>,
                  d2: (
                    <b>
                      Mass share
                      <br /> t/t
                    </b>
                  ),
                  d3: (
                    <b>
                      (Share of)
                      <br /> Default
                      <br /> value
                    </b>
                  ),
                  d4: (
                    <b>
                      SEE (direct)
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
                  d6: (
                    <b>
                      SEE (total)
                      <br />
                      tCO2e/t
                    </b>
                  ),
                  d7: (
                    <b>
                      EmbEm (direct)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d8: (
                    <b>
                      EmbEm (indirect)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d9: (
                    <b>
                      EmbEm (total)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d10: (
                    <b>
                      Source of <br />
                      electricity <br /> EF
                    </b>
                  ),
                  d11: (
                    <b>
                      Specific electricity
                      <br />
                      MWh/t
                    </b>
                  ),
                  d12: (
                    <b>
                      Country <br />
                      code
                    </b>
                  ),
                  d13: (
                    <b>
                      CP due (per t <br /> or MWh){' '}
                    </b>
                  ),
                  d14: (
                    <b>
                      Rebate (per t <br />
                      or MWh)
                    </b>
                  ),
                },
                {
                  d0: 'Total production process',
                  d1: 'Cement clinker',
                  d2: '-',
                  d3: '0%',
                  d4: '0.827',
                  d5: '0.054',
                  d6: '0.881',
                  d7: '1,037,310',
                  d8: '67,952',
                  d9: '1,105,262',
                  d10: '-',
                  d11: '0.065',
                  d12: '-',
                  d13: '5.00',
                  d14: '4.00',
                },
                {
                  d0: 'test',
                  d1: 'Cement clinker',
                  d2: '1.000',
                  d3: '-',
                  d4: '0.827',
                  d5: '0.054',
                  d6: '0.881',
                  d7: '1,037,310',
                  d8: '67,952',
                  d9: '1,105,262',
                  d10: 'D.2.1',
                  d11: '0.065',
                  d12: '-',
                  d13: '5.00',
                  d14: '4.00',
                },
                { idx: 1 },
                { idx: 2 },
                { idx: 3 },
                { idx: 4 },
                { idx: 5 },
              ]}
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
                {
                  title: '',
                  dataIndex: 'd10',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd11',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd12',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd13',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd14',
                  align: 'center',
                },
              ]}
              pagination={false}
            />
            <br />

            <Table
              id="summmaryProcessTB8"
              size={'small'}
              dataSource={[
                {
                  idx: <b>3</b>,
                  d0: <b>test 3</b>,
                  d1: <b>Aggregated goods category</b>,
                  d2: (
                    <b>
                      Mass share
                      <br /> t/t
                    </b>
                  ),
                  d3: (
                    <b>
                      (Share of)
                      <br /> Default
                      <br /> value
                    </b>
                  ),
                  d4: (
                    <b>
                      SEE (direct)
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
                  d6: (
                    <b>
                      SEE (total)
                      <br />
                      tCO2e/t
                    </b>
                  ),
                  d7: (
                    <b>
                      EmbEm (direct)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d8: (
                    <b>
                      EmbEm (indirect)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d9: (
                    <b>
                      EmbEm (total)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d10: (
                    <b>
                      Source of <br />
                      electricity <br /> EF
                    </b>
                  ),
                  d11: (
                    <b>
                      Specific electricity
                      <br />
                      MWh/t
                    </b>
                  ),
                  d12: (
                    <b>
                      Country <br />
                      code
                    </b>
                  ),
                  d13: (
                    <b>
                      CP due (per t <br /> or MWh){' '}
                    </b>
                  ),
                  d14: (
                    <b>
                      Rebate (per t <br />
                      or MWh)
                    </b>
                  ),
                },

                { idx: 1 },
                { idx: 2 },
                { idx: 3 },
                { idx: 4 },
                { idx: 5 },
              ]}
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
                {
                  title: '',
                  dataIndex: 'd10',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd11',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd12',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd13',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd14',
                  align: 'center',
                },
              ]}
              pagination={false}
            />
            <br />

            <Table
              id="summmaryProcessTB9"
              size={'small'}
              dataSource={[
                {
                  idx: <b>4</b>,
                  d0: <b>test4</b>,
                  d1: <b>Aggregated goods category</b>,
                  d2: (
                    <b>
                      Mass share
                      <br /> t/t
                    </b>
                  ),
                  d3: (
                    <b>
                      (Share of)
                      <br /> Default
                      <br /> value
                    </b>
                  ),
                  d4: (
                    <b>
                      SEE (direct)
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
                  d6: (
                    <b>
                      SEE (total)
                      <br />
                      tCO2e/t
                    </b>
                  ),
                  d7: (
                    <b>
                      EmbEm (direct)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d8: (
                    <b>
                      EmbEm (indirect)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d9: (
                    <b>
                      EmbEm (total)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d10: (
                    <b>
                      Source of <br />
                      electricity <br /> EF
                    </b>
                  ),
                  d11: (
                    <b>
                      Specific electricity
                      <br />
                      MWh/t
                    </b>
                  ),
                  d12: (
                    <b>
                      Country <br />
                      code
                    </b>
                  ),
                  d13: (
                    <b>
                      CP due (per t <br /> or MWh){' '}
                    </b>
                  ),
                  d14: (
                    <b>
                      Rebate (per t <br />
                      or MWh)
                    </b>
                  ),
                },

                { idx: 1 },
                { idx: 2 },
                { idx: 3 },
                { idx: 4 },
                { idx: 5 },
              ]}
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
                {
                  title: '',
                  dataIndex: 'd10',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd11',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd12',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd13',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd14',
                  align: 'center',
                },
              ]}
              pagination={false}
            />
            <br />

            <Table
              id="summmaryProcessTB10"
              size={'small'}
              dataSource={[
                {
                  idx: <b>5</b>,
                  d0: <b>text 5</b>,
                  d1: <b>Aggregated goods category</b>,
                  d2: (
                    <b>
                      Mass share
                      <br /> t/t
                    </b>
                  ),
                  d3: (
                    <b>
                      (Share of)
                      <br /> Default
                      <br /> value
                    </b>
                  ),
                  d4: (
                    <b>
                      SEE (direct)
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
                  d6: (
                    <b>
                      SEE (total)
                      <br />
                      tCO2e/t
                    </b>
                  ),
                  d7: (
                    <b>
                      EmbEm (direct)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d8: (
                    <b>
                      EmbEm (indirect)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d9: (
                    <b>
                      EmbEm (total)
                      <br />
                      tCO2e
                    </b>
                  ),
                  d10: (
                    <b>
                      Source of <br />
                      electricity <br /> EF
                    </b>
                  ),
                  d11: (
                    <b>
                      Specific electricity
                      <br />
                      MWh/t
                    </b>
                  ),
                  d12: (
                    <b>
                      Country <br />
                      code
                    </b>
                  ),
                  d13: (
                    <b>
                      CP due (per t <br /> or MWh){' '}
                    </b>
                  ),
                  d14: (
                    <b>
                      Rebate (per t <br />
                      or MWh)
                    </b>
                  ),
                },

                { idx: 1 },
                { idx: 2 },
                { idx: 3 },
                { idx: 4 },
                { idx: 5 },
              ]}
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
                {
                  title: '',
                  dataIndex: 'd10',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd11',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd12',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd13',
                  align: 'center',
                },
                {
                  title: '',
                  dataIndex: 'd14',
                  align: 'center',
                },
              ]}
              pagination={false}
            />
            <br />
          </ContentBox>
        </div>
      </div>
    </div>
  );
};

export default Tab3;
