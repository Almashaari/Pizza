import ReactDOM from "react-dom/client";
import Home from "./component/Home";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);