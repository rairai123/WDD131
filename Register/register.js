import { participantTemplate, successTemplate } from "./template.js";

let participantCount = 1;

// Add Participant
const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  participantCount++;
  const participantSection = document.querySelector(".participants");
  participantSection.insertAdjacentHTML(
    "beforeend",
    participantTemplate(participantCount)
  );
});

// Submit Form
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const adultName = document.getElementById("adult_name").value;
  const totalFees = calculateTotalFees();
  const summaryElement = document.getElementById("summary");

  summaryElement.innerHTML = successTemplate({
    adultName,
    numParticipants: participantCount,
    totalFees,
  });
  form.style.display = "none";
});

function calculateTotalFees() {
  const feeElements = document.querySelectorAll("[id^=fee]");
  const fees = [...feeElements].map((elem) => parseFloat(elem.value));
  return fees.reduce((sum, fee) => sum + fee, 0);
}
