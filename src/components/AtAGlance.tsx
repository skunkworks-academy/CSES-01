import React from 'react';

type Item = {
  label: string;
  value: string;
};

export default function AtAGlance({items}: {items: Item[]}) {
  return (
    <div className="at-a-glance">
      {items.map((item) => (
        <div className="at-a-glance__item" key={item.label}>
          <div className="at-a-glance__label">{item.label}</div>
          <div className="at-a-glance__value">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
