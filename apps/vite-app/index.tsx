import "@cpdev2/design-system/dist/index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Typography } from "@cpdev2/design-system";

const App = ({ theme }: { theme: "light" | "dark" }) => {
  const [currentTheme, setCurrentTheme] = React.useState<typeof theme>(theme);
  const [isPending, startTransition] = React.useTransition();

  return (
    <div
      style={{
        display: "contents",
      }}
      data-ds-theme={currentTheme}
    >
      <section
        style={{
          background: "var(--s_color_background_default)",
          color: "var(--s_color_contents_default)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div>
          <Typography
            as="h2"
            font="title_XL"
            color="contents_default"
            marginTop="0"
            marginBottom="60"
          >
            {isPending ? "changing theme..." : "hello world"}
          </Typography>
        </div>
      </section>
    </div>
  );
};

const element = document.getElementById("app");
if (element) {
  const root = createRoot(element);
  root.render(<App theme="light" />);
}
