import React from 'react';

const JobBoard = props => {
  const { company, position, postedAt, contract, location } = props.job;
  return (
    <div>
      <h1 className="text-3xl">{company}</h1>
      <p>{position}</p>
    </div>
  );
};

export default JobBoard;
