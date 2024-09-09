import React from 'react';
import Select from '../common/components/Select';

const SchemaDropdown = ({ value, options, onChange }) => {
  return (
    <Select value={value} options={options} onChange={onChange} />
  );
};

export default SchemaDropdown;
