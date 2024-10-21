import { Link } from 'react-router-dom';
const LeftNavigation: React.FC = () => {

  return (
    <div className={`left-nav `}>
      <nav>
        <ul>
          <li className='left-nav-item'><Link to="/admin/hotels">Hotels</Link></li>
          <li className='left-nav-item'><Link to="/admin/rooms">Rooms</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftNavigation;