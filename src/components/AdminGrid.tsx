// // import React from 'react';

// // interface AdminGridProps {
// //   data: any[]; // Adjust this type according to your data structure (e.g., Hotel[], Room[])
// //   columns: string[];
// //   onDelete: (id: number) => void;
// // }

// // const AdminGrid: React.FC<AdminGridProps> = ({ data, columns, onDelete }) => {
// //   return (
// //     <table className="admin-grid">
// //       <thead>
// //         <tr>
// //           {columns.map((col) => (
// //             <th key={col}>{col}</th>
// //           ))}
// //           <th>Actions</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {data.map((row) => (
// //           <tr key={row.id} onClick={() => alert('Edit Form')}>
// //             {columns.map((col) => (
// //               <td key={col}>{row[col.toLowerCase()]}</td>
// //             ))}
// //             <td>
// //               <button onClick={(e) => {e.stopPropagation(); onDelete(row.id);}}>Delete</button>
// //             </td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );
// // };

// // export default AdminGrid;
// import React from 'react';
// import { Hotel, Room } from '../types';

// interface AdminGridProps {
//   data: (Hotel | Room)[];
//   columns: string[];
//   onDelete: (id: number) => void;
// }

// const AdminGrid: React.FC<AdminGridProps> = ({ data, columns, onDelete }) => {
//   console.log(data)
//   return (
//     <table className="admin-grid">
//       <thead>
//         <tr>
//           {columns.map((col) => (
//             <th key={col}>{col}</th>
//           ))}
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row) => (
//           <tr key={row.id} onClick={() => console.log('Edit Form for:', row.id)}>
//             {columns.map((col) => {
//               if (col === 'Capacity' && 'capacity' in row) {
//                 // Special handling for Capacity field in Room
//                 const { adults, children } = (row as Room).capacity;
//                 return <td key={col}>{`Adults: ${adults}, Children: ${children}`}</td>;
              
//               }
//               const normalizedCol = col.replace(/\s+/g, '').toLowerCase();

//               return <td key={col}>{(row as any)[normalizedCol] !== undefined ? (row as any)[normalizedCol] : 'N/dA'}</td>;
          
//               // Handle other fields based on row type
//               // return <td key={col}>{(row as any)[col.toLowerCase()] || 'N/A'}</td>;
//             })}
//             <td>
//               <button onClick={(e) => { e.stopPropagation(); onDelete(row.id); }}>
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default AdminGrid;import React from 'react';

// import { Hotel, Room } from '../types';

// interface AdminGridProps {
//   data: (Hotel | Room)[];
//   columns: string[];
//   onDelete: (id: number) => void;
// }

// const AdminGrid: React.FC<AdminGridProps> = ({ data, columns, onDelete }) => {
  
//   return (
//     <table className="admin-grid">
//       <thead>
//         <tr>
//           {columns.map((col) => (
//             <th key={col}>{col}</th>
//           ))}
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row) => (
//           <tr key={row.id} onClick={() => console.log('Edit Form for:', row.id)}>
//             {columns.map((col) => {
//               if (col === 'Capacity' && 'capacity' in row) {
//                 // Special handling for Capacity field in Room
//                 const { adults, children } = (row as Room).capacity;
//                 return <td key={col}>{`Adults: ${adults}, Children: ${children}`}</td>;
//               }

//               // Normalize column name
//               const normalizedCol = col.toLowerCase().replace(/\s+/g, '');

//               // Determine if the row is a Hotel or Room and access the appropriate field
//               let cellValue: any;
//               if (row && normalizedCol in row) {
//                 cellValue = (row as any)[normalizedCol];
//                 console.log('Normalized Column:', normalizedCol);
// console.log('Cell Value:', cellValue);

//               } else {
//                 cellValue = 'N/A'; // Default value if not found
//                 console.log('Normalized Column:', normalizedCol);
// console.log('Cell Value:', cellValue);

//               }

//               return (
//                 <td key={col}>
//                   {cellValue !== undefined && cellValue !== null ? cellValue : 'N/A'}
//                 </td>
//               );
//             })}
//             <td>
//               <button onClick={(e) => { e.stopPropagation(); onDelete(row.id); }}>
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default AdminGrid;
import React from 'react';
import { Hotel, Room } from '../types';

interface AdminGridProps {
  data: (Hotel | Room)[];
  columns: string[];
  onDelete: (id: number) => void;
}

const AdminGrid: React.FC<AdminGridProps> = ({ data, columns, onDelete }) => {
  return (
    <table className="admin-grid">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} onClick={() => console.log('Edit Form for:', row.id)}>
            {columns.map((col) => {
              const normalizedCol = col.toLowerCase().replace(/\s+/g, '');

              // Handle special cases
              if (col === 'Capacity' && 'capacity' in row) {
                const { adults, children } = (row as Room).capacity;
                return <td key={col}>{`Adults: ${adults}, Children: ${children}`}</td>;
              }

              // Handle starRating specifically
              if (col === 'starRating') {
                const starRating = 'starRating' in row ? (row as Hotel | Room).starRating : 'N/A';
                return <td key={col}>{starRating !== undefined ? starRating : 'N/A'}</td>;
              }

              // General case
              const cellValue = (row as any)[normalizedCol];
              return <td key={col}>{cellValue !== undefined && cellValue !== null ? cellValue : 'N/A'}</td>;
            })}
            <td>
              <button onClick={(e) => { e.stopPropagation(); onDelete(row.id); }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminGrid;
