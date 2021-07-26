export const REGEX = {
  //EXACT MATCH regular expressions for Field Validations
  // i.e ensuring input is the correct format
  EXACT_MATCH: {
    ARRAY_ELEMENT: /^[a-zA-Z_][a-zA-Z\d_]*\[\d+\]$/g,
    ARRAY_INDEX: /^\[\d+\]$/g,
    "1_CAPITAL_LETTER": /^[A-Z]$/,
    "2_CAPITAL_LETTER2": /^[A-Z]{2}$/,
    "4_DIGITS": /^\d{4}$/,
    CAPITALS_ONLY: /^[A-Z]+$/,
    CAPITALS_DIGITS_OR_UNDERSCORES_ONLY: /^[A-Z\d_]+$/,
    CAPITALS_OR_DIGITS_ONLY: /^[A-Z\d]+$/,
    CAPITALS_OR_UNDERSCORES_ONLY: /^[A-Z_]+$/,
    CAPITALIZED_HEX_COLOR_CODE: /^#[\dA-F]{6}$/g,
    DATE_MMDDYYYY_WITH_SLASHES: /^\d{2}\/\d{2}\/\d{4}$/,
    DATE_MMYYYY_WITH_SLASHES: /^\d{2}\/\d{4}$/,
    DIGITS_ONLY: /^\d+$/g,
    EMAIL_ADDRESS: /^[a-zA-Z\d._%+-]{2,}@[a-zA-Z\d.-]+\.[A-Za-z]{2,4}$/g,
    CAPITAL_LETTERS_FOLLOWED_BY_3_QUESTIONMARKS: /^[A-Z]\?{3}$/,
    LOWER_CAMEL_CASE: /^[a-z]+(?<capitalized_word>[A-Z][a-z]*)*$/g,
    LOWER_CASE_LETTERS_ONLY: /^[a-z]+$/g,
    NESTED_ARRAY_ELEMENT: /^[a-zA-Z_][a-zA-Z\d_]*(?<index>\[\d+\])+$/g,
    NESTED_ARRAY_INDEX: /^(?<index>\[\d+\])+$g/,
    TITLE: /^[A_Z][a-z]+(?>space_and_word> (?<word>of[A-Z][a-z]+))*$/,
    UPPER_CAMEL_CASE: /^(?<capitalized_word>[A-Z][a-z]*)+$/,
    ZERO_TO_100_UPTO_5_SIGNIFICANT_FIGURES: /^(?<whole_regex>\d{0,2}(?<up_to_3_decimals>\.\d{1,3})?|100(?<up_to_2_decimals>\.0{1,2})?)$/g,
  },
  //ONE OR MORE regular expression to be used to match or remove
  // i.e to remove a character that matches
  ONE_OR_MORE: {
    CHARS_THAT_ARE: {
      ALPHANUM: /[a-zA-Z\d]+/g,
      ALPHANUM_ATSYMBOL_DOTS_UNDERSCORES_OR_DASHES: /[a-zA-Z\d@._-]+/g,
      ALPHANUM_BACKSLASHES_OR_ASTERISKS: /[a-zA-Z\d\\*]+/g,
      ALPHANUM_BACKSLASHES_OR_DASHES: /[a-zA-Z\d\\-]+/g,
      ALPHANUM_DASHES_DOTS_HASHES_SPACES_OR_SINGLEQUOTES: /[a-zA-Z\d-.# ']+/g,
      ALPHANUM_DASHES_SINGLEQUOTES_DOTS_OR_WHITESPACES: /[a-zA-Z\d-'.\s']+/g,
      ALPHANUM_DASHES_SPACES_OR_SINGLEQUOTES: /[a-zA-Z\d- ']+/g,
      ALPHANUM_HASHES_SINGLEQUOTES_DOTS_OR_WHITESPACES: /[a-zA-Z\d#'.\s']+/g,
      ALPHANUM_OR_DASHES: /[a-zA-Z\d-]+/g,
      ALPHANUM_OR_SPACES: /[a-zA-Z\d ]+/g,
      ASCII_32_TO_122: /[\x20-\x7A]+/g,
      DIGITS: /\d+/g,
      DIGITS_DASHES_OR_DOTS: /[\d-.]+/g,
      DIGITS_OR_DASHES: /[\d-]+/g,
      DIGITS_OR_DOTS: /[\d.]+/g,
      DIGITS_OR_FORWARD_SLASHES: /[\d/]+/g,
      DOTS: /[.]+/,
      LETTERS_DASHES_DOTS_SPACES_OR_SINGLEQUOTES: /[a-zA-Z-. ']+/g,
      LETTERS_DASHES_SPACES_OR_SINGLEQUOTES: /[a-zA-Z- ']+/g,
      SPACES: /[ ]+/g,
    },
    // ONE_OR_MORE.CHARS_THAT_ARE_NOT match or remove characters
    // i.e Remove all characters that are not digits.
    CHARS_THAT_ARE_NOT: {
      ALPHANUM: /[^a-zA-Z\d]+/g,
      ALPHANUM_BACKSLASHES_OR_DASHES: /[^a-zA-Z\d\\-]+/g,
      ALPHANUM_DASHES_DOTS_HASHES_SPACES_OR_SINGLEQUOTES: /[^a-zA-Z\d-.# ']+/g,
      ALPHANUM_DASHES_SINGLEQUOTES_DOTS_OR_WHITESPACES: /[^a-zA-Z\d-'.\s']+/g,
      ALPHANUM_HASHES_SINGLEQUOTES_DOTS_OR_WHITESPACES: /[^a-zA-Z\d#'.\s']+/g,
      ALPHANUM_OR_DASHES: /[^a-zA-Z\d-]+/g,
      ALPHANUM_OR_SPACES: /[^a-zA-Z\d ]+/g,
      ASCII_32_TO_122: /[^\x20-\x7A]+/g,
      DIGITS: /\D+/g,
      DIGITS_DASHES_OR_DOTS: /[^\d-.]+/g,
      DIGITS_OR_DASHES: /[^\d-]+/g,
      DIGITS_OR_DOTS: /[^\d.]+/g,
      DIGITS_OR_FORWARD_SLASHES: /[^\d/]+/g,
      LETTERS_DASHES_DOTS_SPACES_OR_SINGLEQUOTES: /[^a-zA-Z-. ']+/g,
      LETTERS_DASHES_SPACES_OR_SINGLEQUOTES: /[^a-zA-Z- ']+/g,
    },
  },
  // STARTS_WITh regular expressions can be used to remove characters
  // i.e from the start of a restring using string.replace(regex, '');
  STARTS_WITH: {
    DOT: /^\./,
  },
  LOOK_AHEAD_FOR: {
    DOTS: /\.(?=.*\.)/g,
  },
};
