export default function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white py-16 shadow-md ring-1 ring-gray-100">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
        <svg
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <p className="max-w-xs text-center text-sm text-gray-600">
        Something went wrong. Please try again.
      </p>
      <button
        type="button"
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
      >
        Try again
      </button>
    </div>
  );
}
