import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import AuthRoute from '../route/AuthRoute';
import Default from '../pages/default/Default';
import DppLayout from 'layouts/DppLayout';
import DppInitLayout from 'layouts/DppInitLayout';
import Start from '../pages/start/Start';
import Overview from 'pages/overview/Overview';
import GeneralBattery from 'pages/generalBattery/GeneralBattery';
import CircularityAndResourceEfficiency from 'pages/circularity-and-resource-efficiency/CircularityAndResourceE';
import SupplyChain from 'pages/supply-chain-due-diligentcet/SupplyChainDueDiligentcet';
import CarbonFootpint from 'pages/carbon-footprint/CarbonFootprint';
import ComplianceLabelsCertirications from 'pages/complianceLabelsCertirications/ComplianceLabelsCertirications';
import PerformanceAndDurability from 'pages/performance-durability/PerformanceAndDurability';
import MaterialsComposition from 'pages/materialsComposition/MaterialsComposition';
import DefaultPage from 'pages/DefaultPage';
import Qr from 'pages/qr/Qr';
export function DefaultRouter() {
  return (
    <Routes>
      <Route element={<DppInitLayout />}>
        <Route path="/start" element={<Start />} />
        <Route path="/qr" element={<Qr />} />
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
        <Route
          path="/performance-durability"
          element={<PerformanceAndDurability />}
        />
        <Route
          path="/materials-composition"
          element={<MaterialsComposition />}
        />
        <Route path="*" element={<DefaultPage />} />
      </Route>
    </Routes>
  );
}

export default DefaultRouter;
