import React,{Fragment} from 'react'
import './styles/styles.scss';
import Curso from './Curso'


const App = () => (
  
<>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://s03.s3c.es/imag/_v0/770x420/5/5/a/490x_city-london-istock.jpg" alt=""/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Paolo Gonzales</p>
          <p> Diseñando con React</p>
          <a href="https://ed.team" className="button">Likead</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    <Curso />
  </div>

</>

)



export default App;


//Reglas
//1: toda etiqueta debe cerrarse
//2: Los componentes deben devolver un solo elemento  padre
//3: para devolver dos  o mas div se debe encerrar dentro de un " <Fragment>  </Fragment>"
//4: Fragment =>      "   <> hijos </>   "
//5: img simepre se cierra  " <img src:"lalalala" /> "
//6: class pasa a ser className
//7: for  pasa a ser => htmlFor  
//8: No se puede utilizar if-else-while 