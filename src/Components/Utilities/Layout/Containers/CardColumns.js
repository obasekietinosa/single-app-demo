import React from 'react';

export default function CardColumns({ children }) {
  return (
    <div className="col-12">
      <div className="card-columns">
        {children}
      </div>
    </div>
  )
}