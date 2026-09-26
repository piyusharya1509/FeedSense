import { useState } from "react";

import { AnalyzerCard } from "@/components/analyzer-card";
import { BackgroundDecoration } from "@/components/background-decoration";
import { ExampleChips } from "@/components/example-chips";
import { Logo } from "@/components/logo";

function App() {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center px-4 py-16">
      <BackgroundDecoration />
      <div className="flex w-full max-w-[620px] flex-col items-center gap-12">
        <Logo />
        <div className="flex w-full flex-col items-center gap-5">
          <h1 className="w-full text-center text-3xl font-semibold text-balance text-black sm:text-4xl md:text-[44px]">
            Turn raw feedback into <span className="text-primary">signal</span>
          </h1>
          <p className="w-full text-center text-base text-muted-foreground">
            Paste a single message to see instant sentiment and topics, or
            upload a file to process thousands of insurance reviews and
            complaints at once.
          </p>
        </div>
        <div className="flex w-full max-w-[548px] flex-col items-center gap-10">
          <AnalyzerCard value={feedback} onChange={setFeedback} />
          <ExampleChips onSelect={setFeedback} />
        </div>
      </div>
    </div>
  );
}

export default App;
