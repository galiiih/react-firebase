import { database, storage } from "../../firebase/firebase";

export const addProdukKategori = (data) => (dispatch) => {
  database.ref("Produk/Katalog/" + data.Kategori + "/" + data.userId).push({
    NamaProduk: data.NamaProduk,
    Katalog: data.Katalog,
    Kategori: data.Kategori,
    Deskripsi: data.Deskripsi,
    Inkluisi: data.Inkluisi,
    FotoProduk: data.FotoProduk,
    Harga: data.Harga,
  });
};

export const addProdukPromo = (data) => (dispatch) => {
  database.ref("Produk/Katalog/Promo/" + data.userId).push({
    NamaProduk: data.NamaProduk,
    Deskripsi: data.Deskripsi,
    Inkluisi: data.Inkluisi,
    FotoProduk: data.FotoProduk,
    Harga: data.Harga,
  });
};

export const addProdukSewa = (data) => (dispatch) => {
  database.ref("Produk/Katalog/Sewa/" + data.userId).push({
    NamaProduk: data.NamaProduk,
    Deskripsi: data.Deskripsi,
    Inkluisi: data.Inkluisi,
    FotoProduk: data.FotoProduk,
    Harga: data.Harga,
  });
};

export const uploadImageProduk = (data) => (dispatch) => {
  const storageRef = storage.ref();
  const uploadTask = storageRef("produk/" + data.FotoProduk).put(Image);
  uploadTask.on(
    (snapshot) => {
      const Progress = Math.round(
        (snapshot.byteTransferred / snapshot.totalBytes) * 100
      );
      data.Progress(Progress);
    },
    (err) => {
      console.log(err);
    },
    () =>
      storage
        .ref("produk")
        .child(data.FotoProduk)
        .getDownloadURL()
        .then((url) => {
          data.downloadURL(url);
        })
  );
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
  const urlProfil = database.ref(
    "Produk/Katalog/" + data.Kategori + "/" + data.produkId
  );
  return new Promise((resolve, reject) => {
    urlProfil.set(
      {
        NamaProduk: data.NamaProduk,
        Katalog: data.Katalog,
        Kategori: data.Kategori,
        Deskripsi: data.Deskripsi,
        Inkluisi: data.Inkluisi,
        Harga: data.Harga,
        FotoProduk: data.FotoProduk,
      },
      (err) => {
        if (err) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });
};

export const updateDataPromoAPI = (data) => (dispatch) => {
  const urlProfil = database.ref("Produk/Katalog/Promo/" + data.produkId);
  return new Promise((resolve, reject) => {
    urlProfil.set(
      {
        NamaProduk: data.NamaProduk,
        Katalog: data.Katalog,
        Kategori: data.Kategori,
        Deskripsi: data.Deskripsi,
        Inkluisi: data.Inkluisi,
        Harga: data.Harga,
        FotoProduk: data.FotoProduk,
      },
      (err) => {
        if (err) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });
};

export const updateDataSewaAPI = (data) => (dispatch) => {
  const urlProfil = database.ref("Produk/Katalog/Sewa/" + data.produkId);
  return new Promise((resolve, reject) => {
    urlProfil.set(
      {
        NamaProduk: data.NamaProduk,
        Katalog: data.Katalog,
        Kategori: data.Kategori,
        Deskripsi: data.Deskripsi,
        Inkluisi: data.Inkluisi,
        Harga: data.Harga,
        FotoProduk: data.FotoProduk,
      },
      (err) => {
        if (err) {
          reject(false);
        } else {
          resolve(true);
        }
      }
    );
  });
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
        data.push({
          id: 1,
          data: snapshot.val(),
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
        data.push({
          id: 1,
          data: snapshot.val(),
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
        data.push({
          id: 1,
          data: snapshot.val(),
        });
      }
      //merubah objek ke array
      dispatch({ type: "SET_PRODUK", value: data });
      resolve(snapshot.val());
    });
  });
};
