import { ImageResponse } from "next/og";

export const shareImageSize = { width: 1200, height: 630 };
export const shareImageContentType = "image/png";
export const shareImageAlt =
  "Dad Ledger, a YouTube documentary channel on faith, family, fatherhood, and smart wealth.";

export function ShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3efe7",
          color: "#1b1915",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#4a453c",
          }}
        >
          YouTube documentary channel
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              lineHeight: 1,
              fontFamily: "Georgia, serif",
            }}
          >
            Dad Ledger
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: 860,
            }}
          >
            Faith, family, fatherhood, and smart wealth.
          </div>
        </div>
      </div>
    ),
    { ...shareImageSize },
  );
}
