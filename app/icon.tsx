import { ImageResponse } from "next/og";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/svg+xml",
      size: { width: 32, height: 32 },
      id: "favicon",
    },
    {
      contentType: "image/svg+xml",
      size: { width: 180, height: 180 },
      id: "apple-touch-icon",
    },
  ];
}

export default function Icon({ id }: { id: string }) {
  const size = id === "favicon" ? 32 : 180;

  return new ImageResponse(
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 5333.3335 5333.3335"
        width={size}
        height={size}
      >
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,5333.3333)">
          <g transform="scale(0.1)">
            <g transform="scale(2.45399)">
              <path
                style={{
                  fill: "#14132e",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                d="M 16300,0 H 0 V 16300 H 16300 V 0"
              />
            </g>
            <g transform="scale(2.02438)">
              <path
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                }}
                d="M 8072.54,11547.5 V 10411.9 H 11624.1 V 9267.72 H 8078.22 V 5247.73 h 1135.6 V 8132.11 H 12759.7 V 11547.5 Z M 5818.32,16300 v -6092.5 h 1135.61 v 4956.9 H 12805.2 V 14008.9 H 8072.54 v -1808.4 h 1135.6 v 672.8 H 13940.8 V 16300 Z M 6953.93,4594.74 V 9554.47 H 5818.32 V 3459.13 h 3395.5 V 4594.74 H 6953.93"
              />
            </g>
          </g>
        </g>
      </svg>
    ),
    {
      width: size,
      height: size,
    }
  );
}
