import React , {useState}from 'react';
import uniqid from 'uniqid'


const ListadoNombres=() =>{

const [nombre, setNombre]= useState("");

const [lista,listaNombres]=useState([]);

const [edicion,setEdicion]=useState(false);

const [id,setId]=useState("");


const agregarNombre =(e) =>{
       e.preventDefault();
       setEdicion(false);

       if(nombre!==""){ 
        const nuevoNombre={
            id:uniqid(),
            nomb: nombre
        }
       listaNombres([...lista,nuevoNombre]);
       setNombre("");
        }
        else{alert  ("no se ingreso ningun nombre")}
}
const borrarNombre= (id) =>{
        const nuevoArreglo = lista.filter(item=> item.id!==id);
        listaNombres(nuevoArreglo);

}

const editar=(item)=>{
    setEdicion(true);
    setNombre(item.nomb);
    setId(item.id);

}
const editarNombre=(e)=>{
    e.preventDefault();
    const otroArreglo = lista.map ( item => item.id===id ? {id:id , nomb:nombre} : item);

    listaNombres(otroArreglo);

}
return (
<div>
    <div className="row">
        
            <div className="col "><h1>Listado de nombres:</h1>
            <ul className="list-group">
                    {
                        lista.map ( item =>
                            <li key= {item.id} className="list-group-item"> {item.nomb}  
                            <button className="btn btn-danger float-right"
                             onClick={() => {borrarNombre(item.id)}}> Borrar </button>
                            

                             <button className="btn btn-info float-right"
                             onClick={() => {editar(item)}}> editar </button>
                           </li>
                            )
                    }     
            </ul>
                
            </div>

            <div className="col">
                <h1>Formulario para agregar a lista:</h1>
                <form className="form-group" onSubmit= { edicion ? editarNombre :agregarNombre } >
                     <input value ={nombre}  onChange={ (e) => {setNombre(e.target.value);}} className="form-control mb-3 "  type="text" placeholder="Ingrese su nombre"/>
                     <input className="btn btn-info btn-block" type="submit" value= { !edicion ? "Ingresar persona al sistema" : "Editar nombre" }   />
                </form>
            </div> 
    </div>
</div>
);


}



export default ListadoNombres;