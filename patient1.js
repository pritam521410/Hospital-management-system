document.getElementById('optionSelect').addEventListener('change', function() {
    var selectedOption = this.value;
    
    var hospitalSection = document.getElementById('hospitalSection');
    var nurseCareSection = document.getElementById('nurseCareSection');
    
    if (selectedOption === 'hospital') {
      hospitalSection.classList.remove('hidden');
      nurseCareSection.classList.add('hidden');
    } else if (selectedOption === 'nurseCare') {
      hospitalSection.classList.add('hidden');
      nurseCareSection.classList.remove('hidden');
      populateNurseCareSection();
    } else {
      hospitalSection.classList.add('hidden');
      nurseCareSection.classList.add('hidden');
    }
  });
  
  document.getElementById('hospitalSelect').addEventListener('change', function() {
    var selectedHospital = this.value;
    var hospitalDetails = document.getElementById('hospitalDetails');
    
    if (selectedHospital) {
      hospitalDetails.classList.remove('hidden');
      document.getElementById('hospitalName').textContent = selectedHospital;
      
      // Dummy data for bed availability
      var totalBeds = 100;
      var bookedBeds = Math.floor(Math.random() * totalBeds);
      var availableBeds = totalBeds - bookedBeds;
      
      document.getElementById('bedAvailability').textContent = "Bed Availability:";
      document.getElementById('bedsBooked').textContent = "Beds Booked: " + bookedBeds;
      document.getElementById('availableBeds').textContent = "Available Beds: " + availableBeds;
    } else {
      hospitalDetails.classList.add('hidden');
    }
  });
  
  function populateNurseCareSection() {
    // Dummy nurse data
    var nurses = [
      { name: "Nurse 1", contact: "123-456-7890", available: "Yes" },
      { name: "Nurse 2", contact: "987-654-3210", available: "No" },
      { name: "Nurse 3", contact: "555-555-5555", available: "Yes" }
    ];
  
    var nurseCareSection = document.getElementById('nurseCareSection');
    nurseCareSection.innerHTML = "<h3>Nurse Details:</h3>";
    
    nurses.forEach(function(nurse) {
      var nurseDiv = document.createElement('div');
      nurseDiv.classList.add('nurse');
      nurseDiv.innerHTML = `
        <p>Name: ${nurse.name}</p>
        <p>Contact: ${nurse.contact}</p>
        <p>Available: ${nurse.available}</p>
      `;
      nurseCareSection.appendChild(nurseDiv);
    });
  }