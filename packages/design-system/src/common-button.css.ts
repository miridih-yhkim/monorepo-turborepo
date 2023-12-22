import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { atomic } from "./sprinkles.css";
import { defaultFocusStyle } from "./utility.css";
import { token } from "./token/helper";

export const CommonButtonSize = {
  xxs: "XXS",
  s: "S",
  m: "M",
  l: "L",
  xl: "XL",
  xxl: "XXL",
} as const;
export type CommonButtonSize =
  (typeof CommonButtonSize)[keyof typeof CommonButtonSize];

export const CommonButtonColor = {
  primary: "primary",
  neutralDeep: "neutralDeep",
  neutralLight: "neutralLight",
  negative: "negative",
  black: "black",
  white: "white",
} as const;
export type CommonButtonColor =
  (typeof CommonButtonColor)[keyof typeof CommonButtonColor];

export const CommonButtonType = {
  fill: "fill",
  fillLight: "fillLight",
  outline: "outline",
  outlineBackground: "outlineBackground",
  outlineLight: "outlineLight",
  outlineLightBackground: "outlineLightBackground",
  ghost: "ghost",
} as const;
export type CommonButtonType =
  (typeof CommonButtonType)[keyof typeof CommonButtonType];

export const CommonButtonState = {
  default: "default",
  hover: "hover",
  pressed: "pressed",
  selected: "selected",
  disabled: "disabled",
  loading: "loading",
} as const;
export type CommonButtonState =
  (typeof CommonButtonState)[keyof typeof CommonButtonState];

export const CommonButtonShape = {
  square: "square",
  round: "round",
} as const;
export type CommonButtonShape =
  (typeof CommonButtonShape)[keyof typeof CommonButtonShape];

export const commonButton = recipe({
  base: [
    atomic({
      all: "revert",
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
        inset: "0px",
        pointerEvents: "none",
        opacity: 0,
        background: "currentcolor",
        transition: `opacity ${token(`s_duration_button`)} ease-in-out`,
      },
    }),
  ],
  variants: {
    display: {
      [`inline-flex`]: atomic({ display: "inline-flex" }),
      flex: atomic({ display: "flex" }),
    },
    size: {
      [CommonButtonSize.l]: {
        padding: `0 ${token(
          `c_commonButton_spacing_padding_${CommonButtonSize.l}_horizontalPadding`,
        )}`,
        height: token(`c_commonButton_size_height_${CommonButtonSize.l}`),
        font: token(`c_commonButton_typography_${CommonButtonSize.l}`),
        gap: token(`c_commonButton_spacing_itemGap_${CommonButtonSize.l}`),
      },
      [CommonButtonSize.m]: {
        padding: `0 ${token(
          `c_commonButton_spacing_padding_${CommonButtonSize.m}_horizontalPadding`,
        )}`,
        height: token(`c_commonButton_size_height_${CommonButtonSize.m}`),
        font: token(`c_commonButton_typography_${CommonButtonSize.m}`),
        gap: token(`c_commonButton_spacing_itemGap_${CommonButtonSize.m}`),
      },
      [CommonButtonSize.s]: {
        padding: `0 ${token(
          `c_commonButton_spacing_padding_${CommonButtonSize.s}_horizontalPadding`,
        )}`,
        height: token(`c_commonButton_size_height_${CommonButtonSize.s}`),
        font: token(`c_commonButton_typography_${CommonButtonSize.s}`),
        gap: token(`c_commonButton_spacing_itemGap_${CommonButtonSize.s}`),
      },
      [CommonButtonSize.xl]: {
        padding: `0 ${token(
          `c_commonButton_spacing_padding_${CommonButtonSize.xl}_horizontalPadding`,
        )}`,
        height: token(`c_commonButton_size_height_${CommonButtonSize.xl}`),
        font: token(`c_commonButton_typography_${CommonButtonSize.xl}`),
        gap: token(`c_commonButton_spacing_itemGap_${CommonButtonSize.xl}`),
      },
      [CommonButtonSize.xxl]: {
        padding: `0 ${token(
          `c_commonButton_spacing_padding_${CommonButtonSize.xxl}_horizontalPadding`,
        )}`,
        height: token(`c_commonButton_size_height_${CommonButtonSize.xxl}`),
        font: token(`c_commonButton_typography_${CommonButtonSize.xxl}`),
        gap: token(`c_commonButton_spacing_itemGap_${CommonButtonSize.xxl}`),
      },
      [CommonButtonSize.xxs]: {
        padding: `0 ${token(
          `c_commonButton_spacing_padding_${CommonButtonSize.xxs}_horizontalPadding`,
        )}`,
        height: token(`c_commonButton_size_height_${CommonButtonSize.xxs}`),
        font: token(`c_commonButton_typography_${CommonButtonSize.xxs}`),
        gap: token(`c_commonButton_spacing_itemGap_${CommonButtonSize.xxs}`),
      },
    },
    shape: {
      [CommonButtonShape.round]: {
        borderRadius: token(`c_commonButton_radius_round`),
      },
      [CommonButtonShape.square]: {},
    },
    hasBorder: {
      true: {
        border: "1px solid",
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
  },
  compoundVariants: [
    {
      variants: {
        shape: "square",
        size: "XXS",
      },
      style: {
        borderRadius: token(
          `c_commonButton_radius_square_${CommonButtonSize.xxs}`,
        ),
      },
    },
    {
      variants: {
        shape: "square",
        size: "S",
      },
      style: {
        borderRadius: token(
          `c_commonButton_radius_square_${CommonButtonSize.s}`,
        ),
      },
    },
    {
      variants: {
        shape: "square",
        size: "M",
      },
      style: {
        borderRadius: token(
          `c_commonButton_radius_square_${CommonButtonSize.m}`,
        ),
      },
    },
    {
      variants: {
        shape: "square",
        size: "L",
      },
      style: {
        borderRadius: token(
          `c_commonButton_radius_square_${CommonButtonSize.l}`,
        ),
      },
    },
    {
      variants: {
        shape: "square",
        size: "XL",
      },
      style: {
        borderRadius: token(
          `c_commonButton_radius_square_${CommonButtonSize.xl}`,
        ),
      },
    },
    {
      variants: {
        shape: "square",
        size: "XXL",
      },
      style: {
        borderRadius: token(
          `c_commonButton_radius_square_${CommonButtonSize.xxl}`,
        ),
      },
    },
  ],
});
