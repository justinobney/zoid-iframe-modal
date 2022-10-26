/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path='./types/zoid/index.d.ts' />

const HOST_URL = "https://localhost:44300";
const HOST_DOMAIN = "https://localhost:3000";
const SLUG = "test-business-unit";

import * as zoid from "@krakenjs/zoid/dist/zoid.frame";

export default zoid.create({
  tag: "iframe-widget",
  url: `${HOST_URL}/embedded/${SLUG}/payment-source`,
  domain: HOST_DOMAIN,
  dimensions: {
    width: "500px",
    height: "100%",
  },
  autoResize: {
    width: false,
    height: true,
  },
});
