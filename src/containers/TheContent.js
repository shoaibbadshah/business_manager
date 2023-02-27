import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";

// routes config
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const TheContent = () => {
  let user = localStorage.getItem("token");

  let isAuthenticated=user ? true:false
  return (
    <main className="c-main">
      <CContainer fluid>
        {true===true?(
          <Suspense fallback={loading}>
            <Switch>
              {routes.map((route, idx) => {

                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => (
                        <CFade>
                          <route.component {...props} />
                        </CFade>
                      )}
                    />
                  )
                );
              })}
              <Redirect from="/" to="/login" />
            </Switch>
          </Suspense>
        ):(<Redirect from="/" to="/login" />)}
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
