"use client";
import React from "react";
import MobileHeader from "./MobileHeader";
import { NextUIProvider } from "@nextui-org/react";

const AppProvider = ({ children }: any) => {
  return (
    <div>
      <NextUIProvider>
        <MobileHeader />
        {children}
      </NextUIProvider>
    </div>
  );
};

export default AppProvider;
