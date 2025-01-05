function showDistricts() {
    var state = document.getElementById("state").value;
    var districtsElement = document.getElementById("districts");
    var stateNameElement = document.getElementById("stateName");
    
    if (state !== "") {
      districtsElement.style.display = "block";
      stateNameElement.innerText = state.charAt(0).toUpperCase() + state.slice(1);
      
      // Example: Load districts and availability based on the selected state
      // You can replace this with your actual data retrieval logic
      var districtsData = getDistrictsData(state);
      displayDistrictsAvailability(districtsData);
    } else {
      districtsElement.style.display = "none";
    }
  }
  
  function getDistrictsData(state) {
    
    return {
      "District 1": {
        "A": 10,
        "B": 5,
        "A+": 8,
        "O": 15,
        "B+": 3,
        "AB": 2
      },
      "District 2": {
        "A": 6,
        "B": 3,
        "A+": 5,
        "O": 12,
        "B+": 2,
        "AB": 1
      }
    };
  }
  
  function displayDistrictsAvailability(districtsData) {
    var availabilityTable = document.getElementById("availability");
    availabilityTable.innerHTML = ""; // Clear previous data
    
    // Create table header
    var headerRow = availabilityTable.insertRow();
    var headers = ["District", "A", "B", "A+", "O", "B+", "AB"];
    for (var i = 0; i < headers.length; i++) {
      var th = document.createElement("th");
      th.textContent = headers[i];
      headerRow.appendChild(th);
    }
    
    // Create table rows for each district
    for (var district in districtsData) {
      var row = availabilityTable.insertRow();
      var cell1 = row.insertCell();
      cell1.textContent = district;
      for (var bloodGroup in districtsData[district]) {
        var cell = row.insertCell();
        cell.textContent = districtsData[district][bloodGroup];
      }
    }
  }