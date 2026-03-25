import "./App.css";

import React from "react";

import CharacterModel from "./components/Character";
import MainContainer from "./components/MainContainer";
import { LoadingProvider } from "./context/LoadingProvider";

class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err: unknown) {
    console.error("App crashed:", err);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: "sans-serif" }}>
          Something went wrong while loading the site.
        </div>
      );
    }

    return this.props.children;
  }
}

const App = () => {
  return (
    <LoadingProvider>
      <AppErrorBoundary>
        <MainContainer>
          <CharacterModel />
        </MainContainer>
      </AppErrorBoundary>
    </LoadingProvider>
  );
};

export default App;
