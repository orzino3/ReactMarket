export const formatProductName = (name) => {
  let formattedName = name
    .replace(/[.#$[\]]/g, "_")
    .replace(/\s+/g, "-")
    .replace(/^[-_]+|[-_]+$/g, "");

  const hash = hashString(formattedName);

  return hash;
};

export const hashString = (str) => {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash.toString(36);
};
