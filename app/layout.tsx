import type { Metadata } from "next";
import "./globals.css";

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
        {props.children}
        {props.modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}