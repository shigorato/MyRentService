import React from 'react';
import { Point } from './types/map-types';

interface ListProps {
  points: Point[];
  onListItemHover: (listItemName: string) => void;
}

const List: React.FC<ListProps> = ({ points, onListItemHover }) => {
  const handleListItemHover = (evt: React.MouseEvent<HTMLLIElement>) => {
    onListItemHover(evt.currentTarget.innerText);
  };

  return (
    <ul className="list">
      {points.map((point, index) => {
        const keyValue = `${index}-${point.title}`;
        return (
          <li className="list__item" key={keyValue} onMouseEnter={handleListItemHover}>
            {point.title}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
