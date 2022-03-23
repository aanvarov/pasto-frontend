import React, { Suspense } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { StyledApp } from "./App.style";
import { AUTH_ROUTES, MAIN_ROUTES } from "../router";
import Sidebar from "../components/Sidebar/Sidebar";

const { Content } = Layout;
function App() {
  const { accessToken } = useSelector((state) => state.account.restaurant);

  if (!accessToken) {
    return (
      <Suspense fallback="Loading...">
        <Routes>
          {AUTH_ROUTES.map((item) => {
            const { path, element: Component } = item;
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </Suspense>
    );
  }

  return (
    <StyledApp>
      <Layout>
        <Sidebar />
        <Layout id="main">
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "calc(100vh - 48px)" }}
            >
              <Suspense fallback="Loading...">
                <Routes>
                  {MAIN_ROUTES?.map((item) => {
                    const { path, element: Component } = item;
                    return (
                      <Route key={path} path={path} element={<Component />} />
                    );
                  })}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </Suspense>
            </div>
          </Content>
        </Layout>
      </Layout>
    </StyledApp>
  );
}

export default App;
