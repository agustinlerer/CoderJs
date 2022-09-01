
class Subscriptor
{
     constructor(obj) {
        this.nombre  = obj.nombre;
        this.clave  = obj.clave;
        this.email  = obj.email;
    }
}


let ArrayDeSubscriptores= [];
VerificaryCargar()
console.log(ArrayDeSubscriptores);

let botonRegistrar = document.getElementById("btnSingup")
botonRegistrar.onclick = () =>{

    let nombreIngresado = document.getElementById('txtUser').value;
    let claveIngresada = document.getElementById('txtpassaword').value;
    let nombreyaregistrado= ArrayDeSubscriptores.find((ArrayDeSubscriptores)=> ArrayDeSubscriptores.nombre == nombreIngresado);
    if(nombreyaregistrado){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre ya en uso',
          })
          document.getElementById('txtUser').value="";
          document.getElementById('txtpassaword').value="";
        
    }
    else{
        let objGenerico={nombre : nombreIngresado , clave : claveIngresada }
        ArrayDeSubscriptores.push(new Subscriptor(objGenerico));
        Guardar()  
        document.getElementById('txtUser').value="";
        document.getElementById('txtpassaword').value="";
    }



   
}
function Guardar()
{
    localStorage.setItem("ListadoSubscriptores",JSON.stringify( ArrayDeSubscriptores));
}
let botonlogin=document.getElementById("btnLogin");
    botonlogin.onclick = () => {
        let arrayAuxiliar = JSON.parse(localStorage.getItem("ListadoSubscriptores"));
        let nombreIngresado = document.getElementById('Userlogin').value;
        let claveIngresada = document.getElementById('passwordLogin').value;
        let nombreregistro = arrayAuxiliar.find((arrayAuxiliar)=> arrayAuxiliar.nombre == nombreIngresado && arrayAuxiliar.clave == claveIngresada)
        if(nombreregistro){
            window.location.href = "./paginas/paginadecompra.html";
          

        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Datos incorrectos',
              })
        }
}

function VerificaryCargar()
{
    let arrayAuxiliar=JSON.parse(localStorage.getItem("ListadoSubscriptores"));

    if(arrayAuxiliar)
    {
        for(elemento of arrayAuxiliar )
        {
            ArrayDeSubscriptores.push(new Subscriptor(elemento));
            
        }
    }
}