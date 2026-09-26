function BackgroundDecoration() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#fbfbfd]">
      <div className="w-[120rem] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[80svh]">
        <div className="absolute -top-40 -left-10 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(120,150,220,0.25)_0%,rgba(120,150,220,0)_70%)] blur-2xl" />
        <div className="absolute -top-1/3 -right-1/8 w-[1100px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(140,170,230,0.25)_0%,rgba(140,170,230,0)_70%)] blur-2xl" />
        <div className="absolute -bottom-80 left-1/2 size-[860px] rounded-full bg-[radial-gradient(circle,rgba(230,150,140,0.20)_0%,rgba(230,150,140,0)_70%)] blur-2xl" />
      </div>
      <div className="absolute bg-[url('/bg-pattern.png')] inset-0 flex justify-center"></div>
    </div>
  );
}

export { BackgroundDecoration };
