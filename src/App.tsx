import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./store/actions/postAction";
import { setPagination } from "./store/actions/paginationAction";
import { Paginator } from "./components/Paginator";
import { DataTable } from "./components/DataTable";
import loading from "./loading.svg";
import { genericFilteredItem } from "./utils/filterUtil";
import { QTY_ITEMS_BY_PAGE } from "./constants/APP_CONST";
import { Filter } from "./components/Filter";

const App = () => {
  const posts = useSelector((state: any) => state.postReducer.posts);
  const isLoading = useSelector((state: any) => state.postReducer.isLoading);
  const errors = useSelector((state: any) => state.postReducer.error);
  const paginator = useSelector(
    (state: any) => state.paginationReducer.paginator
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPagination(1, posts));
  }, [posts, dispatch]);

  const onPaginator = useCallback(
    (currentPage) => {
      dispatch(setPagination(currentPage, posts));
      setCurrentPage(currentPage);
    },
    [dispatch, posts]
  );

  const onFilter = useCallback(
    (filterBy, filterText) => {
      if (filterText) {
        const paginate = genericFilteredItem(
          filterText,
          filterBy,
          QTY_ITEMS_BY_PAGE,
          posts
        );
        dispatch(setPagination(1, paginate.filteredData));
      } else {
        onPaginator(posts);
      }
    },
    [posts, currentPage, dispatch, onPaginator]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-white mt-5 p-4">
          <h1>POSTS APLICATION</h1>
          <hr />
          <Filter onFilter={onFilter} />
          {errors.data ? (
            <div className="alert alert-danger">{errors.data}</div>
          ) : null}
          {isLoading ? (
            <div className="text-center">
              <img src={loading} />
            </div>
          ) : null}
          <DataTable posts={paginator.paginatedData} />
          <Paginator
            pages={paginator.pages}
            paginatorData={paginator.paginatorData}
            onPagination={onPaginator}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
