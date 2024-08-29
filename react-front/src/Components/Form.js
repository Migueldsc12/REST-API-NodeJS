import React from "react";

const Form = ({book, setBook}) => {

    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }
    
    let { titulo, autor, edicion } = book;

    const handleSubmit = () => {
        edicion = parseInt(edicion, 10)
        
        //Validacion
        if(titulo === '' || autor === '' || edicion <= 0){
            alert('Todos los campos son obligatorios')
            return;
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(response => response.json())
        .then(response => console.log(response))

        //Reiniciar el form
        setBook({
            titulo: '',
            autor: '',
            edicion: 0
        })


    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="titulo" className="form-label">Titulo</label>
                <input value={titulo} name="titulo" onChange={handleChange} type="text" id='titulo' className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="autor" className="form-label">Autor</label>
                <input value={autor} name="autor" onChange={handleChange} type="text" id='autor' className="form-control"/>
            </div>

            <div className="mb-3">
                <label htmlFor="edicion" className="form-label">Edicion</label>
                <input value={edicion} name="edicion" onChange={handleChange} type="number" id='edicion' className="form-control"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;