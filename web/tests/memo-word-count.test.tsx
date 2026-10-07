import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MemoWordCount from "@/components/MemoView/components/MemoWordCount";

describe("MemoWordCount", () => {
  it.each([
    ["", "0 words"],
    [" \t\n ", "0 words"],
    ["Hello", "1 word"],
    ["  Hello   world\nfrom\tMemos  ", "4 words"],
  ])("counts whitespace-separated words in %j", (content, label) => {
    render(<MemoWordCount content={content} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("updates when the memo content changes", () => {
    const { rerender } = render(<MemoWordCount content="Hello" />);
    expect(screen.getByText("1 word")).toBeInTheDocument();
    rerender(<MemoWordCount content="Hello world" />);
    expect(screen.getByText("2 words")).toBeInTheDocument();
    expect(screen.queryByText("1 word")).toBeNull();
  });
});
