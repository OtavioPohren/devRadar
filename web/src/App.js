import React from 'react';

import './global.css';
import './App.css';


//componente (sempre com inical maiúscula): Bloco isolado de HTML, 
//CSS e JS, o qual não interfere no restante da apĺicação
//estado:Informações mantidas pelo componente (Lembrar: Imutabilidade)
//propriedade: Informações que um componente PAI passa para o componente FILHO

function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <label></label>
        </form>
      </aside>
      <main>

      </main>
    </div>

  );
}

export default App;