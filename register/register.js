// Start with 1 participant
let participantCount = 1;

// Template function for a new participant section
function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select id="grade${count}" name="grade${count}">
          <option selected value="" disabled></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

// Add Participant button event
document.getElementById('add').addEventListener('click', function () {
  participantCount++;
  const addButton = document.getElementById('add');
  // Insert before the Add button
  addButton.insertAdjacentHTML('beforebegin', participantTemplate(participantCount));
});

// Calculate total fees
function totalFees() {
  let feeElements = document.querySelectorAll('[id^=fee]');
  feeElements = [...feeElements];
  const total = feeElements.reduce((sum, el) => sum + (parseFloat(el.value) || 0), 0);
  return total;
}

// Template for success message
function successTemplate(info) {
  return `Thank you ${info.name} for registering. You have registered ${info.count} participants and owe $${info.total} in Fees.`;
}

// Form submit handler
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const count = participantCount;
  const total = totalFees();
  const name = document.getElementById('adult_name').value;

  // Hide form and show summary
  document.querySelector('form').style.display = 'none';
  const summary = document.getElementById('summary');
  summary.textContent = successTemplate({ name, count, total });
  summary.style.display = 'block';
});
