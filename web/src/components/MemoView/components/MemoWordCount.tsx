import { useTranslate } from "@/utils/i18n";

const MemoWordCount = ({ content }: { content: string }) => {
  const t = useTranslate();
  const count = content.trim() ? content.trim().split(/\s+/u).length : 0;

  return (
    <p data-slot="memo-word-count" className="mt-2 text-xs text-muted-foreground">
      {t("memo.word-count", { count })}
    </p>
  );
};

export default MemoWordCount;
