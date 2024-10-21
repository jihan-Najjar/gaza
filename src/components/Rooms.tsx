  import React, { useState } from 'react'
  import AdminGrid from './AdminGrid'
  import { Hotel, Room } from '../types';
  import { rooms } from '../mockData';
  import AdminSearchBar from './AdminSearchBar';
  import CreateButton from './CreateButton';
  import EntityUpdateForm from './EntityUpdateForm';
  interface prop{
    data:Room[];
    setData:React.Dispatch<React.SetStateAction<Room[]>>;
    }
  const Rooms: React.FC<prop> = ({data,setData}) => {
    // const [data, setData] = useState<Room[]>([...rooms]);
    const [selectedEntity, setSelectedEntity] = useState<Room | null>(null);
    const handleSearch = (query: string) => {
      if (!query) {
        setData([...rooms]);
      } else {
        const lowerQuery = query.toLowerCase();
        setData(
          data.filter(
            item =>
              ("number" in item && item.number.toLowerCase().includes(lowerQuery))
          )
        );
      }
    };
    const handleDelete = (id: number) => {
      setData(prev => prev.filter(item => item.id !== id));
    };
    const handleCreateNew = () => {
      setSelectedEntity({
        id: Date.now(),
        hotelId: 0,
        number: '',
        type: '',
        starRating: 0,
        capacity: { adults: 0, children: 0 },
        price: 0,
        amenities: [],
        gallery: {
          image1: '',
          image2: '',
          image3: '',
          image4: ''
        },
        availabilityDates: []
      });
    }
    const handleSave = (updatedEntity: Room | Hotel) => {
      if ('number' in updatedEntity) {
        if (updatedEntity.id in data.map(item => item.id)) {
          setData(prev => prev.map(item => item.id === updatedEntity.id ? updatedEntity : item));
        } else {
          setData(prev => [...prev, updatedEntity]);
        }
      }
      setSelectedEntity(null);
    };
    return (
      <div>
        <AdminSearchBar placeholder="search..." onSearch={handleSearch} />
        <CreateButton onClick={handleCreateNew} />
        {selectedEntity && <EntityUpdateForm entity={selectedEntity} onSave={handleSave} />}
        <AdminGrid data={data} columns={['Number', 'Type', 'starRating', 'Capacity', 'Price']} onDelete={handleDelete} />
      </div>
    )
  }

  export default Rooms