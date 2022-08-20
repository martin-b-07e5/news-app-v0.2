import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MyNavBarComponent } from "./components/MyNavBarComponent";
import { LandingPage } from "./pages/LandingPage";
import { ErrorPage } from "./pages/ErrorPage";

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
          <Route path="/news-app-v0.2" element={<LandingPage />} />
          <Route path="/buscador" element={<LandingPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
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
