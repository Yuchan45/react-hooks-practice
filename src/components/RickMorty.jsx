
import { useState, useEffect } from "react";


function RickMorty() {
    // Seteo el estado 'personajes' y tmb obtengo una funcion 'setPersonajes' la cual me permite modificar el elemento 'personajes'.
    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        // Cuando pasamos como 2do parametro al (useEffect) un array vacio, estamos haciendo un componentDidMount.
        console.log('%cSe montó el componente', 'color:green');
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setPersonajes(data.results)
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        // Cuando pasamos como 2do parametro al (useEffect) un array de estados, estamos haciendo un componentDidUpdate a los estados del componente en dicho array.
        // En este caso, estaria al tanto de los cambios de estado de 'personajes'.

        console.log('%cSe actualizó el componente', 'color: #d9d900');

    }, [personajes, pagina]);

    useEffect(() => {
        // Cuando queremos hascer un componentWillUnmount, tenemos que usar un return.
        return() => {
            console.log('%cSe desmontó el componente', 'color: red')
        }

    }, []);

    async function loadMore() {     
        let updatedPage = pagina +1;
        setPagina(updatedPage);

        fetch(`https://rickandmortyapi.com/api/character?page=${updatedPage}`)
            .then(response => response.json())
            .then(data => {
                setPersonajes(data.results);
            })
            .catch(error => console.error(error));
    };


    return(
        <>  
            <h2>Soy el componente 'Rick & Morty'</h2>
            <ul>
                {   personajes.length === 0 && <p>Cargando...</p>   }
                
                {
                    personajes.map((personaje, i) => {
                        return(
                            <li key={personaje+i}>
                                <h3>{personaje.name}</h3>
                                <img src={personaje.image} alt="avatar" width="150" />
                            </li>
                        )
                    })

                }
                <button onClick={loadMore}>Siguiente página</button>
            </ul>
        </>
    );

};

export default RickMorty;