import type { CSSProperties } from "react";

export const all = [
  "initial",
  "unset",
  "revert",
] satisfies CSSProperties["all"][];

export const position = [
  "relative",
  "absolute",
  "fixed",
  "sticky",
] satisfies CSSProperties["position"][];

export const display = [
  "inline-flex",
  "flex",
] satisfies CSSProperties["display"][];

export const flexDirection = [
  "row",
  "row-reverse",
  "column",
  "column-reverse",
] satisfies CSSProperties["flexDirection"][];

export const alignItems = [
  "center",
  "stretch",
  "flex-start",
  "flex-end",
  "baseline",
] satisfies CSSProperties["alignItems"][];

export const justifyContent = [
  "center",
  "flex-start",
  "flex-end",
  "space-around",
  "space-between",
  "space-evenly",
] satisfies CSSProperties["justifyContent"][];

export const flexWrap = [
  "wrap",
  "nowrap",
] satisfies CSSProperties["flexWrap"][];

export const textAlign = [
  "left",
  "center",
  "right",
] satisfies CSSProperties["textAlign"][];

export const boxSizing = [
  "border-box",
  "content-box",
] satisfies CSSProperties["boxSizing"][];

export const borderStyle = [
  "solid",
  "dashed",
] satisfies CSSProperties["borderStyle"][];

export const cursor = [
  "auto",
  "pointer",
  "not-allowed",
  "inherit",
] satisfies CSSProperties["cursor"][];

export const wordBreak = [
  "normal",
  "break-all",
  "keep-all",
] satisfies CSSProperties["wordBreak"][];
