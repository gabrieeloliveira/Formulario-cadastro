function clickar() {
    
    
    let firstName = document.querySelector('input#firstname').value.trim()
    let lastName = document.querySelector('input#lastname').value.trim()
    let email = document.querySelector('input#email').value.trim()
    let number = document.querySelector('input#number').value.trim()
    let password = document.querySelector('input#password').value.trim()
    let confirmPassword = document.querySelector('input#Confirmpassword').value.trim()
    let gender = document.querySelector('input[name="gender"]:checked')

    const allFilled = (
        firstName && lastName && email && number && password && confirmPassword && gender
    )

    if (allFilled) {
        if (password === confirmPassword){
            alert('Tudo Certo')
        } else {
            alert('[CONFIRME SENHA ESTA DIFERENRE]')
            password.focus()
        }
    } 
    
    
   
    
}