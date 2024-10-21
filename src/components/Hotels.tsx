import React, { useState } from 'react'
import AdminGrid from './AdminGrid';
import { Hotel, Room } from '../types';
import { hotels } from '../mockData';
import AdminSearchBar from './AdminSearchBar';
import CreateButton from './CreateButton';
import EntityUpdateForm from './EntityUpdateForm';

interface prop{
data:Hotel[];
setData:React.Dispatch<React.SetStateAction<Hotel[]>>;
}
const Hotels: React.FC<prop> = () => {
  const [data, setData] = useState<Hotel[]>([...hotels]);
  const [filteredData, setFilteredData] = useState<Hotel[]>([...hotels]);
  const [selectedEntity, setSelectedEntity] = useState<Hotel | null>(null);
  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredData([...data]);
    } else {
      const lowerQuery = query.toLowerCase();
      setFilteredData(
        data.filter(
          item =>
            ("name" in item && item.name.toLowerCase().includes(lowerQuery))
        )
      );
    }
  };

  const handleDelete = (id: number) => {
    setData(prev => prev.filter(item => item.id !== id));
    setFilteredData(prev => prev.filter(item => item.id !== id));
  };
  const handleCreateNew = () => {

    setSelectedEntity({
      id: Date.now(),
      name: '',
      location: '',
      starRating: 0,
      description: '',
      amenities: [],
      gallery: {
        image1: '',
        image2: '',
        image3: '',
        image4: ''
      },
      rooms: []
    });
  }


  const handleSave = (updatedEntity: Hotel | Room) => {
    if ('name' in updatedEntity) {
      if (updatedEntity.id in data.map(item => item.id)) {
        setData(prev => prev.map(item => item.id === updatedEntity.id ? updatedEntity : item));
      } else {
        setData(prev => [...prev, updatedEntity]);
      }
    }
    setSelectedEntity(null);
  };
  console.log(data)

  return (
    <div>
      <AdminSearchBar placeholder="search..." onSearch={handleSearch} />
      <CreateButton onClick={handleCreateNew} />
      {selectedEntity && <EntityUpdateForm entity={selectedEntity} onSave={handleSave} />}
      <AdminGrid data={filteredData} columns={['Name', 'Location', 'starRating']} onDelete={handleDelete} />
    </div>
  )
}

export default Hotels