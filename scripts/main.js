function formValidation(){
    const firstNameBox = document.getElementById('firstNameBox');
    const lastNameBox = document.getElementById('lastNameBox');
    const messageBox = document.getElementById('messageBox');

    const firstName = firstNameBox.value;
    const lastName = lastNameBox.value;
    const message = messageBox.value;

    if(firstName === ''){
        alert('חסר שם פרטי');
        firstNameBox.style.backgroundColor = 'pink';
        firstNameBox.focus();
        return false; 
    }
    
    else if(lastName === ''){
        alert('חסר שם משפחה');
        lastNameBox.style.backgroundColor = 'pink';
        lastNameBox.focus();
        return false; 
    }
    
    else if(message === ''){
        alert('חסרה הודעה');
        messageBox.style.backgroundColor = 'pink';
        messageBox.focus();
        return false; 
    }

    return true;
}