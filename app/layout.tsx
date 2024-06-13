import type { Metadata } from "next";
import "./globals.css";
import QueryClientProvider from "@/components/QueryClientProvider";

export const metadata: Metadata = {
  title: "Country Search",
  description: "Simple, easy-to-use world countries search provided by an Restful API",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <QueryClientProvider>
          {props.children}
          {props.modal}
          <div id="modal-root" />
        </QueryClientProvider>
      </body>
    </html>
  );
}