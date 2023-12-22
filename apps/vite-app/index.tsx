import React from "react";
import { createRoot } from "react-dom/client";
import "@cpdev2/design-system/dist/index.css";
import { Button } from "@cpdev2/design-system";

const element = document.getElementById("app");
if (element) {
  const root = createRoot(element);
  root.render(
    <section>
      <h1>hello world</h1>
      <div>
        <Button display="inline-flex">hello world</Button>
      </div>
    </section>,
  );
}
