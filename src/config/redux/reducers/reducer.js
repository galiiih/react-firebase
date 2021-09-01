const initialState = {
  popup: false,
  isLogin: false,
  isLoading: false,
  user: {},
  profil: [],
  produk: [],
  downloadURL: ""
};

const reducer = (state = initialState, action) => {
  console.log(action, 'ini action reducer')
  if (action.type === "CHANGE_POPUP") {
    return {
      ...state,
      popup: action.value,
    };
  }
  if (action.type === "CHANGE_LOGIN") {
    return {
      ...state,
      isLogin: action.value,
    };
  }
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      user: action.value,
    };
  }
  if (action.type === "CHANGE_LOADING") {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  if (action.type === "SET_PROFIL") {
    return {
      ...state,
      profil: action.value,
    };
  }
  if (action.type === "SET_PRODUK") {
    return {
      ...state,
      produk: action.value,
    };
  }

  if (action.type === "DOWNLOAD_IMAGE") {
    return {
      ...state,
      downloadURL: action.value,
    };
  }
  return state;
};

export default reducer;
