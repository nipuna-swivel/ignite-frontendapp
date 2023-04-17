import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render as rtlRender, screen ,waitFor, fireEvent  } from '@testing-library/react';
import ListEmployeePage from "../../../pages/employees/list";
import { Provider } from 'react-redux';
import { store } from "../../../store";
import Router from 'next/router';
import { useRouter } from "next/router"
import { act } from 'react-dom/test-utils';


const render = (component:any) => rtlRender(
  <Provider store={store} >
    <ListEmployeePage />
  </Provider>
)
