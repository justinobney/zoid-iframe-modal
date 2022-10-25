/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path='./types/zoid/index.d.ts' />

import * as zoid from "@krakenjs/zoid/dist/zoid.frame";
import componentFactory from "./component";

const ZOID_EVENTS = [
  "RENDER",
  "RENDERED",
  "PRERENDER",
  "PRERENDERED",
  "DISPLAY",
  "ERROR",
  "CLOSED",
  "PROPS",
  "RESIZE",
];

const createBridge = (containerId: string) => {
  const componentInstance = componentFactory({
    setFrameClass(classNames: string) {
      ((document.querySelector(`#${containerId}`) as any)
        .classList as unknown) = classNames;
    },
    name: "Justin",
  });

  ZOID_EVENTS.forEach((x) => {
    componentInstance.event.on(zoid.EVENT[x], (...args: any[]) => {
      console.log("zoid event!", x, args);
    });
  });

  console.log("rendering");
  componentInstance
    .render(`#${containerId}`)
    .catch((err: Error) => {
      console.error(err);
    })
    .then(() => {
      console.log("rendered?");
    });

  return componentInstance;
};

export default createBridge;
