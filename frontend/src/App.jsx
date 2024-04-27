import Footer from "./component/Footer/footer"
import Header from "./component/Header/header"
import LandingPage from "./screens/landingPage/landingPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <LandingPage/>
      </main>
      <Footer />
    </>
  );
}

export default App
