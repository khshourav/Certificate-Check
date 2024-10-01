

function call(){
    fetch('certificates.json')
  .then(response => response.json())
  .then(data => {
    // Pass the data to your check function
    check(data);
  })
  .catch(error => console.error('Error fetching the data:', error));
}




  function check(certificatesData) {
    
    let cNumber = document.getElementById('cNumber').value;
  
    // Find the certificate by matching the input number
    let certificate = certificatesData.find(cert => cert.certificateNumber === cNumber);
  
    if (certificate) {
      // Display the certificate information
      document.getElementById('oName').innerText = certificate.organizationName;
      document.getElementById('oddress').innerText = certificate.address;
      document.getElementById('issueDate').innerText = certificate.issueDate;
      document.getElementById('expiryDate').innerText = certificate.expiryDate;
  
      document.querySelector('.result').classList.remove('hide');
      document.querySelector('.custom-table').classList.remove('hide');
  
      document.getElementById('verification').classList.remove('result-false');
      document.getElementById('verification').classList.add('result-true');
      document.getElementById('verification').innerText = "Verification Successful!";
    } else {
      // Verification failed
      document.querySelector('.result').classList.remove('hide');
      document.querySelector('.custom-table').classList.add('hide');
      document.getElementById('verification').classList.remove('result-true');
      document.getElementById('verification').classList.add('result-false');
      document.getElementById('verification').innerText = "Verification Failed!";
    }
  }
  

// function check(){
//     let certificate =document.getElementById('Certificate').value;
//     let cNumber = document.getElementById('cNumber').value;

//     let issued = ['1','2','3'];
    
//     for(let i=0; i<issued.length; i++){
//         if(cNumber === issued[i]){
            
//             document.querySelector('.result').classList.remove('hide');
//             document.querySelector('.custom-table').classList.remove('hide');

//             document.getElementById('verification').classList.remove('result-false');
//             document.getElementById('verification').classList.add('result-true');
//             document.getElementById('verification').innerText = "Verification Successful!";
//             return;
//         }
//     }
//     document.querySelector('.result').classList.remove('hide');
//     document.querySelector('.custom-table').classList.add('hide');
//     document.getElementById('verification').classList.remove('result-true');
//     document.getElementById('verification').classList.add('result-false');
//     document.getElementById('verification').innerText = "Verification Failed!";

    
// }