export const formatProductName = (name) => {
  let formattedName = name
    .replace(/[.#$[\]\/\\]/g, "_") // Added \/ to match / and \
    .replace(/\s+/g, "-")
    .replace(/^[-_]+|[-_]+$/g, "");
  return formattedName;
};
