import { Link } from "react-router";
import { Error } from "@mui/icons-material";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Error className="text-gray-400 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
      <p className="text-gray-600 mb-6">Page not found</p>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Go to Dashboard
      </Link>
    </div>
  );
}
