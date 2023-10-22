import Conteudo from "./Componentes/Conteudo";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Conteudo />
      <Analytics />
    </div>
  );
}

export default App;
