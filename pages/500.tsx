import ErrorPage from "@/components/errorPage/errorPage";

export const ErrorPage500 = () => {
  return <ErrorPage statusCode="500" message="Server error!" />;
};

export default ErrorPage500;
