//global element
const pageWrapper = document.getElementById("page-wrapper");

//nav elements
const logInTab = document.querySelectorAll(".log-in-tab");
const menu = document.getElementById("menu");
const menuContent = document.getElementById("menu-content");

//home elements
const homeLoginHeader = document.getElementById("home-login-header");
const homeLoginText = document.getElementById("home-login-text");
const homeLoginLink = document.getElementById("home-login-link");

//log in elements
const logInForm = document.getElementById("log-in");
const signUpForm = document.getElementById("sign-up");
const accountFormSubheader = document.getElementById("account-form-subheader");
const passChecker = document.getElementById("password-checker");
const accountNoti = document.getElementById("account-noti");
const loginUserInput = document.getElementById("login-user-input");
const loginPassInput = document.getElementById("login-pass-input");
const signUpUserInput = document.getElementById("signup-user-input");
const signUpPassInput = document.getElementById("signup-pass-input");
const passRequirements = document.getElementById("pass-requirements");

const passRequirementsHeader = document.getElementById(
  "pass-requirements-header"
);
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

//job list elements
class Job {
  constructor(
    jobTitle,
    location,
    salary,
    avgSalary,
    summary,
    type,
    requirements,
    responsibilities,
    benefits,
    workLocation,
    id,
    imgSrc,
    jobContainer
  ) {
    this.jobTitle = jobTitle;
    this.location = location;
    this.salary = salary;
    this.summary = summary;
    this.type = type;
    this.requirements = requirements;
    this.responsibilities = responsibilities;
    this.benefits = benefits;
    this.workLocation = workLocation;
    this.id = id;
    this.imgSrc = imgSrc;
    this.jobContainer = jobContainer;
  }
}

jobBenefits = [
  "401(k)",
  "401(k) matching",
  "Dental Insurance",
  "Employee assistance program",
  "Health Insurance",
  "Health savings account",
  "Life insurance",
  "Professional development assistance",
  "Referral program",
  "Retirement plan",
  "Vision insurance",
];

const jobList = [
  new Job(
    "Software Engineer",
    "6997 N Glen Harbor Blvd",
    "$90,000 - $130,000",
    1,
    "Design and implement cutting-edge algorithms, collaborating with cross-functional teams to develop advanced software solutions. Stay at the forefront of innovation, conducting code reviews, and optimizing performance to solve complex problems in the field of advanced computing",
    "Full-time",
    [
      "Proven experience in developing cutting-edge algorithms and advanced software solutions.",
      "Proficiency in programming languages such as C++, Java, Python, etc.",
      "Strong analytical and problem-solving skills.",
      "Knowledge of machine learning and artificial intelligence is a plus.",
      "Ability to work collaboratively in a team environment.",
      "Passion for innovation and staying up-to-date with the latest advancements in software engineering.",
    ],
    [
      "Research, design, and implement complex algorithms to solve challenging problems.",
      "Collaborate with cross-functional teams to develop and integrate advanced software solutions.",
      "Conduct code reviews and provide constructive feedback to team members.",
      "Optimize software performance and ensure scalability.",
      "Stay informed about industry trends and emerging technologies.",
      "Contribute to the development of technical documentation.",
      "Participate in brainstorming sessions to generate innovative ideas.",
    ],
    jobBenefits,
    "In person",
    "softwareEnginner",
    "./assets/female-coder.jpg"
  ),
  new Job(
    "Hardware Innovation Specialist",
    "6997 N Glen Harbor Blvd",
    "$85,000 - $120,000",
    2,
    "Innovate and design hardware components, ensuring seamless integration with software solutions and pushing the boundaries of technology. Optimize and troubleshoot hardware for efficiency, contributing to the development of design specifications in pursuit of computing advancements.",
    "Full-time",
    [
      "Proven experience in designing and optimizing hardware components.",
      "Knowledge of hardware programming languages and tools.",
      "Familiarity with emerging technologies in the hardware domain.",
      "Strong problem-solving and troubleshooting skills.",
      "Ability to collaborate with cross-functional teams.",
      "Passion for pushing the boundaries of technology through hardware innovation.",
    ],
    [
      "Research, design, and innovate hardware components for computing advancements.",
      "Collaborate with hardware engineers and software developers to ensure seamless integration.",
      "Optimize and troubleshoot hardware solutions for performance and efficiency.",
      "Stay updated on industry trends and technological advancements in hardware.",
      "Conduct testing and validation of hardware prototypes.",
      "Contribute to the documentation of hardware design specifications.",
      "Provide technical support to other teams and departments.",
    ],
    jobBenefits,
    "In person",
    "hardwareSpecialist",
    "./assets/coder-thinking.jpg"
  ),
  new Job(
    "Technology Solutions Consultant",
    "6997 N Glen Harbor Blvd",
    "$80,000 - $110,000",
    3,
    "Collaborate with clients to understand business needs, providing strategic technology solutions and translating complex concepts into tangible business benefits. Stay informed about industry trends, offering expertise in integrating advanced technologies into diverse business operations.",
    "Full-time",
    [
      "Proven experience as a technology consultant or in a similar role.",
      "Strong communication and interpersonal skills.",
      "Strategic thinking with the ability to align technology solutions with business goals.",
      "Understanding of advanced technologies and their applications in different industries.",
      "Problem-solving and analytical skills.",
      "Project management skills are a plus.",
    ],
    [
      "Collaborate with clients to understand their business needs and challenges.",
      "Assess and analyze existing technologies to recommend improvements.",
      "Develop technology solutions that align with clients' business objectives.",
      "Communicate complex technological concepts to non-technical stakeholders.",
      "Provide training and support during the implementation of technology solutions.",
      "Stay informed about industry trends and technological advancements.",
      "Contribute to the development of proposals and presentations for clients.",
    ],
    jobBenefits,
    "In person",
    "consultant",
    "./assets/counseling.jpg"
  ),
];

const jobOpenings = document.getElementById("job-openings");
const jobListColumn = document.getElementById("job-list-column-2");

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close-modal");
const noApplications = document.getElementById("no-applications");
const jobListWrapper = document.getElementById("job-list-wrapper");

const jobApply = document.getElementById("job-apply");

// const jobInfo1 = document.getElementById('job-info-1');

//profile elements
const jobsAppliedFor = document.getElementById("jobs-applied-for");
const profileUsername = document.getElementById("profile-username");

// const profilePictureWindow = document.getElementById('profile-picture-window');
// const profilePictureDisplay = document.getElementById('profile-picture-display');
// const profilePictureInput = document.getElementById('profile-picture-input');

//log out functions and variables. Local storage is used to check whether or not the user
//is logged in or not. If the tab is closed while the user is still logged in, when they
//return to the page, they will still be logged in
const logOutConfirmation = document.getElementById("log-out-confirmation");
const profilePageWrapper = document.getElementById("profile-page-wrapper");

//application elements
const applicationForm = document.getElementById("application-form");

const applicationDone = document.getElementById("application-done");

const applicationInfo = document.getElementById("application-info");

const submitApplicationNotice = document.getElementById(
  "submit-application-notice"
);

const applicationWrapper = document.getElementById("application-wrapper");

// const applicationName = document.querySelectorAll('.application-name');
const applicationName = document.getElementById("application-name");
const firstNameInput = document.getElementById("firstName-input");
const middleNameInput = document.getElementById("middleName-input");
const lastNameInput = document.getElementById("lastName-input");
const birthdayInput = document.getElementById("birthday-input");
const phoneNumberInput = document.getElementById("phoneNumber-input");
const emailInput = document.getElementById("email-input");
const socialSecurityInput = document.getElementById("socialSecurity-input");
const addressInput = document.getElementById("address-input");
const experienceSelect = document.getElementById("experience-select");
const certificationInput = document.getElementById("certification-input");
const educationSelect = document.getElementById("education-select");
const skillInput = document.getElementById("skill-input");
const resumeInput = document.getElementById("resume-input");

const applicationNameDisplay = document.getElementById("first-name-display");
const firstNameDisplay = document.getElementById("first-name-display");
const middleNameDisplay = document.getElementById("middle-name-display");
const lastNameDisplay = document.getElementById("last-name-display");
const birthdayDisplay = document.getElementById("birthday-display");
const phoneNumberDisplay = document.getElementById("phone-number-display");
const emailDisplay = document.getElementById("email-display");
const socialSecurityDisplay = document.getElementById(
  "social-security-display"
);
const addressDisplay = document.getElementById("address-display");
const experienceDisplay = document.getElementById("experience-display");
const certificationDisplay = document.getElementById("certification-display");
const educationDisplay = document.getElementById("education-display");
const skillDisplay = document.getElementById("skill-display");
const resumeDisplay = document.getElementById("resume-display");

const middleNameHolder = document.getElementById("middle-name-holder");
const certificationHolder = document.getElementById("certification-holder");
const skillsHolder = document.getElementById("skills-holder");
const resumeHolder = document.getElementById("resume-holder");
const incompleteApplicationNotice = document.getElementById(
  "incomplete-application-notice"
);

const applicationSubmit = document.querySelector(".application-submit");

//log in variables
let username;
let password;
let loggedIn;
let profilePictureSrc;
let validPassword = false;
let storedUsers = JSON.parse(localStorage.getItem("users"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let targetJob;

//change nav bar if logged in state is true
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loggedIn") == "true") {
    // logInTab.appendChild(accountTabIcon);
    logInTab.forEach((tab) => {
      tab.innerHTML = "";
      tab.href = "profile.html";
      let accountTabIcon = document.createElement("img");
      accountTabIcon.id = "account-tab-icon";
      accountTabIcon.src = "./assets/profile-icon.png";
      tab.appendChild(accountTabIcon);
    });
  }
})

//functionality for nav for smaller media queries
if (document.body.contains(menuContent)) {
  menu.addEventListener("click", function () {
    menuContent.style.display = "block";
    pageWrapper.style.opacity = ".3";
    document.querySelector("nav").style.opacity = ".3";
  });

  pageWrapper.addEventListener("click", function () {
    menuContent.style.display = "none";
    pageWrapper.style.opacity = "1";
    document.querySelector("nav").style.opacity = "1";
  });
}

// log in and sign up logic

//check for local storage
function logIn() {
  //if there is already objects saved into local storage, the code will run this if statement
  if (storedUsers != null) {
    //create the variables for the filters
    let valuesArray = Object.values(storedUsers);
    let filteredUser = valuesArray.filter(
      (value) =>
        value.userName == loginUserInput.value &&
        value.passWord == loginPassInput.value
    );

    //the filter finds if there is an account (object) saved in local storage that has the same values
    //as the user's username and password input, and if it does, it will store the acccount info into an
    //array, and by checking if there is an object in the array, we can confirm that there is an account
    //in local storage with the same username and password
    if (filteredUser.length > "0") {
      loggedIn = true;
      localStorage.setItem("loggedIn", loggedIn);
      // window.open("index.html");
      // document.location.href = "index.html";
      history.back();
      window.addEventListener("DOMContentLoaded", () => {
        location.reload();
      });
      localStorage.setItem("currentUser", JSON.stringify(filteredUser));

      //check to make sure the inputs are filled out
    } else if (loginUserInput.value == "" || loginPassInput.value == "") {
      passChecker.style.paddingBottom = "2vh";
      passChecker.innerHTML = "Please make sure all fields are filled out";

      //if all the inputs are filled out and the filter doesn't find an account with the same information
      //as the user's inputs, it will prompt the user to try logging in again as the account with the user's
      //provided info does not exist
    } else {
      passChecker.style.paddingBottom = "2vh";
      passChecker.innerHTML =
        "Please check your password and account name and try again";
    }

    //this will run the same code as above but only when session storage is empty. This is set up
    //this way to prevent errors with the local filter variables. In this case you wouldn't be able
    //to log in because there are no users saved in local storage
  } else {
    if (loginUserInput.value == "" || loginPassInput.value == "") {
      passChecker.style.paddingBottom = "2vh";
      passChecker.innerHTML = "Please make sure all fields are filled out";
    } else {
      passChecker.style.paddingBottom = "2vh";
      passChecker.innerHTML =
        "Please check your password and account name and try again";
    }
  }
}

//set local storage
function createAccount() {
  //if there is already objects saved into local storage, the code will run this if statement
  if (storedUsers != null) {
    //create the variables for the filters
    let valuesArray = Object.values(storedUsers);
    let filteredUser = valuesArray.filter(
      (value) =>
        value.userName == signUpUserInput.value &&
        value.passWord == signUpPassInput.value
    );

    //check to make sure the inputs are filled out
    if (signUpUserInput.value == "" || signUpPassInput.value == "") {
      accountNoti.style.paddingBottom = "2vh";
      accountNoti.innerHTML = "Please make sure all fields are filled out";

      //the filter finds if there is an account (object) saved in local storage that has the same values
      //as the user's username and password input, and if it does, it will alert the user that an account
      //with the given username and password exists, preventing another account with the same information
      //being created
    } else if (filteredUser.length > 0) {
      accountNoti.style.paddingBottom = "2vh";
      accountNoti.innerHTML =
        "An account with this username and password already exists";
    } else if (signUpUserInput.value.length < 3) {
      accountNoti.style.paddingBottom = "2vh";
      accountNoti.innerHTML = "Username must be at least 3 characters long";

      //checks to make sure password meets all the requirements. Code for the password requirements is below
    } else if (validPassword == false) {
      accountNoti.style.paddingBottom = "2vh";
      accountNoti.innerHTML =
        "Make sure your password meets all the requirements";

      //if there is nothing in local storage, the code will create an object in local storage with an
      //empty array that will house all of the accounts created on this device
    } else {
      if (localStorage.getItem("users") == null) {
        localStorage.setItem("users", "[]");
      }

      //the user's username and password are placed into an object that gets pushed into an array
      //and is stored into local storage. JSON methods are used to manipulate the objects and
      //arrays for easier access and storing into local storage
      accountNoti.style.paddingBottom = "2vh";
      accountNoti.innerHTML = "Your account has been created! Please log in";
      username = signUpUserInput.value;
      password = signUpPassInput.value;
      let userAccount = {
        userName: username,
        passWord: password,
        jobsApplied: [],
        profilePicture: profilePictureSrc,
      };
      storedUsers = JSON.parse(localStorage.getItem("users"));
      storedUsers.push(userAccount);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      console.log(localStorage.getItem("users"));
    }

    //this will run the same code as above but only when session storage is empty. This is set up
    //this way to prevent errors with the local filter variables
  } else {
    if (signUpUserInput.value == "" || signUpPassInput.value == "") {
      accountNoti.style.paddingBottom = "2vh";
      accountNoti.innerHTML = "Please make sure all fields are filled out";
    } else if (validPassword == false) {
      accountNoti.style.paddingBottom = "2vh";
      accountNoti.innerHTML =
        "Make sure your password meets all the requirements";
    } else {
      if (localStorage.getItem("users") == null) {
        localStorage.setItem("users", "[]");
      }
      accountNoti.style.paddingBottom = "2vh";
      accountNoti.innerHTML = "Your account has been created! Please log in";
      username = signUpUserInput.value;
      password = signUpPassInput.value;
      let userAccount = {
        userName: username,
        passWord: password,
        jobsApplied: [],
        profilePicture: profilePictureSrc,
      };
      storedUsers = JSON.parse(localStorage.getItem("users"));
      storedUsers.push(userAccount);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      console.log(localStorage.getItem("users"));
    }
  }
}

//functionality for password checker

if (document.body.contains(signUpPassInput)) {
  signUpPassInput.onfocus = function () {
    passRequirements.style.display = "block";
  };

  signUpPassInput.onblur = function () {
    passRequirements.style.display = "none";
  };

  signUpPassInput.onkeyup = function () {
    let lowerCaseLetters = /[a-z]/g;
    if (signUpPassInput.value.match(lowerCaseLetters)) {
      letter.style.display = "none";
    } else {
      letter.style.display = "block";
    }

    let upperCaseLetters = /[A-Z]/g;
    if (signUpPassInput.value.match(upperCaseLetters)) {
      capital.style.display = "none";
    } else {
      capital.style.display = "block";
    }

    let numbers = /[0-9]/g;
    if (signUpPassInput.value.match(numbers)) {
      number.style.display = "none";
    } else {
      number.style.display = "block";
    }

    if (signUpPassInput.value.length >= 8) {
      length.style.display = "none";
    } else {
      length.style.display = "block";
    }

    if (
      signUpPassInput.value.match(lowerCaseLetters) &&
      signUpPassInput.value.match(upperCaseLetters) &&
      signUpPassInput.value.match(numbers) &&
      signUpPassInput.value.length >= 8
    ) {
      passRequirementsHeader.style.display = "none";
      validPassword = true;
    } else {
      passRequirementsHeader.style.display = "block";
      validPassword = false;
    }
  };
}

//switch the page to the sign up page
function switchToSignUp() {
  accountFormSubheader.innerHTML = "Create An Account";
  logInForm.style.display = "none";
  signUpForm.style.display = "block";
  loginPassInput.value = "";
  loginUserInput.value = "";
  passChecker.style.paddingBottom = "0";
  passChecker.innerHTML = "";
}

//switch the page to the log in page
function switchToLogIn() {
  accountFormSubheader.innerHTML = "Log Into Your Account";
  signUpForm.style.display = "none";
  logInForm.style.display = "block";
  signUpPassInput.value = "";
  signUpUserInput.value = "";
  accountNoti.style.paddingBottom = "0";
  accountNoti.innerHTML = "";
}

//show/hide password functions
function showLoginPassword() {
  if (loginPassInput.type == "password") {
    loginPassInput.type = "text";
  } else {
    loginPassInput.type = "password";
  }
}

function showSignupPassword() {
  if (signUpPassInput.type == "password") {
    signUpPassInput.type = "text";
  } else {
    signUpPassInput.type = "password";
  }
}

//log out functions, changes logged in state
function logOut() {
  modal.showModal();
}

function confirmLogOut() {
  document.location.href = "index.html";
  loggedIn = false;
  localStorage.setItem("loggedIn", loggedIn);
  localStorage.removeItem("currentUser");
  profilePageWrapper.style.opacity = "1";
  logOutConfirmation.style.display = "none";
}

function rejectLogOut() {
  modal.close();
}

//functions to direct the user to job page or log in page
function goToLogIn() {
  document.location.href = "log-in.html";
}

if (document.body.contains(modal)) {
  modalClose.addEventListener("click", () => {
    modal.close();
  });
}

if (document.body.contains(modal)) {
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
}

//functions for submitting the applications
//these functions store the application info in local storage for later access
function confirmSubmit() {
  //variables to capture the date the application was submitted
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fullDate = `${month}/${day}/${year}`;

  let storedJobsArray = Object.values(jobList);
  let filteredJob = storedJobsArray.filter(
    (value) => value.id == localStorage.getItem("targetJob")
  );

  let jobApplicationInfo = {
    jobApplicationInfo: {
      firstName: firstNameInput.value,
      middleName: middleNameInput.value,
      lastName: lastNameInput.value,
      birthday: birthdayInput.value,
      phoneNumber: phoneNumberInput.value,
      email: emailInput.value,
      socialSecurity: socialSecurityInput.value,
      address: addressInput.value,
      experience: experienceSelect.value,
      certifications: certificationInput.value,
      education: educationSelect.value,
      skills: skillInput.value,
      resume: resumeInput.value,
      dateApplied: fullDate,
      job: `${filteredJob[0].id}`,
    },
  };
  storedUsers
    .filter(
      (value) =>
        value.userName == currentUser[0].userName &&
        value.passWord == currentUser[0].passWord
    )[0]
    .jobsApplied.push(jobApplicationInfo);
  localStorage.setItem("users", JSON.stringify(storedUsers));
  currentUser[0].jobsApplied.push(jobApplicationInfo);
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  modal.close();
  applicationForm.style.display = "none";
  applicationDone.style.display = "block";
}

function phoneFormat(input) {
  input = input.replace(/\D/g, "").substring(0, 10); //Strip everything but 1st 10 digits
  let size = input.length;
  if (size > 0) {
    input = "(" + input;
  }
  if (size > 3) {
    input = input.slice(0, 4) + ") " + input.slice(4);
  }
  if (size > 6) {
    input = input.slice(0, 9) + "-" + input.slice(9);
  }
  return input;
}

function socialSecurityFormat(input) {
  input = input.replace(/\D/g, "").substring(0, 9); //Strip everything but 1st 10 digits
  let size = input.length;
  if (size > 3) {
    input = input.slice(0, 3) + "-" + input.slice(3);
  }
  if (size > 6) {
    input = input.slice(0, 6) + "-" + input.slice(6);
  }
  return input;
}

//these funcitons check to make sure all of the REQUIRED fields are filled out
function submitApplication() {
  const emailPattern = /^[a-zA-Z0-9._-]{1,16}@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
  const phoneNumberPattern = /\(\d{3}\) \d{3}-\d{4}/g;
  const socialSecurityPattern = /\d{3}-\d{2}-\d{4}/g;
  const addressPattern = /^[#.0-9a-z\s,-]+$/gi;

  if (
    firstNameInput.value == "" ||
    lastNameInput.value == "" ||
    birthdayInput.value == "" ||
    phoneNumberInput.value == "" ||
    emailInput.value == "" ||
    socialSecurityInput.value == "" ||
    addressInput.value == "" ||
    experienceSelect.value == "" ||
    educationSelect.value == ""
  ) {
    incompleteApplicationNotice.innerHTML =
      "Please make sure all required fields are filled out";
  } else if (!emailPattern.test(emailInput.value)) {
    incompleteApplicationNotice.innerHTML =
      "Please make sure you entered a valid email";
  } else if (!phoneNumberPattern.test(phoneNumberInput.value)) {
    incompleteApplicationNotice.innerHTML =
      "Please make sure you entered a valid phone number";
  } else if (!socialSecurityPattern.test(socialSecurityInput.value)) {
    incompleteApplicationNotice.innerHTML =
      "Please make sure you entered a valid social security number";
  } else if (!addressPattern.test(addressInput.value)) {
    incompleteApplicationNotice.innerHTML =
      "Please make sure you entered a valid address";
  } else {
    incompleteApplicationNotice.innerHTML = "";
    modal.showModal();
  }
}

//when you go back to the application page,
//this code will check if the application has been filled out or not,
//and if it has, it will display the applicant's info

if (document.body.contains(applicationInfo)) {
  // set the target job you're applying for based on the apply button you clicked on in the job list
  let storedJobsArray = Object.values(jobList);
  let filteredJob = storedJobsArray.filter(
    (value) => value.id == localStorage.getItem("targetJob")
  );
  applicationName.innerHTML = `${filteredJob[0].jobTitle}`;

  // if the user has already applied to the target job it will show their info and not let them apply again
  if (
    currentUser[0].jobsApplied.some(
      (job) => job.jobApplicationInfo.job == filteredJob[0].id
    )
  ) {
    // finds the users application info

    // let jobsArray = Object.values(currentUser[0].jobsApplied);
    let filterJob = currentUser[0].jobsApplied.filter(
      (job) => job.jobApplicationInfo.job == filteredJob[0].id
    );
    applicationForm.style.display = "none";
    applicationInfo.style.display = "block";
    firstNameDisplay.textContent = filterJob[0].jobApplicationInfo.firstName;
    lastNameDisplay.textContent = filterJob[0].jobApplicationInfo.lastName;
    birthdayDisplay.textContent = filterJob[0].jobApplicationInfo.birthday;
    phoneNumberDisplay.textContent =
      filterJob[0].jobApplicationInfo.phoneNumber;
    emailDisplay.textContent = filterJob[0].jobApplicationInfo.email;
    socialSecurityDisplay.textContent =
      filterJob[0].jobApplicationInfo.socialSecurity;
    addressDisplay.textContent = filterJob[0].jobApplicationInfo.address;
    experienceDisplay.textContent = filterJob[0].jobApplicationInfo.experience;

    switch (filterJob[0].jobApplicationInfo.education) {
      case "lessThanHigh":
        educationDisplay.textContent = "Less than High School Diploma";
        break;
      case "high":
        educationDisplay.textContent = "High School Diploma or GED";
        break;
      case "college":
        educationDisplay.textContent = "Some College, but no Degree";
        break;
      case "associates":
        educationDisplay.textContent = "Associates Degree";
        break;
      case "bachelor":
        educationDisplay.textContent = "Bachelor's Degree";
        break;
      case "masters":
        educationDisplay.textContent = "Masters Degree";
        break;
      case "professional":
        educationDisplay.textContent = "Professional Degree";
        break;
      case "doctorate":
        educationDisplay.textContent = "Doctorate";
        break;
    }

    if (filterJob[0].jobApplicationInfo.middleName != "") {
      middleNameHolder.style.display = "block";
      middleNameDisplay.textContent =
        filterJob[0].jobApplicationInfo.middleName;
    }
    if (filterJob[0].jobApplicationInfo.certifications != "") {
      certificationHolder.style.display = "block";
      certificationDisplay.textContent =
        filterJob[0].jobApplicationInfo.certifications;
    }
    if (filterJob[0].jobApplicationInfo.skills != "") {
      skillsHolder.style.display = "block";
      skillDisplay.textContent = filterJob[0].jobApplicationInfo.skills;
    }
    if (filterJob[0].jobApplicationInfo.resume != "") {
      resumeHolder.style.display = "block";
      resumeDisplay.textContent = filterJob[0].jobApplicationInfo.resume;
    }
  }
}

// *****************************************************************************************************************************************************************************************
//this code checks to see which jobs have been applied to
//and populates them into the profile page
if (document.body.contains(profileUsername)) {
  profileUsername.textContent = currentUser[0].userName;

  let jobsAppliedArray = currentUser[0].jobsApplied;

  jobsAppliedArray.forEach((job) => {
    let storedJobsArray = Object.values(jobList);
    let storedFilteredJob = storedJobsArray.filter(
      (value) => value.id == job.jobApplicationInfo.job
    );

    let appliedJobDiv = document.createElement("div");
    appliedJobDiv.classList.add("profile-job-container");
    appliedJobDiv.innerHTML = `<div class="profile-column">
        <h3>${storedFilteredJob[0].jobTitle}</h3>
        <p>Date Applied:</p>
        <p id="job-1-date-applied">${job.jobApplicationInfo.dateApplied}</p>
        <a href="application.html">More</a>
        </div>
        <div class="profile-column">
            <img src="${storedFilteredJob[0].imgSrc}">
        </div>`;

    jobsAppliedFor.appendChild(appliedJobDiv);
  });
}

//this code changes the portion of the header that has the log in and profile,

if (document.body.contains(homeLoginHeader)) {
  if (localStorage.getItem("loggedIn") == "true") {
    homeLoginHeader.textContent = "Check out your account!";
    homeLoginText.textContent = "See all the jobs you've applied to and more!";
    homeLoginLink.innerHTML = "Account";
    homeLoginLink.href = "profile.html";
  } else {
    homeLoginHeader.textContent = "Need to Make An Account?";
    homeLoginText.textContent =
      "Log in to start applying to jobs! Need an account? Create one today!";
    homeLoginLink.innerHTML = "Log In";
    homeLoginLink.href = "log-in.html";
  }
}

//this code is used to show which job you have selected in the job list with styles

if (document.body.contains(jobOpenings)) {
  jobList.map((job) => {
    let jobDiv = document.createElement("div");
    jobDiv.classList.add("job-container");

    let jobTitleHeader = document.createElement("h1");
    jobTitleHeader.textContent = `${job.jobTitle}`;
    jobDiv.appendChild(jobTitleHeader);

    let jobLocation = document.createElement("p");
    jobLocation.textContent = `${job.location}`;
    jobDiv.appendChild(jobLocation);

    let jobPrice = document.createElement("p");
    jobPrice.textContent = `${job.salary}`;
    jobDiv.appendChild(jobPrice);

    let jobSummary = document.createElement("p");
    jobSummary.textContent = `${job.summary}`;
    jobDiv.appendChild(jobSummary);

    jobOpenings.appendChild(jobDiv);

    let mobileJobDiv = document.createElement("div");
    mobileJobDiv.setAttribute("id", `${job.id}`);
    mobileJobDiv.classList.add("job-container-mobile");
    mobileJobDiv.innerHTML = `<h1>${job.jobTitle}</h1>
        <p>${job.location}</p>
        <p>${job.salary} per year</p>
        <p>${job.summary}</p>`;

    jobOpenings.appendChild(mobileJobDiv);

    mobileJobDiv.addEventListener("click", (e) => {
      if (localStorage.getItem("loggedIn") == "true") {
        targetJob = e.currentTarget.id;
        let jobsArray = Object.values(jobList);
        let filteredJob = jobsArray.filter((value) => value.id == targetJob);
        document.location.href = "application.html";
        localStorage.setItem("targetJob", targetJob);
      } else {
        modal.showModal();
      }
    });

    let jobApplyDiv = document.createElement("div");
    jobApplyDiv.classList.add("job-apply");

    // let jobApplyTitle = document.createElement('h1');
    // jobApplyTitle.innerHTML = `${job.jobTitle}`;
    // jobApplyDiv.appendChild(jobApplyTitle);

    // let jobApplyLocation = document.createElement('p');
    // jobApplyLocation.innerHTML = `${job.location}`;
    // jobApplyDiv.appendChild(jobApplyLocation);

    // let jobApplySalary = document.createElement('p');
    // jobApplySalary.innerHTML = `${job.salary}`;
    // jobApplyDiv.appendChild(jobApplySalary);

    // let jobApplyButton = document.createElement('button');
    // jobApplyButton.innerHTML = "Apply";
    // jobApplyButton.classList.add('apply');
    // jobApplyButton.type = "button";

    // jobApplyDiv.appendChild(jobApplyButton);

    jobApplyDiv.innerHTML = `<h1>${job.jobTitle}</h1>
        <p>${job.location}</p>
        <p>${job.salary} per year</p>
        <button type='button' class='apply' name='${job.id}'>Apply</button>
        `;

    let jobInfoWrapper = document.createElement("div");
    jobInfoWrapper.id = "job-info";
    let jobInfoDiv = document.createElement("div");
    jobInfoDiv.classList.add("job-container-info");

    let jobRequirements = document.createElement("ul");
    job.requirements.map((requirement) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = `${requirement}`;
      jobRequirements.appendChild(listItem);
    });

    let jobResponsibilities = document.createElement("ul");
    job.responsibilities.map((duty) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = `${duty}`;
      jobResponsibilities.appendChild(listItem);
    });

    let jobBenefitsList = document.createElement("ul");
    job.benefits.map((benefit) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = `${benefit}`;
      jobBenefitsList.appendChild(listItem);
    });

    jobInfoDiv.innerHTML = `<h2>Job Details</h2>
        <p>Pay: <br>
            ${job.salary} per year</p>
        <p>Job Type: <br>
            ${job.type}</p>
            <p>
                Job Requirements: <br>
                ${jobRequirements.outerHTML}
            </p>

            <p>
                Responsibilities and Duties: <br>
                ${jobResponsibilities.outerHTML}
            </p>

            <p>
                Benefits:
                ${jobBenefitsList.outerHTML}
            </p>

            <p>
                Work Location: <br>
                ${job.workLocation}
            </p>`;

    jobInfoWrapper.appendChild(jobInfoDiv);

    jobListColumn.appendChild(jobApplyDiv);
    jobListColumn.appendChild(jobInfoWrapper);

    let container = `${jobApplyDiv.outerHTML} ${jobInfoWrapper.outerHTML}`;
    job.jobContainer = container;

    jobListColumn.innerHTML = jobList[0].jobContainer;

    jobDiv.addEventListener("click", () => {
      jobListColumn.innerHTML = job.jobContainer;
    });
  });

  let jobDivs = document.querySelectorAll(".job-container");
  jobDivs.forEach((div) => {
    div.addEventListener("click", function (e) {
      jobDivs.forEach((wrapper) => {
        wrapper.style.border = ".3vw solid white";
      });
      e.currentTarget.style.border = ".3vw solid #7A9AE4";

      let applyButton = document.querySelector(".apply");
      applyButton.addEventListener("click", (event) => {
        if (localStorage.getItem("loggedIn") == "true") {
          targetJob = event.target.name;
          let jobsArray = Object.values(jobList);
          let filteredJob = jobsArray.filter((value) => value.id == targetJob);
          document.location.href = "application.html";
          localStorage.setItem("targetJob", targetJob);
        } else {
          modal.showModal();
        }
      });
    });
  });

  let applyButton = document.querySelector(".apply");
  applyButton.addEventListener("click", (event) => {
    if (localStorage.getItem("loggedIn") == "true") {
      targetJob = event.target.name;
      let jobsArray = Object.values(jobList);
      let filteredJob = jobsArray.filter((value) => value.id == targetJob);
      document.location.href = "application.html";
      localStorage.setItem("targetJob", targetJob);
    } else {
      modal.showModal();
    }
  });
}

const headerBackgrounds = document.querySelectorAll(".background");
let imageIndex = 0;
function changeBackground() {
  headerBackgrounds[imageIndex].classList.remove("showing");
  imageIndex++;

  if (imageIndex >= headerBackgrounds.length) {
    imageIndex = 0;
  }

  headerBackgrounds[imageIndex].classList.add("showing");
}

if (document.body.contains(homeLoginHeader)) { 
  setInterval(changeBackground, 6000);
}

//scrapped logic for being able to change your profile picture, security issues with the live server

// function saveProfilePicture() {
//     let filteredUser = storedUsers.filter(value => value.userName == currentUser[0].userName && value.passWord == currentUser[0].passWord)[0];
//     filteredUser.profilePicture = profilePictureInput.value;
//     localStorage.setItem("users", JSON.stringify(storedUsers));
//     currentUser[0].profilePicture = profilePictureInput.value;
//     console.log(filteredUser.profilePicture);
//     profilePictureDisplay.src = currentUser[0].profilePicture;
// }

// function exitProfileWindow() {
//     profilePictureWindow.style.display = "none";
// }

// if (document.body.contains(profilePictureDisplay)) {

// }