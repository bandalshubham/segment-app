import React, { useState } from 'react';
import SchemaDropdown from './SchemaDropdown';
import Input from '../common/components/Input';
import Button from '../common/components/Button';

const schemaOptions = [
  { label: 'First name', value: 'first_name' },
  { label: 'Last name', value: 'last_name' },
  { label: 'Gender', value: 'gender' },
  { label: 'Age', value: 'age' },
  { label: 'Account Name', value: 'account_name' },
  { label: 'City', value: 'city' },
  { label: 'State', value: 'state' },
];

const SegmentForm = ({ onSave }) => {
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [availableSchemas, setAvailableSchemas] = useState(schemaOptions);

  const handleSchemaChange = (index, value) => {
    const newSelectedSchemas = [...selectedSchemas];
    newSelectedSchemas[index] = value;
    setSelectedSchemas(newSelectedSchemas);

    const remainingSchemas = schemaOptions.filter(
      (option) => !newSelectedSchemas.includes(option.value)
    );
    setAvailableSchemas(remainingSchemas);
  };

  const addNewSchema = () => {
    setSelectedSchemas([...selectedSchemas, '']);
  };

  const handleSaveSegment = () => {
    const schemaData = selectedSchemas.map((schema) => {
      const option = schemaOptions.find((opt) => opt.value === schema);
      return { [schema]: option?.label };
    });

    const segmentData = {
      segment_name: segmentName,
      schema: schemaData,
    };

    onSave(segmentData);
  };

  return (
    <div>
      <Input
        value={segmentName}
        onChange={setSegmentName}
        placeholder="Name of the segment"
      />
      <div className="schema-container">
        {selectedSchemas.map((schema, index) => (
          <SchemaDropdown
            key={index}
            value={schema}
            options={availableSchemas}
            onChange={(value) => handleSchemaChange(index, value)}
          />
        ))}
      </div>
      <Button onClick={addNewSchema}>+ Add new schema</Button>
      <Button onClick={handleSaveSegment}>Save the Segment</Button>
    </div>
  );
};

export default SegmentForm;
