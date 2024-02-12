const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validation();
});

// SuccessMsg after fiiling form**************

const sendData = (usernameval, sRate, count) => {
  if (sRate === count) {
    // alert("registration successfull");
    Swal.fire("Welcome! " + usernameval, " Registration! successful! ");
    // location.href = `demo.html?username =${usernameval}`;
  }
};

const successMsg = (usernameval) => {
  let formCon = document.getElementsByClassName("form-control");

  let count = formCon.length - 1;
  for (let i = 0; formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      let sRate = 0 + i;
      console.log(sRate);
      console.log(count);
      sendData(usernameval, sRate, count);
    } else {
      return false;
    }
  }
};

// Validation function()******************
const validation = () => {
  const usernameval = username.value.trim();
  const emailval = email.value.trim();
  const phoneval = phone.value.trim();
  const passwordval = password.value.trim();
  const cpasswordval = cpassword.value.trim();

  //  username validation
  if (usernameval === "") {
    seterrorMsg(username, "please add your username");
  } else if (usernameval.length <= 4) {
    seterrorMsg(username, "username min 5 char ");
  } else {
    setsucceseMsg(username);
  }

  // email validation

  //   isEmail validation check
  const isEmail = (emailval) => {
    let atsymbol = emailval.indexOf("@");
    if (atsymbol < 1) return false;

    let dot = emailval.lastIndexOf(".");
    if (dot <= atsymbol + 2) return false;

    if (dot === emailval.length - 1) return false;

    return true;
  };

  if (emailval === "") {
    seterrorMsg(email, "add your email");
  } else if (!isEmail(emailval)) {
    seterrorMsg(email, "not a valid email");
  } else {
    setsucceseMsg(email);
  }

  // phone validation
  if (phoneval === "") {
    seterrorMsg(phone, "add your number");
  } else if (phoneval.length != 10) {
    seterrorMsg(phone, "min 10 number");
  } else {
    setsucceseMsg(phone);
  }
  // password validation
  if (passwordval === "") {
    seterrorMsg(password, "chosse your password");
  } else if (passwordval.length <= 5) {
    seterrorMsg(password, "min 6 character");
  } else {
    setsucceseMsg(password);
  }
  // phone validation
  if (cpasswordval === "") {
    seterrorMsg(cpassword, "Comfirm password");
  } else if (passwordval != cpasswordval) {
    seterrorMsg(cpassword, "comfirm password not matched");
  } else {
    setsucceseMsg(cpassword);
  }

  successMsg(usernameval);
};

//  seterror Message
function seterrorMsg(input, errmessage) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errmessage;
}

//   setsucceseMsg Message
function setsucceseMsg(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}
