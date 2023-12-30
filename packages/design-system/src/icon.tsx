import React, { forwardRef } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { IconUrl } from "@cpdev2/iconography";
import { icon, iconUrlVar } from "./iconography.css";
import type { PolymorphicForwardRefComponent } from "./polymorphic";

export interface IconProps {
  /**
   * 1. 비즈하우스에 업로드된 svg 아이콘 url
   *        ...

   * 2. mds에 정의된 icon 이름
   */
  iconName: IconUrl;

  /**
   * 단일 색상코드보다는 mds에 정의된 토큰을 사용하는것을 추천함.
   */
  fill?: string;

  /**
   * @default 24
   */
  width?: React.CSSProperties["width"];

  /**
   * @default 24
   */
  height?: React.CSSProperties["height"];
}

export const Icon = forwardRef(function Icon(
  {
    as: ElementType = "i",
    iconName,
    fill,
    width = "24px",
    height = "24px",
    ...rest
  },
  ref,
) {
  return (
    <ElementType
      {...rest}
      className={icon}
      ref={ref}
      style={{
        ...assignInlineVars({
          [iconUrlVar]: iconName.value ? `url(${iconName.value})` : undefined,
        }),
        width,
        height,
        background: fill,
      }}
    />
  );
}) as PolymorphicForwardRefComponent<"i", IconProps>;
