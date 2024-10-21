import React from 'react';

interface AdminSearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

const AdminSearchBar: React.FC<AdminSearchBarProps> = ({ placeholder, onSearch }) => {
  return (
    <div className="admin-search-bar">
      <input 
        type="text" 
        placeholder={placeholder} 
        onChange={(e) => onSearch(e.target.value)} 
      />
    </div>
  );
};

export default AdminSearchBar;
