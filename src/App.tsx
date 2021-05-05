import Header from './components/Header'
import Home from './components/Home';
import { ModalCreateLinkProvider } from './contexts/ModalCreateLinkContext';
import { ModalDeleteLinkProvider } from './contexts/ModalDeleteLinkContext';

function App() {
  return (
    <div>
      <ModalCreateLinkProvider>
        <ModalDeleteLinkProvider>
          <Header />
          <Home />
        </ModalDeleteLinkProvider>
      </ModalCreateLinkProvider>
    </div>
  );
}

export default App;
