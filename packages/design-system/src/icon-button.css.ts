import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { token } from "@cpdev2/primitive";
import { atomic } from "./sprinkles.css";
import { defaultFocusStyle } from "./utility.css";

export const IconButtonSize = {
  xxs: "XXS",
  xs: "XS",
  s: "S",
  sm: "SM",
  m: "M",
} as const;
export type IconButtonSize =
  (typeof IconButtonSize)[keyof typeof IconButtonSize];

export const IconButtonShape = {
  square: "square",
  round: "round",
} as const;
export type IconButtonShape =
  (typeof IconButtonShape)[keyof typeof IconButtonShape];

export const IconButtonColor = {
  primary: "primary",
  neutralDeep: "neutralDeep",
  neutralLight: "neutralLight",
  negative: "negative",
  black: "black",
  white: "white",
  neutralDeepInverse: "neutralDeepInverse",
} as const;
export type IconButtonColor =
  (typeof IconButtonColor)[keyof typeof IconButtonColor];

export const IconButtonType = {
  fill: "fill",
  fillLight: "fillLight",
  outline: "outline",
  outlineBackground: "outlineBackground",
  outlineLight: "outlineLight",
  outlineLightBackground: "outlineLightBackground",
  ghost: "ghost",
} as const;
export type IconButtonType =
  (typeof IconButtonType)[keyof typeof IconButtonType];

export const IconButtonState = {
  default: "default",
  hover: "hover",
  pressed: "pressed",
  selected: "selected",
  disabled: "disabled",
  loading: "loading",
} as const;
export type IconButtonState =
  (typeof IconButtonState)[keyof typeof IconButtonState];

export const iconButton = recipe({
  base: [
    atomic({
      all: "unset",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }),
    style({
      selectors: {
        [`&:where(:focus-visible)`]: defaultFocusStyle,
      },
      ":before": {
        content: "''",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity: 0,
        background: "currentcolor",
        transition: `opacity ${token(
          `c_iconButton_duration_state`,
        )} ease-in-out`,
      },
    }),
  ],
  variants: {
    size: {
      [IconButtonSize.m]: {
        width: token(`c_iconButton_size_${IconButtonSize.m}`),
        height: token(`c_iconButton_size_${IconButtonSize.m}`),
      },
      [IconButtonSize.s]: {
        width: token(`c_iconButton_size_${IconButtonSize.s}`),
        height: token(`c_iconButton_size_${IconButtonSize.s}`),
      },
      [IconButtonSize.sm]: {
        width: token(`c_iconButton_size_${IconButtonSize.sm}`),
        height: token(`c_iconButton_size_${IconButtonSize.sm}`),
      },
      [IconButtonSize.xs]: {
        width: token(`c_iconButton_size_${IconButtonSize.xs}`),
        height: token(`c_iconButton_size_${IconButtonSize.xs}`),
      },
      [IconButtonSize.xxs]: {
        width: token(`c_iconButton_size_${IconButtonSize.xxs}`),
        height: token(`c_iconButton_size_${IconButtonSize.xxs}`),
      },
    },
    shape: {
      [IconButtonShape.round]: {
        borderRadius: token(`c_iconButton_radius_round`),
      },
      [IconButtonShape.square]: {},
    },
    hasBorder: {
      true: {
        border: `${token(`b_border-width_10`)} solid`,
      },
    },
    isActive: {
      true: {
        selectors: {
          "&:where(a, button)": {
            cursor: "pointer",
          },
        },
      },
    },
    isDisabled: {
      true: {
        cursor: atomic({ cursor: "not-allowed" }),
      },
    },
    isLoading: {
      true: {
        cursor: atomic({ cursor: "auto" }),
      },
    },
    stateLayer: {
      filled: {
        selectors: {
          "&:hover::before": {
            opacity: token(
              `c_commonButton_opacity_interactionLayer_fill_hover`,
            ),
          },
          "&:active::before": {
            opacity: token(
              `c_commonButton_opacity_interactionLayer_fill_pressed`,
            ),
          },
        },
      },
      notFilled: {
        selectors: {
          "&:hover::before": {
            opacity: token(
              `c_commonButton_opacity_interactionLayer_notFill_hover`,
            ),
          },
          "&:active::before": {
            opacity: token(
              `c_commonButton_opacity_interactionLayer_notFill_pressed`,
            ),
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        shape: "square",
        size: IconButtonSize.m,
      },
      style: {
        borderRadius: token(`c_iconButton_radius_square_${IconButtonSize.m}`),
      },
    },
    {
      variants: {
        shape: "square",
        size: IconButtonSize.s,
      },
      style: {
        borderRadius: token(`c_iconButton_radius_square_${IconButtonSize.s}`),
      },
    },
    {
      variants: {
        shape: "square",
        size: IconButtonSize.sm,
      },
      style: {
        borderRadius: token(`c_iconButton_radius_square_${IconButtonSize.sm}`),
      },
    },
    {
      variants: {
        shape: "square",
        size: IconButtonSize.xs,
      },
      style: {
        borderRadius: token(`c_iconButton_radius_square_${IconButtonSize.xs}`),
      },
    },
    {
      variants: {
        shape: "square",
        size: IconButtonSize.xxs,
      },
      style: {
        borderRadius: token(`c_iconButton_radius_square_${IconButtonSize.xxs}`),
      },
    },
  ],
});
