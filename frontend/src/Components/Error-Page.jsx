import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-navy text-white">
      <h1 className="text-4xl font-serif mb-4">Oops!</h1>
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
      {error.status && (
        <p className="mt-2">
          Error Status Code: <span className="font-bold">{error.status}</span>
        </p>
      )}
      <p className="mt-4">
        <button
          className="border-2 border-golden rounded px-3 py-1"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </p>
    </div>
  );
}
