import React from 'react';
import "./Skeleton.css";

export default function Skeleton( { type } ) {
    const classes = `${type} skeleton`;
  return (
    <div className={classes}>
        {`Im a skeleton of type  ${type} boo`}
    </div>
  )
}
