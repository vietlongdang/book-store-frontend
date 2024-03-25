export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  paginate: Function;
}> = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];
  // TODO: Optimize this code
  if (currentPage === 1) {
    pageNumbers.push(currentPage);
    if (totalPages >= currentPage + 1) {
      pageNumbers.push(currentPage + 1);
    }
    if (totalPages >= currentPage + 2) {
      pageNumbers.push(currentPage + 2);
    }
  } else if (currentPage > 1) {
    if (currentPage >= 3) {
      pageNumbers.push(currentPage - 2);
      pageNumbers.push(currentPage - 1);
    } else {
      pageNumbers.push(currentPage - 1);
    }

    pageNumbers.push(currentPage);

    if (totalPages >= currentPage + 1) {
      pageNumbers.push(currentPage + 1);
    }
    if (totalPages >= currentPage + 2) {
      pageNumbers.push(currentPage + 2);
    }
  }

  function paginateToPage(pageNumber: number) {
    paginate(pageNumber);
    window.scrollTo(0, 0);
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item" onClick={() => paginateToPage(1)}>
          <button className="page-link">First Page</button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginateToPage(number)}
            className={"page-item " + (currentPage === number ? "active" : "")}
          >
            <button className="page-link">{number}</button>
          </li>
        ))}
        <li className="page-item" onClick={() => paginateToPage(totalPages)}>
          <button className="page-link">Last Page</button>
        </li>
      </ul>
    </nav>
  );
};
