const uppercaseFirstLetter = string => {
  // if (typeof s !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};
module.exports = uppercaseFirstLetter;
