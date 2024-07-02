document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const addressInput = document.getElementById("address");
    const paymentInputs = document.getElementsByName("payment");
    const saveButton = document.getElementById("saveButton");
  
    function checkFormInputs() {
        const nameFilled = nameInput.value.length > 0;
        const addressFilled = addressInput.value.length > 0;
        let paymentSelected = false;
    
        for (let i = 0; i < paymentInputs.length; i++) {
          if (paymentInputs[i].checked) {
            paymentSelected = true;
            break;
          }
        }
    
        if (nameFilled && addressFilled && paymentSelected) {
          saveButton.style.display = "block";
        } else {
          saveButton.style.display = "none";
        }
      }
    nameInput.addEventListener("input", checkFormInputs);
    addressInput.addEventListener("input", checkFormInputs);
    paymentInputs.forEach(paymentInput => {
      paymentInput.addEventListener("change", checkFormInputs);
    });
  
    // Initial check to set button visibility on page load
    checkFormInputs();
  });

  document.getElementById("saveButton").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const paymentInputs = document.getElementsByName("payment");
    let selectedPaymentMethod = "";
  
    if (paymentInputs[0].checked) {
      selectedPaymentMethod = paymentInputs[0].value;
    } else if (paymentInputs[1].checked) {
      selectedPaymentMethod = paymentInputs[1].value;
    } else if (paymentInputs[2].checked) {
      selectedPaymentMethod = paymentInputs[2].value;
    }
  
    const userInfo = {
      name: name,
      address: address,
      paymentMethod: selectedPaymentMethod
    };
  
    localStorage.setItem("userInfo", JSON.stringify(userInfo));


  });
  