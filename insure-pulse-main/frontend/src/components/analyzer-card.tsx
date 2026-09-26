import { useRef, useState } from "react";
import {
  IconFileTypeCsv,
  IconPaperclip,
  IconSparkles2,
  IconX,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function formatFileSize(bytes: number) {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  return `${(bytes / 1024 ** i).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function AnalyzerCard({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const canAnalyze = file !== null || value.length > 0;

  return (
    <div className="shadow-2xl shadow-primary/20 flex w-full flex-col gap-4 rounded-2xl border border-border bg-white p-5">
      {file ? (
        <div className="flex w-full items-center justify-between gap-4 rounded-xl bg-muted py-2 pr-4 pl-2">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white">
              <IconFileTypeCsv
                stroke={1.5}
                className="size-8 text-muted-foreground"
              />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <p className="text-base font-medium text-black">{file.name}</p>
              <p className="font-mono text-sm text-muted-foreground">
                {formatFileSize(file.size)}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setFile(null)}
            aria-label="Remove file"
          >
            <IconX />
          </Button>
        </div>
      ) : (
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. I've been waiting three weeks for my claim to be processed and no one has called me back. Considering switching providers"
          className="rounded-none border-none p-0 resize-none shadow-none focus-visible:ring-0"
        />
      )}
      <div className="flex items-end justify-between gap-2">
        <p className="text-sm whitespace-nowrap text-muted-foreground">
          {file ? "Uploaded successfully" : `${value.length} characters`}
        </p>
        <div className="flex items-center gap-2.5">
          <Input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          <Button
            type="button"
            variant="secondary"
            size="icon-sm"
            onClick={() => fileInputRef.current?.click()}
            aria-label="Attach a file"
          >
            <IconPaperclip />
          </Button>
          <Button type="button" disabled={!canAnalyze} size="sm">
            Analyze
            <IconSparkles2 />
          </Button>
        </div>
      </div>
    </div>
  );
}

export { AnalyzerCard };
