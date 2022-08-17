let yearPresente = new Date().getFullYear()

class Persona{ 

    constructor(nombre, sexo, peso, altura, yearNacimiento, edad, DNI ){
        this.nombre = nombre;   
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.yearNacimiento = yearNacimiento;
        this.edad = edad;
        this.DNI = DNI;
        
        
        
        
         }
        mostrarGeneracion(){
            if(this.yearNacimiento>=1930 && this.yearNacimiento<=1948){
                alert("La persona pertenece a la generación Silent Generation, Los niños de la posguerra.")
                alert("El rasgo característico de esta generación es la Austeridad")
               
            }
            else if(this.yearNacimiento>=1949 && this.yearNacimiento<=1968){
                alert("La persona pertenece a la generación Baby Boom.")
                alert("El rasgo característico de esta generación es la Ambición ")
               
            }
            else if(this.yearNacimiento>=1969 && this.yearNacimiento<=1980){
                alert("La persona pertenece a la generación X.")
                alert("El rasgo característico de esta generación es la Obsesión por el éxito")
                
            }
            else if(this.yearNacimiento>=1981 && this.yearNacimiento<=1993){
                alert("La persona pertenece a la generación Y, Millennials.")
                alert("El rasgo característico de esta generación es la Frustración")
                 }
            else if(this.yearNacimiento>=1994 && this.yearNacimiento<=2010){
                alert("La persona pertenece a la generación Z.<br>")
                alert("El rasgo característico de esta generación la Irreverencia")
            }           
            else{
                alert("No hay una generación definida para su año de nacimiento.")
            }
        }
    
        
        mostrarDatos(){
            alert(`La persona tiene las siguientes características: 
            1 - Nombre: ${this.nombre}
            2 - Sexo: ${this.sexo}
            3 - Peso: ${this.peso} kgs
            4 - Altura: ${this.altura} cms
            5 - Año de nacimiento: ${this.yearNacimiento}
            7 - Edad: ${this.edad}
            6 - DNI: ${this.DNI}
            
            `)
        
        }
        
        set modificarNombre(nuevoNombre){
            this.nombre = nuevoNombre
        }
        set modificarSexo(nuevoSexo){
            this.sexo = nuevoSexo
        }
        set modificarPeso(nuevoPeso){
            this.peso = nuevoPeso
        }
        set modificarAltura(nuevaAltura){
            this.altura = nuevaAltura
        }
        
        set modificarYearNacimiento(yearNacimiento){
            this.yearNacimiento = yearNacimiento
        }
        set modificarEdad(nuevoEdad){
            this.edad = nuevoEdad
        }

        set modificarDNI(nuevoDNI){
            this.DNI = nuevoDNI
        }

  
}

function newPersona (e){
    e.preventDefault();
    const persona1 = new Persona ('xxx','xxx','xxx','xxx','xxx','xxx')
  persona1.modificarNombre = document.getElementsByClassName('inputNombre')[0].value;
  persona1.modificarSexo = document.getElementsByClassName('inputSexo')[0].value;
  persona1.modificarPeso = document.getElementsByClassName('inputPeso')[0].value;
  persona1.modificarAltura = document.getElementsByClassName('inputAltura')[0].value;
  persona1.modificarYearNacimiento = document.getElementsByClassName('inputYearNacimiento')[0].value;
  persona1.modificarEdad = document.getElementsByClassName('inputEdad')[0].value;
  persona1.modificarDNI = document.getElementsByClassName('inputDNI')[0].value;
  persona1.mostrarDatos()
  persona1.mostrarGeneracion()
  persona1.esMayorDeEdad()
  
}

function verGeneracion (){
    let persona2 = new Persona (00, 00, 00, 00, 00, 00, 00,00)
    persona2.modificarYearNacimiento = document.getElementsByClassName('inputYearNacimiento')[0].value;
    persona2.mostrarGeneracion()
    
}


function verDatos (){
    let persona3 = new Persona (00, 00, 00, 00, 00, 00, 00,00)
    persona3.modificarNombre = document.getElementsByClassName('inputNombre')[0].value;
    persona3.modificarSexo = document.getElementsByClassName('inputSexo')[0].value;
    persona3.modificarPeso = document.getElementsByClassName('inputPeso')[0].value;
    persona3.modificarAltura = document.getElementsByClassName('inputAltura')[0].value;
    persona3.modificarYearNacimiento = document.getElementsByClassName('inputYearNacimiento')[0].value;
    persona3.modificarEdad = document.getElementsByClassName('inputEdad')[0].value;
    persona3.modificarDNI = document.getElementsByClassName('inputDNI')[0].value;
    persona3.mostrarDatos()
    persona3.esMayorDeEdad()
    
}


/*


let yearPresente = new Date().getFullYear()

class Persona{ 

    constructor(nombre, sexo, peso, altura, yearNacimiento, DNI){
        this.nombre = nombre;   
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.yearNacimiento = yearNacimiento;
        this.DNI = DNI
         }
        mostrarGeneracion(){
            if(this.yearNacimiento>=1930 && this.yearNacimiento<=1948){
                alert("La persona pertenece a la generación Silent Generation, Los niños de la posguerra.<br>")
                alert("El rasgo característico de esta generación es: <br>")
                alert(`<img src="../img/austeridad.jpg" alt="generaciones">`)

            }
            else if(this.yearNacimiento>=1949 && this.yearNacimiento<=1968){
                alert("La persona pertenece a la generación Baby Boom.<br>")
                alert("El rasgo característico de esta generación es: <br>")
                alert(`<img src="../img/ambicion.jpg" alt="generaciones">`)
            }
            else if(this.yearNacimiento>=1969 && this.yearNacimiento<=1980){
                alert("La persona pertenece a la generación X.<br>")
                alert("El rasgo característico de esta generación es: <br>")
                alert(`<img src="../img/obsesion.jpg" alt="generaciones">`)
            }
            else if(this.yearNacimiento>=1981 && this.yearNacimiento<=1993){
                alert("La persona pertenece a la generación Y, Millennials.<br>")
                alert("El rasgo característico de esta generación es: <br>")
                alert(`<img src="../img/frustracion.jpg" alt="generaciones">`)
            }
            else if(this.yearNacimiento>=1994 && this.yearNacimiento<=2010){
                alert("La persona pertenece a la generación Z.<br>")
                alert("El rasgo característico de esta generación es: <br>")
                alert(`<img src="../img/irreverencia.jpg" alt="generaciones">`)
            }
            else{
                document.write("No hay una generación definida para su año de nacimiento.<br>")
            }
        }
        
        esMayorDeEdad(){
            if(yearPresente - this.yearNacimiento >=18 ){
                document.write(this.nombre+" es mayor de edad.<br>")
            }
            else{
                document.write(this.nombre+" es menor de edad.<br>")
            }
        
        }
        mostrarDatos(){
            alert(`<h5>La persona tiene las siguientes características: <h5>
            <ol>
            <li>Nombre: ${this.nombre}</li> 
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso} kgs</li>
            <li>Altura: ${this.altura} cms</li>
            <li>Año de nacimiento: ${this.yearNacimiento}</li>
            <li>Edad: ${this.DNI}</li>
            </ol>
            `)
        
        }
        set modificarNombre(nuevoNombre){
            this.nombre = nuevoNombre
        }
        set modificarSexo(nuevoSexo){
            this.sexo = nuevoSexo
        }
        set modificarPeso(nuevoPeso){
            this.peso = nuevoPeso
        }
        set modificarAltura(nuevaAltura){
            this.altura = nuevaAltura
        }
        
        set modificarYearNacimiento(yearNacimiento){
            this.yearNacimiento = yearNacimiento
        }
        set modificarDNI(nuevoDNI){
            this.DNI = nuevoDNI
        }


}

function newPersona (){
   let persona1 = new Persona ('xxx','xxx','xxx','xxx','xxx','xxx')
  persona1.modificarNombre = document.getElementsByClassName('inputNombre')[0].value;
  persona1.modificarSexo = document.getElementsByClassName('inputSexo')[0].value;
  persona1.modificarPeso = document.getElementsByClassName('inputPeso')[0].value;
  persona1.modificarAltura = document.getElementsByClassName('inputAltura')[0].value;
  persona1.modificarYearNacimiento = document.getElementsByClassName('inputYearNacimiento')[0].value;
  persona1.modificarDNI = document.getElementsByClassName('inputDNI')[0].value;
  persona1.mostrarDatos()
  }

  function saberGeneracion(){
  persona1.mostrarGeneracion()
}



  
*/

 

