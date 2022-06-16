let form = document.querySelector(".form");

// DOM nodes
let classNo = document.getElementById("class");
let subClasses = document.getElementById("sub-classes");
let dueDate = document.getElementById("due-date");
let assignmentFile = document.getElementById("assignment-file");
let instructions = document.getElementById("instructions");
let uploadBTN = document.getElementById("upload");

// upload button click handler
const handleUpload = () => {
  let assignmentObject = {
    class: null,
    subClasses: null,
    dueDate: null,
    assignmentFile: null,
    instructions: null
  };
  assignmentObject.class = classNo.value;
  assignmentObject.subClasses = getCheckedBoxes(subClasses);
  assignmentObject.dueDate = dueDate.value;
  assignmentObject.assignmentFile = assignmentFile.files[0];
  assignmentObject.instructions = instructions.value;

  console.log(assignmentObject);
};

uploadBTN.addEventListener("click", handleUpload);

// LOGIC HERE CAN BE EXTRACTED TO WORK IN OTHER COMPONENTS

const getCheckedBoxes = checkBoxContainer => {
  let checkedBoxes = [];
  let checkboxes = Array.from(
    checkBoxContainer.querySelectorAll("input[type='checkbox']")
  );
  checkboxes.forEach(box => {
    if (box.checked) {
      checkedBoxes.push(box.value);
    }
  });
  return checkedBoxes;
};
