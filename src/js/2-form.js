const formData = {
    email: "",
    message: ""
  };
  const STORAGE_KEY = "feedback-form-state";
  const form = document.querySelector(".feedback-form");
  const emailInput = form.querySelector("input");
  const textarea = form.querySelector("textarea");
  
 
  populateForm();
  
  
  form.addEventListener("input", handleFormInput);
  
  
  form.addEventListener("submit", handleFormSubmit);
  
  
  function handleFormSubmit(event) {
    event.preventDefault();
  
    
    if (!emailInput.value.trim() || !textarea.value.trim()) {
      alert("Fill please all fields");
      return;
    }
  
    console.log("Form Data:", {
      email: emailInput.value.trim(),
      message: textarea.value.trim()
    });
  
   
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
  }
  

  function handleFormInput(event) {
    const { name, value } = event.target;
  
    
    formData[name] = value.trim();
  
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  
 
  function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
  
    if (savedData) {
      const parsedData = JSON.parse(savedData);
  
     
      emailInput.value = parsedData.email || "";
      textarea.value = parsedData.message || "";
  
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
    }
  }








