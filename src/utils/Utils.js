export const formatProductName = (name) => {
  let formattedName = name
    .replace(/[.#$[\]\/\\]/g, "_")
    .replace(/\s+/g, "-")
    .replace(/^[-_]+|[-_]+$/g, "");
  return formattedName;
};
