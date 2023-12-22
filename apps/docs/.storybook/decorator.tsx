import React from "react";
import type { Decorator } from "@storybook/react";

export const withTheme: Decorator = (StoryFn) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: "var(--s_color_background_default)",
          color: "var(--s_color_contents_default)",
        }}
        data-ds-theme="light"
      >
        <StoryFn />
      </div>
      <div
        style={{
          background: "var(--s_color_background_default)",
          color: "var(--s_color_contents_default)",
        }}
        data-ds-theme="dark"
      >
        <StoryFn />
      </div>
    </div>
  );
};
