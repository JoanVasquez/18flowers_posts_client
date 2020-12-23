import reducerCreator from "../../../utils/reducerCreator";
import {
  RESET_PAGINATION,
  SET_PAGINATION,
} from "../../actions/paginationActionTye";

const initialState = {
  paginator: {
    pages: [],
    paginatorData: {},
    paginatedData: [],
    totalData: [],
  },
};

const paginatorReducer = {
  [SET_PAGINATION]: (state: any, action: any) => {
    return {
      ...state,
      paginator: action.payload,
    };
  },
  [RESET_PAGINATION]: (state: any, action: any) => {
    return {
      paginator: {
        pages: [],
        paginatorData: {},
        paginatedData: [],
        totalData: [],
      },
    };
  },
};

export default reducerCreator(initialState, paginatorReducer);
