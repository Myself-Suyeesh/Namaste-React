import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Error</h1>
      <h2>This is a Error page for GoFood</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorPage;
