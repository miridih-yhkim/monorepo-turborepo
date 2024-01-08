import type { StyleRule } from "@vanilla-extract/css";

export const defaultFocusStyle: StyleRule = {
  'selectors': {
    '&:where(:focus-visible)': {
      outline: ["HighLight auto 1px", "-webkit-focus-ring-color auto 1px"],
    }
  }
};

export const clickable: StyleRule = {
  selectors: {
    "&:where(button, input[type='checkbox'], input[type='radio']):not(:disabled)":
      {
        cursor: "pointer",
      },
    "&:where(a)": {
      cursor: "pointer",
    },
  },
};

export const ellipsis: StyleRule = {
  display: '-webkit-box',
  'WebkitBoxOrient': 'vertical',
  "WebkitLineClamp": 1,
  overflow: 'hidden',
};
