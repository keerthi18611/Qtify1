export function truncate(text, maxLength = 40) {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export function formatLikes(num) {
  if (!num) return "0";
  if (num < 1000) return num.toString();
  if (num < 1_000_000) return (num / 1000).toFixed(1) + "K";
  return (num / 1_000_000).toFixed(1) + "M";
}
