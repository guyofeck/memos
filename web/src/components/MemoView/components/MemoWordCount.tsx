import { useMemo } from "react";

const MemoWordCount = ({ content }: { content: string }) => {
  const count = useMemo(() => content.match(/\S+/g)?.length ?? 0, [content]);

  return (
    <p data-slot="memo-word-count" className="mt-2 text-xs text-muted-foreground">
      {count} {count === 1 ? "word" : "words"}
    </p>
  );
};

export default MemoWordCount;
