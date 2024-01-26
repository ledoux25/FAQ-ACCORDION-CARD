const dropdown = document.getElementsByClassName("question");
const question = document.getElementsByClassName("question");
const targetElemnt = document.getElementsByClassName("answer");
down = false;
next = 0;
let previous = null;

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", toggleParagraph(i));
}

function toggleParagraph(index) {
  return function () {
    if (!down && previous != index) {
      if (previous != null) {
        targetElemnt[previous].classList.remove("answer-active");
        question[previous].classList.remove("question-active");
      }
      setTimeout(() => {
        targetElemnt[index].classList.add("answer-active");
        question[index].classList.add("question-active");
      }, 200);

      previous = index;
    } else if (!down && previous === index) {
      targetElemnt[index].classList.remove("answer-active");
      question[index].classList.remove("question-active");
      previous = null;
    }
  };
}
