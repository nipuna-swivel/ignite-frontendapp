import "@/styles/globals.css";
import ReactDOM from 'react-dom'
import type { AppProps } from "next/app";
import AppLayout from "@/layouts/appLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "@/store";
import AlertMessage from "@/shared/alertMessage";

export default function App ( { Component, pageProps }: AppProps )
{
  return (
    <AppLayout>
      <Provider store={ store }>
        <AlertMessage/>
        <Component { ...pageProps } />
      </Provider>
    </AppLayout>
  );
}
