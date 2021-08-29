let initialState = {
  title: "Belajar React",
  Customers: [
    {
      UserId: "1",
      Username: "Galih",
      Password: "123456",
      Alamat: "Buana Perkasa",
      Email: "galih@gmail.com",
      NoHp: "08123456789",
      NoTelp: "08123456789",
      FotoProfil: "",
      Role: "Customer",
    },
    {
      UserId: "2",
      Username: "Ratna",
      Password: "123456",
      Alamat: "Angkasa Perkasa",
      Email: "ratna@gmail.com",
      NoHp: "08123456789",
      NoTelp: "08123456789",
      FotoProfil: "",
      Role: "Customer",
    },
  ],
  error: false,
};

const Customer = (state = initialState, action) => {
  return state;
};

export default Customer;
