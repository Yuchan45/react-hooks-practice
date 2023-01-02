import { useState } from "react";


function Frutas() {
    // useState devuelve un array. 1er pos del array es el array pasado por paramentro. 
    // Y la 2da pos del array es una funcion que te permite modificar el array pasado por parametro.
    const [listadoFrutas, setListadoFrutas] = useState(['Banana', 'Manzana']); 


    function agregarFruta(e) {
        e.preventDefault();
        let nuevaFruta = e.target.nuevaFrutaInput.value;
        setListadoFrutas([...listadoFrutas, nuevaFruta]); // Agrego las frutas que ya estaban, y luego agrego la nueva.
        e.target.nuevaFrutaInput.value = '';
    }

    return(
        <>  
            <h2>Soy el componente 'Frutas'</h2>
            <ul>
                {
                    listadoFrutas.map((fruta, i)=> {
                        return <li key={fruta+i}>{fruta}</li>
                    })
                }
            </ul>
            <form onSubmit={agregarFruta}>
                <input name="nuevaFrutaInput" type="text" /> <br />
                <button>Añadir nueva fruta</button>
            </form>
        </>
    );

};

export default Frutas;