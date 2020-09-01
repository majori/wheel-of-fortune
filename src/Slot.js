import React from 'react';
import classnames from 'classnames';
import './Slot.css';

function Slot({ letter, opened }) {
  const classNames = classnames(
    'slot',
    { 
      empty: !letter || letter === ' ',
      opened,
    },
  );

  return (
    <div className={classNames}>
      <div>
        { opened && letter }
      </div>
    </div>
  );
}

export default Slot;
