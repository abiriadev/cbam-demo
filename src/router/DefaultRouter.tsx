import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import AuthRoute from '../route/AuthRoute';
import Default from '../pages/default/Default';
import DppLayout from 'layouts/DppLayout';
import DppInitLayout from 'layouts/DppInitLayout';
import Start from '../pages/start/Start';
import InstData from 'pages/instData/InstData';
import EmissionsEnergy from 'pages/emissions-energy/EmissionsEnergy';
import EmInst from 'pages/emInst/EmInst';
import Process from 'pages/process/Process';

import DefaultPage from 'pages/DefaultPage';

import PurchPrec from 'pages/purchprec/PurchPrec';
import Tool from 'pages/tool/Tool';
import SummaryProcesses from 'pages/summaryProcesses/SummaryProcesses';
import SummaryProducts from 'pages/summaryProducts/SummaryProducts';
import SummaryCommunication from 'pages/summaryCommunication/SummaryCommunication';

export function DefaultRouter() {
  return (
    <Routes>
      <Route element={<DppInitLayout />}>
        <Route path="/" element={<Start />} />
        <Route path="/start" element={<Start />} />
      </Route>
      <Route element={<DppLayout />}>
        <Route path="/instData" element={<InstData />} />
        <Route path="/emInst" element={<EmInst />} />
        <Route path="/emissions-energy" element={<EmissionsEnergy />} />
        <Route path="/precesses" element={<Process />} />
        <Route path="/purchprec" element={<PurchPrec />} />
        <Route path="/tools" element={<Tool />} />
        <Route path="/summaryProcesses" element={<SummaryProcesses />} />
        <Route path="/summaryProducts" element={<SummaryProducts />} />
        <Route
          path="/summaryCommunication"
          element={<SummaryCommunication />}
        />

        <Route path="*" element={<DefaultPage />} />
      </Route>
    </Routes>
  );
}

export default DefaultRouter;
