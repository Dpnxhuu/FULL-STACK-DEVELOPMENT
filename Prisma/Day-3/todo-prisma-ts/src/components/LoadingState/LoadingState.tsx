export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white py-16 shadow-md ring-1 ring-gray-100">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />
      <p className="text-sm font-medium text-gray-500">Loading todos...</p>
    </div>
  );
}
