import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-slate-900 text-white flex flex-col min-h-screen">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
