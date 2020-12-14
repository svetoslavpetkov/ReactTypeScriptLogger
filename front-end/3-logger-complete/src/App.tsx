import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { MainLayout } from './components/containers/layout/MainLayout';
import { LoginContainer } from './components/containers/login/LoginContainer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { IssuesList } from './components/containers/issues/IssuesList';
import { bootstrapServices } from './services/boostrap';
import { IServiceLocator } from './services/abstraction';
import { AppServiceContext } from './components/AppContext';
import ViewSingIeIssue from './components/containers/issues/ViewSingIeIssue';


const serviceLocator: IServiceLocator = bootstrapServices()


const theme = createMuiTheme({});

function App() {
  return (
    <AppServiceContext.Provider value={serviceLocator}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainLayout>
            <Route path="/" exact>
              <LoginContainer/>
            </Route>
            <Route path="/issue" exact>
              <IssuesList />
            </Route>
            <Route path="/issue/:id" exact>
              <ViewSingIeIssue />
            </Route>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </AppServiceContext.Provider>
  );
}

export default App;
