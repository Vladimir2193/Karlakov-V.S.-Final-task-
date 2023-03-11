document.querySelector(".form-auth-btn").onclick = function () {
    const firstUserPassword = document.querySelector("#password1").value;
    const secondUserPassword = document.querySelector("#password2").value;
  
    if (firstUserPassword == "") {
      document.getElementById("password1").style = "border: 1px solid red";
      document.getElementById("password2").style = "border: 1px solid red";
    } else if (firstUserPassword != secondUserPassword) {
      document.getElementById("password1").style = "border: 1px solid red";
      document.getElementById("password2").style = "border: 1px solid red";
      return false;
    } else if (firstUserPassword == secondUserPassword) {
      document.getElementById("password1").style = "border: 1px solid green";
      document.getElementById("password2").style = "border: 1px solid green";
    }
    return true;
  };
  