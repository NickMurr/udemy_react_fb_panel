import React from 'react';
import Sidebar from './Sidebar';
import Clients from '../clients/Clients';

const Dashboard = () => (
  <div className="row">
    <div className="col-md-10">
      <Clients />
    </div>
    <div className="col-md-2">
      <Sidebar />
    </div>
  </div>
);

export default Dashboard;
