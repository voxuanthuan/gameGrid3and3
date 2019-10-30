let cells = document.querySelectorAll(".cell");
let result = document.querySelector(".result");
let reset = document.querySelector("#reset");

reset.addEventListener("click", () => document.location.reload());

const X_PERSON = "X";
const O_PERSON = "O";
const board = ["", "", "", "", "", "", "", "", ""];
let isXPerson = true;
let textWinner = "";
const comboWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
function draw(event) {
  if (isXPerson) {
    if (board[event.target.id] !== "") return;
    board[event.target.id] = X_PERSON;
    event.target.innerHTML = X_PERSON;
    if (checkWin(X_PERSON)) {
      textWinner = `${X_PERSON} Win`;
      result.classList.remove("active");
      result.innerHTML = `${textWinner}`;
      // document.location.reload();
      // let button = document.querySelector("button");
      // button.addEventListener("click", reset);
    }
    isXPerson = !isXPerson;
  } else {
    if (board[event.target.id] !== "") return;
    board[event.target.id] = O_PERSON;
    event.target.innerHTML = O_PERSON;
    if (checkWin(O_PERSON)) {
      textWinner = `${O_PERSON} Win`;
      console.log("O WINO WINO WINO WIN");
      result.classList.remove("active");
      result.innerHTML = `${textWinner}`;
      // document.location.reload();
      // let button = document.querySelector("button");
      // button.addEventListener("click", reset);
    }
    isXPerson = !isXPerson;
  }
  console.log(board);
}
function checkWin(typePerson) {
  console.log(board, typePerson);
  let isWin = false;
  comboWin.forEach(items => {
    if (items.every(item => board[item] === typePerson)) {
      isWin = true;
    }
  });
  return isWin;
}

cells.forEach(cell => {
  cell.addEventListener("click", draw);
});
