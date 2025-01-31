import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "fartboard-memes";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-purple-100">
        <div tw="flex flex-col items-center bg-white rounded-xl p-8 shadow-lg">
          <h1 tw="text-6xl font-bold text-purple-600 mb-4">{PROJECT_TITLE}</h1>
          <h3 tw="text-2xl text-gray-600 text-center">{PROJECT_DESCRIPTION}</h3>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
