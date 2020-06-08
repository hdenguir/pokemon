import React from 'react';

export const Pagination = ({
  currentPage,
  limit,
  count,
  handlePageDirection
}) => {
  return (
    <div className="btn-group">
      <button
        className="btn btn-primary"
        onClick={() => handlePageDirection(-1)}
        disabled={currentPage === 1 && 'disabled'}
      >
        Prev
      </button>
      <button className="btn btn-primary">
        {currentPage * limit} - {count}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handlePageDirection(1)}
        disabled={(currentPage + 1) * limit >= count && 'disabled'}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
