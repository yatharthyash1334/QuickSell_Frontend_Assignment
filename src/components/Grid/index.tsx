import React, { useMemo } from 'react';
import './grid.css';
import Column from '../Column/Column';
import { Ticket, User } from '../../interfaces';

interface GridProps {
  gridData: Record<string, Ticket[]>;
  grouping: string;
  userIdToData: Record<string, User>;
}

const Grid: React.FC<GridProps> = ({ gridData, grouping, userIdToData }) => {
  // Memoize the extraction of keys to prevent recalculation on every render
  const groupKeys = useMemo(() => Object.keys(gridData), [gridData]);

  return (
    <div className='grid'>
      {groupKeys.map((groupKey) => (
        <Column
          key={groupKey}
          tickets={gridData[groupKey]}
          grouping={grouping}
          groupBy={groupKey}
          userIdToData={userIdToData}
        />
      ))}
    </div>
  );
};

export default Grid;
