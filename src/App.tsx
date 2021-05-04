import Header from './components/Header'
import Home from './components/Home';
import { ModalCreateLinkProvider } from './contexts/ModalCreateLinkContext';

function App() {
  return (
    <div>
      <ModalCreateLinkProvider>
        <Header />
        <Home />
      </ModalCreateLinkProvider>
    </div>
  );
}

export default App;
