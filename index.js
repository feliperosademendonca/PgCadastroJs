

var importUsuarios= require ('./usuariosCadastrados.js');
let usuarios= importUsuarios
 console.log(usuarios)

function cadastro(){
let input1=document.getElementById('idEmail').value;
let input2=document.getElementById('idSenha').value;
let usr={email:input1,senha:input2};
console.log("=======inputs===========");
console.log("usr informado:");
console.log("email:"+usr.email+", senha: "+usr.senha);
 
// verifica se usuário já existe na lista

    if (usuarios.some(({email}) => email === input1)) {
            console.log("email ja cadastrado")  
        
        }else{
            usuarios.push(usr);
            console.log(usuarios)
        
    }
 }
