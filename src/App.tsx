import Header from './components/Header'
import Home from './components/Home';
import { ModalCreateLinkProvider } from './contexts/ModalCreateLinkContext';
import { ModalDeleteLinkProvider } from './contexts/ModalDeleteLinkContext';
import { MoreLinkProvider } from './contexts/MoreLinkContext';

function App() {
  return (
    <div>
      <ModalCreateLinkProvider>
        <ModalDeleteLinkProvider>
          <MoreLinkProvider>
            <Header />
            <Home />
          </MoreLinkProvider>
        </ModalDeleteLinkProvider>
      </ModalCreateLinkProvider>
    </div>
  );
}

export default App;
