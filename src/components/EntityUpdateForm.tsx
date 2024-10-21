import React, { useState } from 'react';
import { Hotel, Room } from '../types';

interface EntityUpdateFormProps {
  entity: Room|Hotel;
  onSave: (updatedEntity:Room| Hotel) => void;
}

const EntityUpdateForm: React.FC<EntityUpdateFormProps> = ({ entity, onSave }) => {
  const [formData, setFormData] = useState(entity);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: typeof formData[name as keyof typeof formData] === 'number' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
  };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if ('name' in formData ) {
  //     onSave(formData as Hotel);
  //   } else if("number" in formData)  {
  //     onSave(formData as Room);
  //   }
  // };

  return (
    <form className="entity-update-form" onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div key={key} className="form-group">
          <label>{key}</label>
          <input
            type={typeof formData[key as keyof typeof formData] === 'number' ? 'number' : 'text'}
            name={key}
            value={String(formData[key as keyof typeof formData])}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Save</button>
    </form>
  );
};

export default EntityUpdateForm;
