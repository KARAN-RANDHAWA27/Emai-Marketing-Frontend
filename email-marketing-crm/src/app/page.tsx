"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNavbar from "@/components/TopNavbar";
import { Provider } from "react-redux";
import store from "@/redux/store"; // Import Redux store

const Home = () => {
  return (
    <Provider store={store}>
      {/* Wrap with Redux Provider */}
      <div className="flex flex-col min-h-screen">
        <TopNavbar />
        <div className="flex flex-row flex-1">
          <Navbar />
          <main className="flex-1 p-6" style={{ marginLeft: "3rem" }}>
            <h1>Welcome to the Home Page</h1>
            <p>This is where your main content goes.</p>
          </main>
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default Home;
