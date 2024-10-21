import React from 'react';

interface CreateButtonProps {
  onClick: () => void;
}

const CreateButton: React.FC<CreateButtonProps> = ({ onClick }) => {
  return (
    <button className="create-button" onClick={onClick}>
      Create New
    </button>
  );
};

export default CreateButton;
