import React from 'react'

export default function List({children,items}) {
    const child=items.map(element=>React.cloneElement(children,{item:element,key:element.id}));
  return (
    <div className='list'>{child}</div>
  )
}
