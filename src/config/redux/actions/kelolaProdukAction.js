import firebase, { database, storage } from "../../firebase/firebase";

export const addProdukKategori = (data) => (dispatch) => {
  console.log(data, "ini data ketika add");
  if (data.FotoProfil !== "") {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef
      .child("produk/katalog/kategori/" + data.FotoProduk.name)
      .put(data.FotoProfil);
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
            .ref("Produk/Katalog/" + data.Kategori + "/" + data.userId)
            .push({
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
    database.ref("Produk/Katalog/" + data.Kategori + "/" + data.userId).push({
      NamaProduk: data.NamaProduk,
      Katalog: data.Katalog,
      Kategori: data.Kategori,
      Deskripsi: data.Deskripsi,
      Inkluisi: data.Inkluisi,
      FotoProduk: data.FotoProduk,
      Harga: data.Harga,
    });

    return;
  }
};

export const addProdukPromo = (data) => (dispatch) => {
  console.log(data, "ini data ketika add");
  if (data.FotoProfil !== "") {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef
      .child("produk/katalog/promo/" + data.FotoProduk.name)
      .put(data.FotoProfil);
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

          database.ref("Produk/Katalog/Promo" + data.userId).push({
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
    database.ref("Produk/Katalog/Promo" + data.userId).push({
      NamaProduk: data.NamaProduk,
      Katalog: data.Katalog,
      Kategori: data.Kategori,
      Deskripsi: data.Deskripsi,
      Inkluisi: data.Inkluisi,
      FotoProduk: data.FotoProduk,
      Harga: data.Harga,
    });

    return;
  }
};

export const addProdukSewa = (data) => (dispatch) => {
  console.log(data, "ini data ketika add");
  if (data.FotoProfil !== "") {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef
      .child("produk/katalog/sewa/" + data.FotoProduk.name)
      .put(data.FotoProfil);
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

          database.ref("Produk/Katalog/Sewa" + data.userId).push({
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
    database.ref("Produk/Katalog/Sewa" + data.userId).push({
      NamaProduk: data.NamaProduk,
      Katalog: data.Katalog,
      Kategori: data.Kategori,
      Deskripsi: data.Deskripsi,
      Inkluisi: data.Inkluisi,
      FotoProduk: data.FotoProduk,
      Harga: data.Harga,
    });

    return;
  }
};

export const deleteDataKategoriAPI = (data) => (dispatch) => {
  const urlProfil = database.ref(
    "Produk/Katalog/" + data.Kategori + "/" + data.produkId
  );
  return new Promise((resolve, reject) => {
    urlProfil.remove();
  });
};

export const deleteDataPromoAPI = (data) => (dispatch) => {
  const urlProfil = database.ref("Produk/Katalog/Promo/" + data.produkId);
  return new Promise((resolve, reject) => {
    urlProfil.remove();
  });
};

export const deleteDataSewaAPI = (data) => (dispatch) => {
  const urlProfil = database.ref("Produk/Katalog/Sewa/" + data.produkId);
  return new Promise((resolve, reject) => {
    urlProfil.remove();
  });
};

export const updateDataKategoriAPI = (data) => (dispatch) => {
  if (data.FotoProfil !== "") {
    console.log(data, "ini data ketika update");

    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef
      .child("produk/katalog/kategori/" + data.FotoProduk.name)
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
            .ref("Produk/Katalog/" + data.Kategori + "/" + data.produkId)
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
    console.log(data, "ini data ketika update");
    database.ref("Produk/Katalog/" + data.Kategori + "/" + data.produkId).set({
      NamaProduk: data.NamaProduk,
      Katalog: data.Katalog,
      Kategori: data.Kategori,
      Deskripsi: data.Deskripsi,
      Inkluisi: data.Inkluisi,
      FotoProduk: data.FotoProduk,
      Harga: data.Harga,
      // downloadURL: url
    });
    return;
  }
};

export const updateDataPromoAPI = (data) => (dispatch) => {
  if (data.FotoProfil !== "") {
    console.log(data, "ini data ketika update");

    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef
      .child("produk/katalog/Promo/" + data.FotoProduk.name)
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

          database.ref("Produk/Katalog/Promo" + data.produkId).set({
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
    console.log(data, "ini data ketika update");
    database.ref("Produk/Katalog/Promo" + data.produkId).set({
      NamaProduk: data.NamaProduk,
      Katalog: data.Katalog,
      Kategori: data.Kategori,
      Deskripsi: data.Deskripsi,
      Inkluisi: data.Inkluisi,
      FotoProduk: data.FotoProduk,
      Harga: data.Harga,
      // downloadURL: url
    });
    return;
  }
};

export const updateDataSewaAPI = (data) => (dispatch) => {
  if (data.FotoProfil !== "") {
    console.log(data, "ini data ketika update");

    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef
      .child("produk/katalog/Sewa/" + data.FotoProduk.name)
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

          database.ref("Produk/Katalog/Sewa" + data.produkId).set({
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
    console.log(data, "ini data ketika update");
    database.ref("Produk/Katalog/Sewa" + data.produkId).set({
      NamaProduk: data.NamaProduk,
      Katalog: data.Katalog,
      Kategori: data.Kategori,
      Deskripsi: data.Deskripsi,
      Inkluisi: data.Inkluisi,
      FotoProduk: data.FotoProduk,
      Harga: data.Harga,
      // downloadURL: url
    });
    return;
  }
};

export const getDataKategoriFromAPI = (data, produkId) => (dispatch) => {
  const urlProduk = database.ref(
    "Produk/Katalog/" + data.Kategori + "/" + produkId
  );
  return new Promise((resolve, reject) => {
    urlProduk.on("value", (snapshot) => {
      // const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log("get Kategori:", snapshot.val());
      const data = [];
      if (!snapshot.val()) {
        return [];
      } else {
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

export const getDataPromoFromAPI = (produkId) => (dispatch) => {
  const urlProduk = database.ref("Produk/Katalog/Promo" + produkId);
  return new Promise((resolve, reject) => {
    urlProduk.on("value", (snapshot) => {
      // const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log("get Promo:", snapshot.val());
      const data = [];
      if (!snapshot.val()) {
        return [];
      } else {
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

export const getDataSewaFromAPI = (produkId) => (dispatch) => {
  const urlProduk = database.ref("Produk/Katalog/Sewa" + produkId);
  return new Promise((resolve, reject) => {
    urlProduk.on("value", (snapshot) => {
      // const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log("get Sewa:", snapshot.val());
      const data = [];
      if (!snapshot.val()) {
        return [];
      } else {
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
