



function check(){
    let certificate =document.getElementById('Certificate').value;
    let cNumber = document.getElementById('cNumber').value;

    let issued = ['1','2','3'];
    
    for(let i=0; i<issued.length; i++){
        if(cNumber === issued[i]){
            
            document.querySelector('.result').classList.remove('hide');
            document.querySelector('.custom-table').classList.remove('hide');

            document.getElementById('verification').classList.remove('result-false');
            document.getElementById('verification').classList.add('result-true');
            document.getElementById('verification').innerText = "Verification Successful!";
            return;
        }
    }
    document.querySelector('.result').classList.remove('hide');
    document.querySelector('.custom-table').classList.add('hide');
    document.getElementById('verification').classList.remove('result-true');
    document.getElementById('verification').classList.add('result-false');
    document.getElementById('verification').innerText = "Verification Failed!";

    
}