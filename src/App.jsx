import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/ui/footer';
import { Navbar } from '@/components/ui/navbar';

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
