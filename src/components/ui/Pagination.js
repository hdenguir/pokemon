import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ count, limit, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(count / limit);

  if (pagesCount === 1) return null;

  const pages = [...Array(pagesCount)].map(
    (item, index) => index + 1
  );

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${
              currentPage === page ? 'active' : ''
            }`}
          >
            <Link to={`/page/${page}`} className="page-link">
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
