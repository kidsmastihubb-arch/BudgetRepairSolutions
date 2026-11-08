import { Layout } from '@/components/Layout';
import { renderRoute } from '@/routes';
import { usePathname } from '@/lib/router';

function App() {
  const pathname = usePathname();

  return <Layout>{renderRoute(pathname)}</Layout>;
}

export default App;
