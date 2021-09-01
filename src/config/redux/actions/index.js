import firebase, { database, storage } from "../../firebase/firebase";

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
        resolve(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        reject(false);
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
          email: user.email,
          uid: user.uid,
          refreshToken: user.refreshToken,
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
  console.log(data,'ini data ketika add')
  if(data.FotoProfil != ""){
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef.child("profil/" + data.FotoProfil.name).put(data.FotoProfil);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        console.log(snapshot,'ini snapshot')
        const Progress = Math.round(
          (snapshot.byteTransferred / snapshot.totalBytes) * 100
        );
        // data.Progress(Progress);
        console.log(Progress,'-- upload processing')
      },
      (err) => {
        console.log(err);
      },
      () =>
      uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
        console.log(url,'ini url')
        dispatch({ type: "DOWNLOAD_IMAGE", value: url });

        database.ref("User/Customer/" + data.userId).push({
          Username: data.Username,
          Email: data.Email,
          Password: data.Password,
          NoHp: data.NoHp,
          NoTelp: data.NoTelp,
          FotoProfil: data.FotoProfil,
          Alamat: data.Alamat,
          Role: data.Role,
          downloadURL: url
        });
      })
    );

    return;
  }else{
    database.ref("User/Customer/" + data.userId).push({
      Username: data.Username,
      Email: data.Email,
      Password: data.Password,
      NoHp: data.NoHp,
      NoTelp: data.NoTelp,
      FotoProfil: data.FotoProfil,
      Alamat: data.Alamat,
      Role: data.Role,
      // downloadURL: data.downloadURL
    });

    return;
  }
};

export const getDataFromAPI = (userId) => (dispatch) => {
  const urlProfil = database.ref("User/Customer/" + userId);
  return new Promise((resolve, reject) => {
    urlProfil.on("value", (snapshot) => {
      // const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log("get Profil:", snapshot.val());
      const data = [];
      if (!snapshot.val()) {
        return [];
      } else {
        Object.keys(snapshot.val()).map(val => {
          data.push({
            id: val,
            data: snapshot.val()[val]
          })
        })
      }
      //merubah objek ke array
      dispatch({ type: "SET_PROFIL", value: data });
      resolve(snapshot.val());
    });
  });
};

export const updateDataAPI = (data) => (dispatch) => {
  if(data.FotoProfil != ""){
  console.log(data,'ini data ketika update')

    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef.child("profil/" + data.FotoProfil.name).put(data.FotoProfil);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        console.log(snapshot,'ini snapshot')
        const Progress = Math.round(
          (snapshot.byteTransferred / snapshot.totalBytes) * 100
        );
        // data.Progress(Progress);
        console.log(Progress,'-- upload processing')
      },
      (err) => {
        console.log(err);
      },
      () =>
      uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
        console.log(url,'ini url')
        dispatch({ type: "DOWNLOAD_IMAGE", value: url });

        database.ref(
          "User/Customer/" + data.userId + "/" + data.profilId
        ).set({
          Username: data.Username,
          Email: data.Email,
          Password: data.Password,
          NoHp: data.NoHp,
          NoTelp: data.NoTelp,
          FotoProfil: data.FotoProfil,
          Alamat: data.Alamat,
          Role: data.Role,
          downloadURL: url
        });
      })
    );

    return;
  }else{
  console.log(data,'ini data ketika update')

    // const urlProfil = database.ref(
    //   "User/Customer/" + data.userId + "/" + data.profilId
    // );
    // return new Promise((resolve, reject) => {
    //   urlProfil.set(
    //     {
    //       Username: data.Username,
    //       Email: data.Email,
    //       Password: data.Password,
    //       NoHp: data.NoHp,
    //       NoTelp: data.NoTelp,
    //       FotoProfil: data.FotoProfil,
    //       Alamat: data.Alamat,
    //       Role: data.Role,
    //       downloadURL: data.downloadURL
    //     },
    //     (err) => {
    //       if (err) {
    //         reject(false);
    //       } else {
    //         resolve(true);
    //       }
    //     }
    //   );
    // });
    database.ref(
      "User/Customer/" + data.userId + "/" + data.profilId
    ).set({
      Username: data.Username,
      Email: data.Email,
      Password: data.Password,
      NoHp: data.NoHp,
      NoTelp: data.NoTelp,
      FotoProfil: data.FotoProfil,
      Alamat: data.Alamat,
      Role: data.Role,
      // downloadURL: url
    });
    return;
  }
  
};

export const deleteDataAPI = (data) => (dispatch) => {
  const urlProfil = database.ref(
    "User/Customer/" + data.userId + "/" + data.profilId
  );
  return new Promise((resolve, reject) => {
    urlProfil.remove();
  });
};