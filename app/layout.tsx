import "./global.css";

import { PropsWithChildren } from "react";
import { ClientProvider } from "~/client/trpcClient";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClientProvider>
      <html lang="en" className="[color-scheme:dark]">
        <body>{children}</body>
      </html>
    </ClientProvider>
  );
}
