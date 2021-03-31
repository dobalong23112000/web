const mail = document.getElementById("mail");

const password = document.getElementById("password");
const login = document.getElementById("login");



login.onclick = function () {
  let a = 0;
  axios.get("https://sheetdb.io/api/v1/ccna3tl73ncfv").then((response) => {
    const data = response.data;

    data.forEach(function (item, index) {
      if (mail.value == item.email && password.value == item.password) {
        console.log("Dung tai khoan");
        a++;
      }
    });
    if (a == 0) {
      alert("Tai khoan cua ban sai ten dang nhap hoac mat");
    }
  });
};

