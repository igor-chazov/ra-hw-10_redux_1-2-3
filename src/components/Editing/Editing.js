import React from 'react';
import ServiceAdd from './ServiceAdd/ServiceAdd';
import ServiceFilter from './ServiceFilter/ServiceFilter';
import ServiceList from './ServiceList/ServiceList';

function Editing() {
  return (
    <div className="Service">
      <ServiceFilter />
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default Editing;
