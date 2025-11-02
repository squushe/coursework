//------------------------------------------ main page -------------------------------------
// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import MovieTemplatePage from "./pages/MovieTemplatePage";

// function App() {
//   return (
//     <div className="bg-slate-900 text-white flex flex-col min-h-screen">
//       <Header />
//       <HomePage />
//       <Footer />
//     </div>
//   );
// }

// export default App;
//----------------------------------------------------------------------------------------

//------------------------------------------ page movie detailed info-------------------------------------
// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import MovieTemplatePage from "./pages/MovieTemplatePage";

// function App() {
//   return (
//     <div className="bg-slate-900 text-white flex flex-col min-h-screen">
//       <Header />

//       <MovieTemplatePage />

//       <Footer />
//     </div>
//   );
// }

// export default App;
// -----------------------------------------------------------------------------------

//------------------------------------------ page booking ticket ------------------------------------------

// import React from "react";
// import BookingPage from "./pages/BookingPage";

// function App() {
//   return (
//     <div className="bg-slate-900 text-white flex flex-col min-h-screen">
//       <BookingPage />
//     </div>
//   );
// }

// export default App;
//-------------------------------------------------------------------------------------
//-------------- my ticket ---------------------------------
// import React from "react";
// import MyTicketsPage from "./pages/MyTicketsPage";

// function App() {
//   return (
//     <div className="bg-slate-900 text-white flex flex-col min-h-screen">
//       <MyTicketsPage />
//     </div>
//   );
// }

// export default App;
//---------------Куплений квиток-------------
// import React from "react";
// import TicketConfirmationPage from "./pages/TicketConfirmationPage";

// export default function App() {
//   return <TicketConfirmationPage />;
// }
//------------------------------
import React from "react";
import AuthPage from "./pages/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <AuthPage />;
}

export default App;
