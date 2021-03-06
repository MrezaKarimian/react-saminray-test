import React, { lazy, Suspense } from "react";
import { Redirect, Switch } from "react-router";
import AppLayout from "Layout/AppLayout";
import PrivateRoute from "Routes/PrivateRoute";
import Loading from "Components/Loading/Loading";

const Article = lazy(() => import("Pages/app/Article"));
const AddArticle = lazy(() => import("Pages/app/AddArticle"));
const Category = lazy(() => import("Pages/app/Category"));
const AddCategory = lazy(() => import("Pages/app/AddCategory"));

function Index() {
  return (
    <AppLayout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Redirect exact from="/app" to="/app/article" />
          <PrivateRoute exact path="/app/article" component={Article} to="/react-saminray-test" />
          <PrivateRoute
            exact
            path="/app/add-article"
            component={AddArticle}
            to="/react-saminray-test"
          />
          <PrivateRoute
            exact
            path="/app/category"
            component={Category}
            to="/react-saminray-test"
          />
          <PrivateRoute
            path="/app/add-category"
            component={AddCategory}
            to="/react-saminray-test"
          />
        </Switch>
      </Suspense>
    </AppLayout>
  );
}

export default Index;
