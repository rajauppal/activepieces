
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { getWhippyName } from "./lib/actions/whippy";
import { sendMessage } from "./lib/actions/send-message";

export const whippy = createPiece({
  displayName: "Whippy",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.9.0',
  logoUrl: "https://www.whippy.ai/logo.svg",
  authors: [],
  actions: [sendMessage],
  triggers: [],
});
