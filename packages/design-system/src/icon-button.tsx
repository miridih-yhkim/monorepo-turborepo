import React, { forwardRef } from "react";
import type { IconUrl } from "@cpdev2/iconography";
import type { PolymorphicForwardRefComponent } from "./polymorphic";
import {
  iconButton,
  type IconButtonColor,
  type IconButtonShape,
  type IconButtonSize,
  type IconButtonState,
  type IconButtonType,
} from "./icon-button.css";
import { Spinner } from "./spinner";
import type { SpinnerColor, SpinnerSize } from "./spinner.css";
import { Icon } from "./icon";
import { token } from "./token/helper";

export interface IconButtonProps {
  /**
   * @default XXS
   */
  size?: IconButtonSize;

  /**
   * - `square` 인경우 사이즈에 따라 `border-radius` 값이 다르다. size 프로퍼티에 명시된 토큰 참고
   *
   * @default square
   */
  shape?: IconButtonShape;

  /**
   * @default primary
   */
  buttonColor?: IconButtonColor;

  /**
   * @default fill
   */
  buttonType?: IconButtonType;

  /**
   * @default default
   */
  state?: IconButtonState;

  iconName: IconUrl;
}

function getSpinnerColor({
  buttonColor,
  buttonType,
}: {
  buttonColor: IconButtonColor;
  buttonType: IconButtonType;
}): SpinnerColor {
  switch (buttonColor) {
    case "neutralDeep":
    case "neutralLight":
      return buttonType === "fill" ? "neutralInverse" : "neutral";
    case "negative":
      return buttonType === "fill" ? "neutralInverse" : "negative";
    case "black":
      return buttonType === "fill" ? "white" : "black";
    case "white":
      return buttonType === "fill" ? "black" : "white";
    case "neutralDeepInverse":
      return buttonType === "fill" ? "neutral" : "neutralInverse";
    // primary
    default:
      return buttonType === "fill" ? "neutralInverse" : "primary";
  }
}

function getSpinnerSize({ size }: { size: IconButtonSize }): SpinnerSize {
  switch (size) {
    case "XS":
      return "XS";
    case "S":
    case "SM":
    case "M":
      return "S";
    default:
      return "XS";
  }
}

export const IconButton = forwardRef(function IconButton(
  {
    as: ElementType = "button",
    size = "XXS",
    shape = "square",
    buttonColor = "primary",
    buttonType = "fill",
    state = "default",
    iconName,
    ...props
  },
  ref,
) {
  return (
    <ElementType
      {...props}
      className={iconButton({
        size,
        shape,
        hasBorder:
          buttonType === "outline" ||
          buttonType === "outlineBackground" ||
          buttonType === "outlineLight" ||
          buttonType === "outlineLightBackground",
        isActive: state !== "disabled" && state !== "loading",
        isLoading: state === "loading",
        isDisabled: state === "disabled",
        stateLayer:
          buttonType === "fill" || buttonType === "fillLight"
            ? "filled"
            : "notFilled",
      })}
      disabled={ElementType === "button" ? state === "disabled" : undefined}
      ref={ref}
      style={{
        color: token(
          `c_iconButton_color_contents_${buttonColor}_${buttonType}_${state}`,
        ),
        borderColor: token(
          `c_iconButton_color_border_${buttonColor}_${buttonType}_${state}`,
        ),
        background: token(
          `c_iconButton_color_background_${buttonColor}_${buttonType}_${state}`,
        ),
      }}
      type={ElementType === "button" ? props.type ?? "button" : undefined}
    >
      {state === "loading" ? (
        <Spinner
          color={getSpinnerColor({
            buttonColor,
            buttonType,
          })}
          size={getSpinnerSize({
            size,
          })}
        />
      ) : (
        <Icon
          fill={token(
            `c_iconButton_color_contents_${buttonColor}_${buttonType}_${state}`,
          )}
          height={token(`c_iconButton_size_icon_${size}`)}
          iconName={iconName}
          width={token(`c_iconButton_size_icon_${size}`)}
        />
      )}
    </ElementType>
  );
}) as PolymorphicForwardRefComponent<"button", IconButtonProps>;
