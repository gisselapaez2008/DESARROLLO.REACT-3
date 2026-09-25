import './App.css'

function App() {
  return (
    <div className="app">

      <h1>Hola, soy Gissela Páez</h1>

      <p className="descripcion">
        Tengo 18 años y soy estudiante de tercer semestre
        de Ingeniería de Sistemas.
      </p>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="Logo de React"
        className="imagen"
      />

      <h2>Sobre mí</h2>

      <p>
        Me interesa aprender sobre programación y desarrollo web.
        Actualmente estoy conociendo React y sus diferentes herramientas
        para crear páginas web.
      </p>

      <div className="tarjeta">
        <h3>Mi carrera</h3>
        <p>Ingeniería de Sistemas</p>
      </div>

      <div className="tarjeta">
        <h3>Semestre</h3>
        <p>Tercer semestre</p>
      </div>

      <div className="tarjeta">
        <h3>Edad</h3>
        <p>18 años</p>
      </div>

    </div>
  )
}

export default App