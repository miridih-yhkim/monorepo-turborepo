import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { token } from "@cpdev2/primitive";
import { atomic } from "./sprinkles.css";

export const SpinnerSize = {
  xs: "XS",
  s: "S",
  m: "M",
  l: "L",
  xl: "XL",
} as const;
export type SpinnerSize = (typeof SpinnerSize)[keyof typeof SpinnerSize];

export const SpinnerColor = {
  primary: "primary",
  neutral: "neutral",
  neutralInverse: "neutralInverse",
  negative: "negative",
  white: "white",
  black: "black",
} as const;
export type SpinnerColor = (typeof SpinnerColor)[keyof typeof SpinnerColor];

const spinAnimation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const spinner = recipe({
  base: style([
    atomic({
      all: "unset",
      display: "inline-block",
      boxSizing: "border-box",
      verticalAlign: "middle",
      borderRaidus: "circle",
      flex: "0 0 auto",
    }),
    {
      borderStyle: "solid",
      animation: `${spinAnimation} ${token(
        `c_spinner_duration`,
      )} linear infinite`,
    },
  ]),
  variants: {
    color: {
      [SpinnerColor.black]: {
        borderColor: token(`c_spinner_color_track_${SpinnerColor.black}`),
        borderLeftColor: token(
          `c_spinner_color_indicator_${SpinnerColor.black}`,
        ),
      },
      [SpinnerColor.negative]: {
        borderColor: token(`c_spinner_color_track_${SpinnerColor.negative}`),
        borderLeftColor: token(
          `c_spinner_color_indicator_${SpinnerColor.negative}`,
        ),
      },
      [SpinnerColor.neutral]: {
        borderColor: token(`c_spinner_color_track_${SpinnerColor.neutral}`),
        borderLeftColor: token(
          `c_spinner_color_indicator_${SpinnerColor.neutral}`,
        ),
      },
      [SpinnerColor.neutralInverse]: {
        borderColor: token(
          `c_spinner_color_track_${SpinnerColor.neutralInverse}`,
        ),
        borderLeftColor: token(
          `c_spinner_color_indicator_${SpinnerColor.neutralInverse}`,
        ),
      },
      [SpinnerColor.primary]: {
        borderColor: token(`c_spinner_color_track_${SpinnerColor.primary}`),
        borderLeftColor: token(
          `c_spinner_color_indicator_${SpinnerColor.primary}`,
        ),
      },
      [SpinnerColor.white]: {
        borderColor: token(`c_spinner_color_track_${SpinnerColor.white}`),
        borderLeftColor: token(
          `c_spinner_color_indicator_${SpinnerColor.white}`,
        ),
      },
    },
    size: {
      [SpinnerSize.l]: {
        borderWidth: token(`c_spinner_borderWidth_${SpinnerSize.l}`),
        width: token(`c_spinner_size_${SpinnerSize.l}`),
        height: token(`c_spinner_size_${SpinnerSize.l}`),
      },
      [SpinnerSize.m]: {
        borderWidth: token(`c_spinner_borderWidth_${SpinnerSize.m}`),
        width: token(`c_spinner_size_${SpinnerSize.m}`),
        height: token(`c_spinner_size_${SpinnerSize.m}`),
      },
      [SpinnerSize.s]: {
        borderWidth: token(`c_spinner_borderWidth_${SpinnerSize.s}`),
        width: token(`c_spinner_size_${SpinnerSize.s}`),
        height: token(`c_spinner_size_${SpinnerSize.s}`),
      },
      [SpinnerSize.xl]: {
        borderWidth: token(`c_spinner_borderWidth_${SpinnerSize.xl}`),
        width: token(`c_spinner_size_${SpinnerSize.xl}`),
        height: token(`c_spinner_size_${SpinnerSize.xl}`),
      },
      [SpinnerSize.xs]: {
        borderWidth: token(`c_spinner_borderWidth_${SpinnerSize.xs}`),
        width: token(`c_spinner_size_${SpinnerSize.xs}`),
        height: token(`c_spinner_size_${SpinnerSize.xs}`),
      },
    },
  },
});
