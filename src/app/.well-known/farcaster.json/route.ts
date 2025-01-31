import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      message: {
        domain: "fartboard-memes.vercel.app",
        timestamp: 1738361436,
        expirationTime: 1746137436
      },
      signature: "56baa8c16d58285e80fbaa5913fa7c84a22ef2964790e81436628e6d7bbfbbca1f9688ac717929b1d64b414a07acdfe76e73ce67377d4241ecad09e5d0cea99d1b",
      signingKey: "1073c1c66258865785f072715dab4dbd4ae552b9014d150ff661b6d367e9aab5"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
