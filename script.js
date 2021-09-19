const birthDateInput = document.getElementById("birth-date");
const luckyNumberInput = document.getElementById("lucky-number");
const birthdayResult = document.getElementById("output-container");
const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", () => {
  let birthDate = birthDateInput.value.replaceAll("-", "");
  let luckyNumber = luckyNumberInput.value;
  if (!birthDate) {
    showMessage("Please select your birthdate", "gray");
  } else if (!luckyNumber) {
    showMessage("Please enter your lucky number", "gray");
  } else {
    if (isLucky(birthDate, luckyNumber)) {
      showMessage("Your Birthday is Lucky!!!", "green");
    } else {
      showMessage("Sorry! your birthday isn't Lucky.", "red");
    }
  }
});

const getSum = (numberArr) => {
  let sum = 0;
  numberArr.forEach((element) => {
    sum += Number(element);
  });
  return sum;
};

const isLucky = (birthDate, luckyNumber) => {
  let sum = getSum(birthDate.split(""));
  if (sum % luckyNumber == 0 || luckyNumber % sum == 0) {
    return true;
  } else {
    return false;
  }
};

const showMessage = (msg, color) => {
  birthdayResult.innerText = msg;
  birthdayResult.style.color = color;
  birthdayResult.style.display = "Block";
};
