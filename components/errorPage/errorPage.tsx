import { MainLayout } from "@/layouts/mainLayout";
import Head from "next/head";

interface ErrorPageProps {
  statusCode?: string | number;
  message: string;
  textButton?: string;
  linkButton?: string;
}

export const ErrorPage = ({ statusCode, message }: ErrorPageProps) => {
  return (
    <MainLayout>
      <Head>
        <title>😔 Something went wrong </title>
      </Head>
      <div>
        <p>{statusCode}</p>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;
