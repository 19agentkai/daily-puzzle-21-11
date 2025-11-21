function App() {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
      <div className="relative">
        <h1 className="text-[12rem] font-black text-white tracking-tight drop-shadow-2xl animate-pulse">
          Done
        </h1>
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-emerald-500 blur-3xl opacity-30 -z-10"></div>
      </div>
    </div>
  );
}

export default App;
