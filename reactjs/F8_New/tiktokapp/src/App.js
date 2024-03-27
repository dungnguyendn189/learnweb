import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((e, index) => {
            const Page = e.component;
            let Layout = DefaultLayout;
            if (e.layout) {
              Layout = e.layout;
            } else if (e.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={e.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
