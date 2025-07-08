import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Geuza - Device Management Platform",
  description:
    "A comprehensive platform for managing and tracking your devices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Providers>{children}</Providers>
        <ToastContainer position="top-right" />
      </PersistGate>
    </Provider>
  );
}
