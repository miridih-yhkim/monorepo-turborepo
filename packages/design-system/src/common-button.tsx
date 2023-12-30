import React, { forwardRef } from "react";
import type { PolymorphicForwardRefComponent } from "./polymorphic";
import type {
  CommonButtonColor,
  CommonButtonShape,
  CommonButtonSize,
  CommonButtonState,
  CommonButtonType,
} from "./common-button.css";
import { commonButton } from "./common-button.css";
import { token } from "./token/helper";

interface ButtonProps {
  display: "inline-flex" | "flex";

  /**
   * @default auto
   */
  width?: string;

  /**
   * @default 0 0 auto
   */
  flex?: string;

  /**
   * @default fill
   */
  buttonType?: CommonButtonType;

  /**
   * @default primary
   */
  buttonColor?: CommonButtonColor;

  /**
   * @default default
   */
  state?: CommonButtonState;

  /**
   * @default XXS
   */
  size?: CommonButtonSize;

  /**
   * @default sqaure
   */
  shape?: CommonButtonShape;
}

export const CommonButton = forwardRef(function Button(
  {
    as: ElementType = "button",
    display = "inline-flex",
    width = "auto",
    flex = "0 0 auto",
    size = "XXS",
    shape = "square",
    buttonType = "fill",
    buttonColor = "primary",
    state = "default",
    children,
    ...props
  },
  ref,
) {
  return (
    <ElementType
      {...props}
      ref={ref}
      className={commonButton({
        display,
        size,
        shape,
        hasBorder:
          buttonType === "outline" ||
          buttonType === "outlineBackground" ||
          buttonType === "outlineLight" ||
          buttonType === "outlineLightBackground",
        isActive: state !== "disabled" && state !== "loading",
        isDisabled: state === "disabled",
        isLoading: state === "loading",
        stateLayer:
          buttonType === "fill" || buttonType === "fillLight"
            ? "filled"
            : "notFilled",
      })}
      disabled={ElementType === "button" ? state === "disabled" : undefined}
      style={{
        flex,
        width,
        color: token(
          `c_commonButton_color_contents_${buttonColor}_${buttonType}_${state}`,
        ),
        borderColor: token(
          `c_commonButton_color_border_${buttonColor}_${buttonType}_${state}`,
        ),
        background: token(
          `c_commonButton_color_background_${buttonColor}_${buttonType}_${state}`,
        ),
      }}
      type={ElementType === "button" ? props.type ?? "button" : undefined}
    >
      {children}
    </ElementType>
  );
}) as PolymorphicForwardRefComponent<"button", ButtonProps>;
