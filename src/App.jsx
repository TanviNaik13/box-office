import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { GlobalTheme } from './Theme';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalTheme>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="starred" element={<Starred />} />
              </Route>
              <Route path="show/:showId" element={<Show />} />

              {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route>
          <Route element={<PageLayout />}>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/tos" element={<Tos />} />
          </Route>
          <Route path="contact-us" element={<Contact />} /> */}
            </Routes>
          </BrowserRouter>
        </GlobalTheme>
      </QueryClientProvider>
    </>
  );
}

export default App;
