import React from "react";

type PaginatorProps = {
  pages: [];
  paginatorData: any;
  onPagination: Function;
};

export const Paginator = React.memo(
  ({ pages, onPagination, paginatorData }: PaginatorProps) => {
    return (
      <div className="pagination mt-3">
        <a
          href="/#"
          className={`${!paginatorData.has_previous_page ? "disable" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            onPagination(paginatorData.first_page);
          }}
        >
          First
        </a>
        <a
          href="/#"
          className={`${!paginatorData.has_previous_page ? "disable" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            onPagination(paginatorData.first_page);
          }}
        >
          &laquo;
        </a>
        {pages.map((page, index) => (
          <a
            key={index}
            href="/#"
            className={`${
              !paginatorData.has_previous_page && !paginatorData.has_next_page
                ? "disable"
                : ""
            } ${paginatorData.current_page === page ? "active" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              onPagination(page);
            }}
          >
            {page}
          </a>
        ))}
        <a
          href="/#"
          className={` ${!paginatorData.has_next_page ? "disable" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            onPagination(paginatorData.next_page);
          }}
        >
          &raquo;
        </a>
        <a
          href="/#"
          className={`${!paginatorData.has_next_page ? "disable" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            onPagination(paginatorData.last_page);
          }}
        >
          Last
        </a>
      </div>
    );
  }
);
