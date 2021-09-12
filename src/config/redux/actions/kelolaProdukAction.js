import firebase, { database, storage } from "../../firebase/firebase";


export const addProduct = (data) => (dispatch) => {
  if (data.FotoProduk !== "") {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    //ini link untuk nyimpen image nya di DB 
    const uploadTask = storageRef
      .child(
        `image-product/${data.selected_katalog}/${data.selected_kategori}` +
        "/" +
        data.userId +
        "/" +
        data.FotoProduk.name
      )
      .put(data.FotoProduk);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        console.log(snapshot, "ini snapshot");
        const Progress = Math.round(
          (snapshot.byteTransferred / snapshot.totalBytes) * 100
        );
        // data.Progress(Progress);
        console.log(Progress, "-- upload processing");
      },
      (err) => {
        console.log(err);
      },
      () =>
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          console.log(url, "ini url");
          dispatch({ type: "DOWNLOAD_IMAGE", value: url });

          // ini nyimpen variable yg lain, yg bkn image
          database
            .ref(`product/${data.selected_katalog}/${data.selected_kategori}` + "/" + data.userId)
            .push({
              NamaProduk: data.NamaProduk,
              Katalog: data.selected_katalog,
              Kategori: data.selected_kategori,
              Deskripsi: data.Deskripsi,
              Inkluisi: data.Inkluisi,
              FotoProduk: data.FotoProduk,
              Harga: data.Harga,
              downloadURL: url,
            });
        })
    );

    return;
  } else {
    // ini nyimpen variable yg lain, yg bkn image
    database
      .ref(`product/${data.selected_katalog}/${data.selected_kategori}` + "/" + data.userId)
      .push({
        NamaProduk: data.NamaProduk,
        Katalog: data.selected_katalog,
        Kategori: data.selected_kategori,
        Deskripsi: data.Deskripsi,
        Inkluisi: data.Inkluisi,
        FotoProduk: data.FotoProduk,
        Harga: data.Harga,
      });
    return;
  }
};

export const deleteProduct = (data) => (dispatch) => {
  console.log(data,'ini data')
  const urlProduk = database.ref(
    `product/${data.selected_katalog}/${data.selected_kategori}` +
        "/" +
        data.userId +
        "/" +
        data.produkId
  );
  return new Promise((resolve, reject) => {
    urlProduk.remove();

    resolve(alert('Success Deleted Product!'))
  });
};

export const updateProduct = (data) => (dispatch) => {
  if (data.FotoProduk !== "") {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef
      .child(
        `image-product/${data.selected_katalog}/${data.selected_kategori}` +
        "/" +
        data.userId +
        "/" +
        data.FotoProduk.name
      )
      .put(data.FotoProduk);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        console.log(snapshot, "ini snapshot");
        const Progress = Math.round(
          (snapshot.byteTransferred / snapshot.totalBytes) * 100
        );
        // data.Progress(Progress);
        console.log(Progress, "-- upload processing");
      },
      (err) => {
        console.log(err);
      },
      () =>
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          console.log(url, "ini url");
          dispatch({ type: "DOWNLOAD_IMAGE", value: url });

          database
            .ref(
              "Produk/Katalog/Kategori/" +
              data.Kategori +
              "/" +
              data.userId +
              "/" +
              data.produkId
            )
            .set({
              NamaProduk: data.NamaProduk,
              Katalog: data.Katalog,
              Kategori: data.Kategori,
              Deskripsi: data.Deskripsi,
              Inkluisi: data.Inkluisi,
              FotoProduk: data.FotoProduk,
              Harga: data.Harga,
              downloadURL: url,
            });
        })
    );
    return;
  } else {
    database
      .ref(
        `product/${data.selected_katalog}/${data.selected_kategori}` +
        "/" +
        data.userId +
        "/" +
        data.produkId
      )
      .set({
        NamaProduk: data.NamaProduk,
        Katalog: data.selected_katalog,
        Kategori: data.selected_kategori,
        Deskripsi: data.Deskripsi,
        Inkluisi: data.Inkluisi,
        FotoProduk: data.FotoProduk,
        Harga: data.Harga,
      });
    return;
  }
};

export const getDataProduct = (data) => (dispatch) => {
  const urlProduk = database.ref(
    `product/${data.selected_katalog}/${data.selected_kategori}/${data.userId}`
  );
  return new Promise((resolve, reject) => {
    urlProduk.on("value", (snapshot) => {
      // const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log("get Kategori:", snapshot.val());
      const data = [];
      if (!snapshot.val()) {
        //kalo ga muncul apa2 
      } else {
        //kalo ada data
        Object.keys(snapshot.val()).map((val) => {
          data.push({
            id: val,
            data: snapshot.val()[val],
          });
        });
      }
      //merubah objek ke array
      dispatch({ type: "SET_PRODUK", value: data });
      resolve(snapshot.val());
    });
  });
};