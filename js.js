var msgcookies= document.getElementById('cookies-msg')
function aceito(){
    localStorage.lgpt = "sim"
    msgcookies.classList.remove('mostrar')
}
if(localStorage.lgpt == 'sim'){
    msgcookies.classList.remove('mostrar')  

}else{
    msgcookies.classList.add('mostrar')
}