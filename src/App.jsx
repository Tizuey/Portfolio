import Sidebar from "./Componentes/Sidebar/Sidebar"
import Formulario from "./Componentes/Formulario/Formulario"





function App() {
   


  return (
    <>

<main className="back"></main>
      <div className="l-app">



        <Sidebar/>



         {/* _____ GitHub e Linkedin _____ */}
        <main className="back">
          <div className="img"></div>
          <div className="bg__profile">
            <a className="github" href="https://github.com/Tizuey"></a>
            <a className="linkedin" href="https://www.linkedin.com/in/julia-tizuey-hosoy-convertingcoffeeintocode/"></a>
          </div>
        </main>


      {/* _____ Easter Egg _____ */}
        <div className="since">
        <a className="coffee" href="https://julialang.org"></a>
        <a className="coffee" href="https://julialang.org"></a>
        </div>

       {/* ______ Time Line _______ > */}

      <div className="timeline" id="aboutMe"></div>

          

          {/* ______Formulario_____ */}
          <div className="l-page" id="Talk">
   
            <section className="forms">

              <div><h1 className="title">Talk to me</h1></div>

              

              <Formulario/>
              
             

  
            </section>
            

            <footer className="u-my-3">
              <span>Todos os direitos reservados fulano.</span>
            </footer>

          </div>

        </div>
      
    </>
  )
}

export default App
