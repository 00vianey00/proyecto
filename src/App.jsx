const App = () => {
    const persona = {
    nombre: "Vianey",
    apellido: "sebastian reyes",
    edad: 22,
    direccion:{
    calle: "principal",
    numExt: 1,
    numint: "",
    ciudad: "santa margarita yogopi",
    }
    };

    const contactoPersona = {
    telefono: "283 117 01 99",
    email: "isc18350337@gmail.com",
    web: "www.thesimpsons.com",
    };

    const infoPersona = {...persona,...contactoPersona, empresa: "Disney"};
    infoPersona.apodo = "Bart";

    infoPersona.telefono = "555 555 5555";

    console.table(infoPersona);
    
    const{edad, nombre, apellido}= persona;
    const{calle, numExt, numint,ciudad,} = persona.direccion;
    const humanos = ["perfecto", "Maria Antonia","willian", "perfecto"];
    const[padre, madre, hermano1, hermano2]= humanos;
    const mascotas = ["Santa's helper", "show ball"]
    const familia =[...humanos,...mascotas, "Milhouse"]
    console.log(familia) 
    
    return (
    <div className="App">
    <h1>{`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años y vivo en ${calle} numero ${numExt},${ciudad}`}</h1>
    <br />
    {"Mi familia la conforman:"}
    <ul>
    <li>{`Mi padre: ${padre}`}</li>
    <li>{`Mi madre: ${madre}`}</li>
    <li>{`Mis hermanos: ${hermano1} y ${hermano2}`}</li>
    </ul>
    </div>
    );
    }
    export default App;
    
        
    