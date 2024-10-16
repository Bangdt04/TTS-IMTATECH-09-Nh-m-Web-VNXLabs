import React from "react";
import CheckLogin from "@/components/client/CheckLogin";
import ProductPage from "@/components/client/ProductPage";
import Banner from "@/components/client/Banner";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <div className="flex-grow">
        <ProductPage />
      </div>
      <CheckLogin />
    </div>
  );
};

export default HomePage;