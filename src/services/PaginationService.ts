import { QTY_ITEMS_BY_PAGE } from "../constants/APP_CONST";
import { pagination } from "../utils/paginatIonUtil";

export class PaginationService {
  public setPagination(currentPage: number, dataSet: any) {
    const paginate = pagination(currentPage, QTY_ITEMS_BY_PAGE, dataSet);
    return {
      pages: paginate.pages,
      paginatedData: paginate.paginatedData,
      paginatorData: paginate.paginatorData,
      totalData: dataSet,
    };
  }
}
