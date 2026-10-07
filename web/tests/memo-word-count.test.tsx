import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MemoWordCount from "@/components/MemoView/components/MemoWordCount";

vi.mock("@/utils/i18n", () => ({
  useTranslate:
    () =>
    (_key: string, { count }: { count: number }) =>
      `${count} ${count === 1 ? "word" : "words"}`,
}));

describe("MemoWordCount", () => {
  it.each([
    ["", "0 words"],
    [" \n\t ", "0 words"],
    ["Hello", "1 word"],
    ["  Hello   world\nfrom\tMemos  ", "4 words"],
    ["שלום עולם", "2 words"],
  ])("counts %j as %s", (content, label) => {
    render(<MemoWordCount content={content} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("updates when memo content changes", () => {
    const { rerender } = render(<MemoWordCount content="Hello" />);
    rerender(<MemoWordCount content="Hello world" />);
    expect(screen.getByText("2 words")).toBeInTheDocument();
  });
});
