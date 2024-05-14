"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNavbar from "@/components/TopNavbar";
import { Provider } from "react-redux";
import store from "@/redux/store"; // Import Redux store
import LoginPage from "./login/page";

const Home = () => {
  return (
    <Provider store={store}>
      {/* Wrap with Redux Provider */}
      <div className="flex flex-col min-h-screen">
        <LoginPage></LoginPage>
      </div>
    </Provider>
  );
};

export default Home;
