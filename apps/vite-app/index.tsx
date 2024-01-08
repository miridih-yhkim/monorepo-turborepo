import "@cpdev2/design-system/dist/index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { token } from "@cpdev2/primitive";
import { icon_approval_check } from "@cpdev2/iconography";
import {
  CommonButton,
  Typography,
  Spinner,
  View,
  Icon,
} from "@cpdev2/design-system";

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
          background: token(`s_color_background_default`),
          color: token(`s_color_contents_default`),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        {isPending && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Typography font="body_M" color="contents_sub">
              테마 변경중...
              <Spinner size="M" color="primary" />
            </Typography>
          </div>
        )}
        <View display="flex" flexDirection="column" alignItems="flex-start">
          <Icon iconName={icon_approval_check} width={24} height={24} />
          <Typography
            as="h1"
            font="title_2XL"
            color="contents_default"
            marginY="60"
          >
            hello world
          </Typography>
          <CommonButton
            onClick={() => {
              startTransition(() => {
                setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"));
              });
            }}
          >
            theme: {currentTheme}
          </CommonButton>
        </View>
      </section>
    </div>
  );
};

const element = document.getElementById("app");
if (element) {
  const root = createRoot(element);
  root.render(<App theme="light" />);
}
