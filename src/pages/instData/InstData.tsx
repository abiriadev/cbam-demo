import React from 'react';
import styles from './InstData.module.scss';
import { Descriptions, Table } from 'antd';
import ContentBox from 'components/ContentBox/ContentBox';

const InstData = () => {
  const items1: any = [
    {
      key: '1',
      label: 'start',
      children: '2023.01.01',
    },
    ,
    {
      key: '1',
      label: 'end',
      children: '2023.12.31',
    },
  ];

  const items: any = [
    {
      key: '1',
      label: 'i.	Name of the installation (optional)',
      children: <div></div>,
    },
    {
      key: '2',
      label: 'ii.	Name of the installation (English name)',
      children: 'test',
    },
    {
      key: '3',
      label: 'iii.	Street, Number',
      children: '',
    },
    {
      key: '4',
      label: 'iv.	Economic activity',
      children: '',
    },
    {
      key: '5',
      label: 'v.	Post code',
      children: '',
    },
    {
      key: '6',
      label: 'vi.	P.O. Box',
      children: '',
    },
    {
      key: '7',
      label: 'vii.	City',
      children: '',
    },
    {
      key: '8',
      label: 'viii.	Country',
      children: '',
    },
    {
      key: '9',
      label: 'ix.	UNLOCODE',
      children: 'United States',
    },
    {
      key: '10',
      label: 'x.	Coordinates of the main emission source (latitude)',
      children: '',
    },
    {
      key: '11',
      label: 'xi.	Coordinates of the main emission source (longitude)',
      children: '',
    },
    {
      key: '12',
      label: 'xii.	Name of authorized representative',
      children: '',
    },
    {
      key: '13',
      label: 'xiii.	Email',
      children: '',
    },
    {
      key: '14',
      label: 'xiv.	Telephone',
      children: '',
    },
  ];

  const items3a: any = [
    {
      key: '1',
      label: 'i.	Company Name',
      children: <div></div>,
    },
    {
      key: '2',
      label: 'ii.	Street, Number',
      children: '',
    },
    {
      key: '3',
      label: 'iii.	City',
      children: '',
    },
    {
      key: '4',
      label: 'iv.	Postcode/ZIP',
      children: '',
    },
    {
      key: '5',
      label: 'v.	Country',
      children: '',
    },
  ];

  const items3b: any = [
    {
      key: '1',
      label: 'i.	Name',
      children: <div></div>,
    },
    {
      key: '2',
      label: 'ii.	Email address',
      children: '',
    },
    {
      key: '3',
      label: 'iii.	Telephone number',
      children: '',
    },
    {
      key: '4',
      label: 'iv.	Fax',
      children: '',
    },
  ];

  const items3c: any = [
    {
      key: '1',
      label: 'i.	Accreditation Member State',
      children: <div></div>,
    },
    {
      key: '2',
      label: 'ii.	Name of the national accreditation body',
      children: '',
    },
    {
      key: '3',
      label: 'iii.	Registration number issued by the Accreditation body',
      children: '',
    },
  ];

  const dataSource4 = [
    {
      id: 'G1',
      agc: 'Cement clinker',
      route: 'All production routes	',
    },
    {
      id: 'G2',
      agc: 'Cement',
      route: 'All production routes	',
    },
    {
      id: 'G3',
    },
    {
      id: 'G4',
    },
    {
      id: 'G5',
    },
    {
      id: 'G6',
    },
    {
      id: 'G7',
    },
    {
      id: 'G8',
    },
    {
      id: 'G9',
    },
    {
      id: 'G10',
    },
  ];

  const columns4 = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Aggregated goods category	',
      dataIndex: 'agc',
      key: 'agc',
    },
    {
      title: 'Route',
      dataIndex: 'route',
      key: 'route',
    },
    {
      title: 'Route1',
      dataIndex: 'route1',
      key: 'route1',
    },
    {
      title: 'Route2',
      dataIndex: 'route2',
      key: 'route2',
    },
    {
      title: 'Route3',
      dataIndex: 'route3',
      key: 'route3',
    },
    {
      title: 'Route4',
      dataIndex: 'route4',
      key: 'route4',
    },
    {
      title: 'Route5',
      dataIndex: 'route5',
      key: 'route5',
    },
    {
      title: 'Route6',
      dataIndex: 'route6',
      key: 'route6',
    },
  ];

  const dataSource5 = [
    {
      id: 'P1',
      productionProcess: 'Cement clinker',
      '1': 'Cement clinker',
    },
    {
      id: 'P2',
      productionProcess: 'Cement',
      '1': 'Cement',
    },
    {
      id: 'P3',
    },
    {
      id: 'P4',
    },
    {
      id: 'P5',
    },
    {
      id: 'P6',
    },
    {
      id: 'P7',
    },
    {
      id: 'P8',
    },
    {
      id: 'P9',
    },
    {
      id: 'P10',
    },
  ];

  const columns5 = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Production process',
      dataIndex: 'productionProcess',
      key: 'productionProcess',
    },
    {
      title: 'Included goods categories listed under (a)',
      children: [
        {
          title: '1',
          dataIndex: '1',
          key: '1',
        },
        {
          title: '2',
          dataIndex: '2',
          key: '2',
        },
        {
          title: '3',
          dataIndex: '3',
          key: '3',
        },
        {
          title: '4',
          dataIndex: '4',
          key: '4',
        },
        {
          title: '5',
          dataIndex: '5',
          key: '5',
        },
        {
          title: '6',
          dataIndex: '6',
          key: '6',
        },
      ],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Error Message',
      dataIndex: 'errorMsg',
      key: 'errorMsg',
    },
  ];

  const dataSource6 = [
    {
      id: 'PP1',
    },
    {
      id: 'PP2',
    },
    {
      id: 'PP3',
    },
    {
      id: 'PP4',
    },
    {
      id: 'PP5',
    },
    {
      id: 'PP6',
    },
    {
      id: 'PP7',
    },
    {
      id: 'PP8',
    },
    {
      id: 'PP9',
    },
    {
      id: 'PP10',
    },
  ];

  const columns6 = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Production process',
      dataIndex: 'productionProcess',
      key: 'productionProcess',
    },
    {
      title: 'Country code',
      dataIndex: 'countryCode',
      key: 'countryCode',
    },
    {
      title: 'Route1',
      dataIndex: 'route1',
      key: 'route1',
    },
    {
      title: 'Route2',
      dataIndex: 'route2',
      key: 'route2',
    },
    {
      title: 'Route3',
      dataIndex: 'route3',
      key: 'route3',
    },
    {
      title: 'Route4',
      dataIndex: 'route4',
      key: 'route4',
    },
    {
      title: 'Route5',
      dataIndex: 'route5',
      key: 'route5',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Error Message',
      dataIndex: 'errorMsg',
      key: 'errorMsg',
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
              General information, production processes & purchased precursors
            </div>
            <ContentBox title={'1. Reporting period'}>
              <div className={styles.sDesc}>
                Please enter here the starting date and the end date of the
                reporting period to which all data entered in this communication
                template refers to. For example, if you want to report data
                based on the whole calendar year 2023, the starting date would
                be 1.1.2023 and the end date 31.12.2023. It is important that
                all data entered in this template (embedded emissions, carbon
                price due, product properties, etc.) all relate to that same
                reporting period entered above.
              </div>
              <br />
              <Descriptions
                className="instDtTb1"
                bordered
                size="small"
                column={1}
                items={items1}
                labelStyle={{
                  width: '55%',
                }}
              />
            </ContentBox>

            <ContentBox title={'2.	About the installation'}>
              <Descriptions
                className="instDtTb2"
                bordered
                size="small"
                column={1}
                items={items}
                labelStyle={{
                  width: '55%',
                }}
              />
            </ContentBox>

            <ContentBox
              title={
                '3	Verifier of the report – only if available and not required during transitional period'
              }
            >
              <Descriptions
                className="instDtTb3"
                bordered
                title="(a)	Name and address of the verifier of this report"
                size="small"
                column={1}
                items={items3a}
                labelStyle={{ width: '55%' }}
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
            <ContentBox>
              <div className={styles.ctitle}>
                b) Authorised representative of the verifier
              </div>
              <br />
              <div className={styles.sDesc}>
                The nominated person should be familiar with this report.
                Ideally it is the lead verifier involved with this report.
              </div>

              <br />
              <Descriptions
                className="instDtTb3"
                bordered
                size="small"
                column={1}
                items={items3b}
                labelStyle={{ width: '55%' }}
              />
              <br />
              <Descriptions
                className="instDtTb3"
                bordered
                title="(c)	Information about the verifier's accreditation"
                size="small"
                column={1}
                items={items3c}
                labelStyle={{ width: '55%' }}
              />
            </ContentBox>

            <ContentBox
              title={
                '4. Aggregated goods categories and relevant production processes'
              }
            >
              <div className={styles.ctitle}>
                (a) List of aggregated goods categories, relevant precursors and
                corresponding production routes
              </div>
              <br />
              <div className={styles.sDesc}>
                Please list here ALL aggregated goods categories, including any
                relevant precursor types produced WITHIN the installation. Where
                relevant, please list all production routes through which the
                aggregated goods are produced.{' '}
              </div>
              <br />
              <Table
                size={'small'}
                dataSource={dataSource4}
                columns={columns4}
                pagination={false}
                id="instDtTb4"
              />
              <br />
              <div className={styles.sDesc}>
                For information, emissions from the following precursors are
                relevant for the embedded emissions of the types of aggregated
                goods listed above. Where those precursors are actually relevant
                for your production processes, please make sure those are also
                listed either in the table above (if produced within your
                installation) or under chapter 5 "purchased precursors" below
                (where produced in other installations).
              </div>
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
            <ContentBox>
              <div className={styles.ctitle}>
                (b) Relevant production processes
              </div>
              <br />
              <div className={styles.sDesc}>
                Based on the list under (a), please list here only aggregated
                goods categories for which you want to establish distinct
                "production process" and assign all aggregated goods categories
                and relevant precursors that will be covered by its system
                boundary.
                <br />
                Example: if "ammonia" and "nitric acid" are both produced in
                your installation, you may either create a separate production
                process for each of these good types, or report them combined
                under 'nitric acid' under a 'bubble approach'. In the case of
                the latter, please select as of column F which other process you
                want to include under this 'bubble approach'. Note: the 'bubble
                approach' is only allowed if all ammonia produced is processed
                into nitric acid. If parts of the ammonia are exported from the
                installation, two separate production processes have to be
                selected here.
              </div>
              <br />
              <Table
                size={'small'}
                dataSource={dataSource5}
                columns={columns5}
                pagination={false}
                id="instDtTb5"
              />
            </ContentBox>

            <ContentBox title={'5.	Purchased precursors	'}>
              <div className={styles.sDesc}>
                Please list here all precursors that are produced OUTSIDE the
                installation (e.g. purchased) and consumed within the
                installation. <br /> Please also list the country in which the
                relevant precursor was produced (see sheet "c_CodeLists" to find
                the correct country codes) and the relevant production routes,
                if known.
              </div>
              <br />
              <Table
                size={'small'}
                dataSource={dataSource6}
                columns={columns6}
                pagination={false}
                id="instDtTb6"
              />
            </ContentBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstData;
