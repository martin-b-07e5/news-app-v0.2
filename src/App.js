import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MyNavBarComponent } from "./components/MyNavBarComponent";
import { LandingPage } from "./pages/LandingPage";
import { ErrorPage } from "./pages/ErrorPage";
import { NewDetails } from "./pages/NewDetails";

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        {<MyNavBarComponent />}

        <Link to="/">
          <h1 className={styles.title}>News</h1>
        </Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />

          {/* 👇usamos el COMPONENTE (cdo HACEMOS CLICK en una new)*/}
          {/* al path le pasamos un parametro (:newId) que es dinámico 
                y lo capturamos en NewDetails*/}
          {/* "newId" es el identificador de la película */}
          {/* https://reactrouter.com/docs/en/v6/hooks/use-params */}
          <Route path="/news/:newId" element={<NewDetails />} />
        </Routes>
      </main>

      {/* <NewsList /> */}
    </Router>
  );
}

export default App;

function AboutUs() {
  return (
    <>
      <main className={styles.myAbout}>
        <h2>Who I'm?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav className={styles.myHome}>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
