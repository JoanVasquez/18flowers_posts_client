import { SET_PAGINATION, RESET_PAGINATION } from "./paginationActionTye";
import { PaginationService } from "../../services/PaginationService";
import actionCreator from "../../utils/actionCreator";

const paginationService = new PaginationService();

export const setPagination = (currentPage: number, dataSet: any) => {
  const paginator = paginationService.setPagination(currentPage, dataSet);
  return actionCreator(SET_PAGINATION, "payload")(paginator);
};

export const resetPagination = () => {
  return actionCreator(RESET_PAGINATION)();
};
