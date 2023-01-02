import React from "react";
import MainHeader from "../header/mainHeader";
const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <MainHeader />
      <main className="w-full min-h-[calc(100vh-100px)] bg-darker p-2">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
