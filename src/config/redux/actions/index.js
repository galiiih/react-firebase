import firebase, { database } from "../../firebase/firebase";

export const actionChangeUser = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({
      type: "CHANGE_USER",
      value: "Intando",
    });
  }, 1000);
};

export const registerUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_LOADING", value: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("sukses: ", user);
        dispatch({ type: "CHANGE_LOADING", value: false });
        resolve(true)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        reject(false)
      });
  });
};

export const loginUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_LOADING", value: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        const dataUser = {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          refreshToken: user.refreshToken
        };
        console.log("sukses: ", user);
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_LOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: dataUser });
        resolve(dataUser);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_LOGIN", value: false });
        reject(false);
      });
  });
};

export const addDataToAPI = (data) => (dispatch) => {
  database.ref('User/Customer/' + data.userId).push({
    Username: data.Username,
    Email: data.Email,
    Password: data.Password,
    NoHp: data.NoHp,
    NoTelp: data.NoTelp,
    FotoProfil: data.FotoProfil,
    Alamat: data.Alamat,
    Role: data.Role
  })
}

export const getDataFromAPI = (userId) => (dispatch) => {
  const urlProfil = database.ref('User/Customer/' + userId);
  return new Promise((resolve, reject) => {
    urlProfil.on('value', (snapshot) => {
      // const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log("get Profil:",snapshot.val());
      const data = [];
      if(data === null) {
        return null;
      } else {
        Object.keys(snapshot.val()).map(key => {
          data.push({
            id: key,
            data: snapshot.val()[key]
          })
        });
      }
       //merubah objek ke array
      dispatch({type: "SET_PROFIL", value: data})
      resolve(snapshot.val());
    })
  })
}

export const updateDataAPI = (data) => (dispatch) => {
  const urlProfil = database.ref('User/Customer/' + data.userId + '/' + data.profilId);
  return new Promise((resolve, reject) => {
    urlProfil.set({
      Username: data.Username,
      Email: data.Email,
      Password: data.Password,
      NoHp: data.NoHp,
      NoTelp: data.NoTelp,
      FotoProfil: data.FotoProfil,
      Alamat: data.Alamat,
      Role: data.Role
    }, (err) => {
      if(err){
        reject(false);
      } else {
        resolve(true)
      }
    });
  })
}

export const deleteDataAPI = (data) => (dispatch) => {
  const urlProfil = database.ref('User/Customer/' + data.userId + '/' + data.profilId);
  return new Promise((resolve, reject) => {
    urlProfil.remove();
  })
}