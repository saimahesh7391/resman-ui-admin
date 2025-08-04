import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminRoutes />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
