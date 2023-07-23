import ErrorPage from "@/components/errorPage/errorPage";


export const ErrorPage404 = () => {
  return <ErrorPage statusCode='400' message='Page not found!' />;
};

export default ErrorPage404;
