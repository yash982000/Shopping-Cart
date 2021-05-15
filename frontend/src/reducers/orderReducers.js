import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  DETAILS_ORDER_REQUEST,
  DETAILS_ORDER_SUCCESS,
  DETAILS_ORDER_FAIL,
  PAY_ORDER_REQUEST,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAIL,
  PAY_ORDER_RESET,
  LIST_USER_REQUEST_ORDER,
  LIST_USER_SUCCESS_ORDER,
  LIST_USER_FAIL_ORDER,
  LIST_USER_RESET_ORDER,
  LIST_ORDER_REQUEST,
  LIST_ORDER_SUCCESS,
  LIST_ORDER_FAIL,
  DELIVER_ORDER_REQUEST,
  DELIVER_ORDER_SUCCESS,
  DELIVER_ORDER_FAIL,
  DELIVER_ORDER_RESET,
} from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        loading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case CREATE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case DETAILS_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DETAILS_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case DETAILS_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_ORDER_REQUEST:
      return {
        loading: true,
      };
    case PAY_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PAY_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PAY_ORDER_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case LIST_USER_REQUEST_ORDER:
      return {
        loading: true,
      };
    case LIST_USER_SUCCESS_ORDER:
      return {
        loading: false,
        orders: action.payload,
      };
    case LIST_USER_FAIL_ORDER:
      return {
        loading: false,
        error: action.payload,
      };
    case LIST_USER_RESET_ORDER:
      return { orders: [] };

    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case LIST_ORDER_REQUEST:
      return {
        loading: true,
      };
    case LIST_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case LIST_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case DELIVER_ORDER_REQUEST:
      return {
        loading: true,
      };
    case DELIVER_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DELIVER_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case DELIVER_ORDER_RESET:
      return {};
    default:
      return state;
  }
};
