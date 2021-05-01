import Header from './components/Header'
import Link from './components/Link';
import { ModalCreatePostProvider } from './contexts/ModalCreatePostContext';

function App() {
  return (
    <div>
      <ModalCreatePostProvider>
        <Header />
        <Link />
      </ModalCreatePostProvider>
    </div>
  );
}

export default App;
