function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
     
    </div>
  );
}

export default LoadingSpinner;
