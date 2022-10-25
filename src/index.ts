/* eslint-disable @typescript-eslint/no-explicit-any */

import "core-js/stable";
import "./index.css";

import MicroModal from "micromodal";
import createBridge from "./bridge";

const constants = {
  paymentTrigger: "data-paystar-checkout",
  modalId: "paystar-checkout-host",
  modalTrigger: "data-micromodal-trigger",
  modalContent: "paystar-checkout-host-content",
};

const instance = {
  component: null as any,
  modal: null as any,
};

function initialize() {
  try {
    const MODAL_HTML = `<div id="${constants.modalId}" aria-hidden="true" class="paystar modal"><div tabindex="-1" data-micromodal-close class="modal__overlay"><div role="dialog" aria-modal="true" aria-label="Paystar Checkout Modal"><button aria-label="Close modal" data-micromodal-close class="modal__close"></button><div id="${constants.modalContent}" class="modal__content"></div></div></div></div>`;

    const selector = `[${constants.paymentTrigger}]`;
    const paymentButton = document.querySelector(selector) as HTMLDataElement;

    if (paymentButton) {
      paymentButton.setAttribute(constants.modalTrigger, constants.modalId);

      const container = document.createElement("div");
      container.innerHTML = MODAL_HTML;
      document.body.appendChild(container.firstChild as any);

      MicroModal.init({
        onShow: (modal) => {
          const component = createBridge(constants.modalContent);
          instance.component = component;
          instance.modal = modal;
          console.log(instance);

          component.show();
        },
      });
    }
  } catch (err) {
    console.error("Unable to create bridge", err); // eslint-disable-line
  }
}

(window as any).__MyComponent__ = instance;
initialize();
