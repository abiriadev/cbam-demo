import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import AuthRoute from '../route/AuthRoute';
import Default from '../pages/default/Default';
import DppLayout from 'layouts/DppLayout';
import DppInitLayout from 'layouts/DppInitLayout';
import QrReader from '../pages/qr/QrReader';
import Overview from 'pages/overview/Overview';
import GeneralBattery from 'pages/generalBattery/GeneralBattery';
import CircularityAndResourceEfficiency from 'pages/circularity-and-resource-efficiency/CircularityAndResourceE';
import SupplyChain from 'pages/supply-chain-due-diligentcet/SupplyChainDueDiligentcet';
import CarbonFootpint from 'pages/carbon-footprint/CarbonFootprint';
import ComplianceLabelsCertirications from 'pages/complianceLabelsCertirications/ComplianceLabelsCertirications';

export function DefaultRouter() {
  return (
    <Routes>
      <Route element={<DppInitLayout />}>
        <Route path="/qr" element={<QrReader />} />
      </Route>
      <Route element={<DppLayout />}>
        <Route path="/overview" element={<Overview />} />
        <Route
          path="/circularity-and-resource-efficiency"
          element={<CircularityAndResourceEfficiency />}
        />
        <Route path="/general-battery" element={<GeneralBattery />} />
        <Route path="/supply-chain-due-diligentcet" element={<SupplyChain />} />
        <Route path="/carbon-footprint" element={<CarbonFootpint />} />
        <Route
          path="/compliance-labels-certirications"
          element={<ComplianceLabelsCertirications />}
        />
      </Route>
    </Routes>
  );
}

export default DefaultRouter;
