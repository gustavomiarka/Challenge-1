function copy() {
    let copyText = document.querySelector(".lateral");
    copyText.select();
    document.execCommand("copy");
    copyText.value = '';
  }
  
  document.querySelector("#copy").addEventListener("click", copy);