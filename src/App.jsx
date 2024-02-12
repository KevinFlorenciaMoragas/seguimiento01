import { useState } from 'react'
import './App.css'
import Tarea from './Tarea'
import Header from './Header'
function App() {

  const [tareasArray, setTareasArray] = useState([])
  const [tarea, setTarea] = useState("")

  function enviar(event) {
    event.preventDefault()
    if (!tarea.trim()) return
    setTareasArray([...tareasArray, tarea])
    setTarea("")
  }

  const eliminar = (index) => {
    setTareasArray(tareasArray.filter((_, i) => i !== index))
  }



  return (

    <>
      <Header></Header>
      <div className='mt-5'>
        <section className='row'>
          <div className='col-lg-4 offset-lg-2 '>
            <form onSubmit={enviar}>
              <div className="mb-3">
                <label htmlFor="tasca" className="form-label">Nueva Tarea</label>
                <input onChange={e => setTarea(e.target.value)} type="text" name='tasca' className="bg-secondary-subtle form-control" id="tasca" aria-describedby="tasca">
                </input>
              </div>
              <button className='btn btn-primary' type="submit" >Submit</button>
            </form>
          </div>
          <div className='col-lg-6'>
            <h2>Tareas por hacer</h2>
            {
              tareasArray.map((e, i) => {
                return (
                  <div key={i} className='p-2'>
                    <Tarea e={e} i={i} eliminar={eliminar}></Tarea>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default App
