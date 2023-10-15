// JavaScript code for dropdown functionality
const uploadBranchDropdownButton = document.getElementById("uploadBranchDropdownButton");
const uploadBranchDropdown = document.getElementById("uploadBranchDropdown");
const uploadSubjectDropdownButton = document.getElementById("uploadSubjectDropdownButton");
const uploadSubjectDropdown = document.getElementById("uploadSubjectDropdown");
const studyBranchDropdownButton = document.getElementById("studyBranchDropdownButton");
const studyBranchDropdown = document.getElementById("studyBranchDropdown");
const studySubjectDropdownButton = document.getElementById("studySubjectDropdownButton");
const studySubjectDropdown = document.getElementById("studySubjectDropdown");

// Define subject options for each branch
const subjects = {
  "Computer Science": ["DS", "OOP", "FEWD", "R", "COA"],
  "Information Science": ["Subject1", "Subject2", "Subject3"],
  "Electronics and Communication": ["SubjectA", "SubjectB", "SubjectC"],
  "Data Science": ["DS1", "DS2", "DS3"],
  "AI/ML": ["AI", "ML"],
  // Add more subjects for other branches here
};

// Toggle dropdown visibility
function toggleDropdown(dropdown) {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// Set branches in the dropdown
function setBranches(dropdownButton, dropdown) {
  dropdown.innerHTML = "";
  const branches = Array.from(dropdownButton.nextElementSibling.querySelectorAll("a"));
  branches.forEach((branch) => {
    const branchLink = branch.cloneNode(true);
    branchLink.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownButton.textContent = branchLink.textContent; // Set the selected branch in the button area
      dropdown.style.display = "none";
      // Reset subject dropdown when branch changes
      uploadSubjectDropdownButton.textContent = "Select Subject";
      studySubjectDropdownButton.textContent = "Select Subject";
    });
    dropdown.appendChild(branchLink);
  });
}

// Set subjects in the dropdown
function setSubjects(dropdownButton, dropdown, branch) {
  const subjectOptions = subjects[branch];
  if (subjectOptions) {
    dropdown.innerHTML = "";
    subjectOptions.forEach((subject) => {
      const subjectLink = document.createElement("a");
      subjectLink.href = "#";
      subjectLink.textContent = subject;
      subjectLink.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownButton.textContent = subjectLink.textContent; // Set the selected subject in the button area
        dropdown.style.display = "none";
      });
      dropdown.appendChild(subjectLink);
    });
  }
}

uploadBranchDropdownButton.addEventListener("click", () => {
  toggleDropdown(uploadBranchDropdown);
});

studyBranchDropdownButton.addEventListener("click", () => {
  toggleDropdown(studyBranchDropdown);
});

uploadBranchDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  setBranches(uploadBranchDropdownButton, uploadBranchDropdown);
});

studyBranchDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  setBranches(studyBranchDropdownButton, studyBranchDropdown);
});

uploadSubjectDropdownButton.addEventListener("click", () => {
  toggleDropdown(uploadSubjectDropdown);
});

studySubjectDropdownButton.addEventListener("click", () => {
  toggleDropdown(studySubjectDropdown);
});

