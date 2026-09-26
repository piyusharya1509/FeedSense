import { Button } from "@/components/ui/button";

interface Example {
  label: string;
  content: string;
}

const EXAMPLES: Example[] = [
  {
    label: "Claim took a month, still unpaid",
    content:
      "I filed a claim for water damage on March 3rd and it's now April 5th with no payout. I've called four times, each time I get a different rep who has to \"re-review\" the file. No one can tell me when this will actually be resolved.",
  },
  {
    label: "Agent was incredibly helpful",
    content:
      "My agent Maria walked me through switching to a bundled auto and home policy and actually took the time to explain the deductible options instead of just upselling me. Saved almost $60/month and the whole thing took 20 minutes.",
  },
  {
    label: "Premium jumped 40% with no notice",
    content:
      'Renewed my policy last month and just noticed my premium went from $145 to $203 a month with zero explanation. No claims filed, no tickets, nothing on my driving record. Called support and they just said "rates change," which isn\'t good enough.',
  },
];

function ExampleChips({ onSelect }: { onSelect: (text: string) => void }) {
  return (
    <div className="flex w-full flex-col items-start gap-2 px-5">
      <p className="w-full text-xs font-medium text-muted-foreground">
        Try an example
      </p>
      <div className="flex w-full flex-wrap items-start gap-2">
        {EXAMPLES.map((example) => (
          <Button
            key={example.label}
            type="button"
            variant="outline"
            size="xs"
            onClick={() => onSelect(example.content)}
            className={"rounded-full"}
          >
            {example.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export { ExampleChips };
