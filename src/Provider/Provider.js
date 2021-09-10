import Compose from "reactjs-compose";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginProvider from "Provider/login/login.provider";
import RegisterProvider from "Provider/register/register.provider";
import AddArticleProvider from "Provider/addArticle/addArticle.provider";
import AuthProvider from "Provider/auth/auth.provider";
import AddCategoryProvider from "Provider/addCategory/addCategory.provider";

const queryClient = new QueryClient();

const Providers = [
  Router,
  [QueryClientProvider, { client: queryClient }],
  AuthProvider,
  LoginProvider,
  RegisterProvider,
  AddArticleProvider,
  AddCategoryProvider,
];

function Provider({ children }) {
  return <Compose components={Providers}>{children}</Compose>;
}

export default Provider;
