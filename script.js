function mOver(event) {
    const icon = event.target
    icon.style.opacity = 0.5//set opacity
  }
  
  function mOut(event) {
    const icon = event.target
    icon.style.opacity = 1//reset opacity
  }
  
  const icons = document.querySelectorAll('.icon')
  icons.forEach(icon => {
    icon.addEventListener('mouseover', mOver);
    icon.addEventListener('mouseout', mOut);
  });
  
  function redirect() {
    const socialMediaSelect = document.getElementById('smSelect');
    const selectedValue = socialMediaSelect.value;
    let smUrl;
  
    // Redirect
    if (selectedValue === 'Instagram') {
        smUrl = 'https://www.instagram.com/richard83457/';
    } else if (selectedValue === 'Github') {
      smUrl = 'https://github.com/Richard4375';
    } else {
      //no option
      return;
    }  
    window.open(smUrl, '_blank');
  }
  