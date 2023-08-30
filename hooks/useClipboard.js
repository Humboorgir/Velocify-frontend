import { useState } from "react";

export default function useClipboard() {
  const timeout = 1000;
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState(null);

  const copy = (value) => {
    navigator.clipboard.writeText(value).then(() => {
      clearTimeout(copyTimeout);
      setCopyTimeout(setTimeout(() => setCopied(false), timeout));
      setCopied(true);
    });
  };

  return { copy, copied };
}
