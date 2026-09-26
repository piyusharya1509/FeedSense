function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-black">
        <div className="size-3 rounded-full bg-white" />
      </div>
      <p className="text-2xl font-semibold whitespace-nowrap text-ink">
        InsurePulse
      </p>
    </div>
  );
}

export { Logo };
