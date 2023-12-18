
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { getWhippyName } from "./lib/actions/whippy";
import { createContact } from "./lib/actions/contacts/create-contact";
import { createNote } from "./lib/actions/messages/create-note";
import { updateContact } from "./lib/actions/contacts/update-contact";
import { sendMessage } from "./lib/actions/messages/send-message";
import { listContacts } from "./lib/actions/contacts/list-contact";

export const whippy = createPiece({
  displayName: "Whippy",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.9.0',
  logoUrl: "https://www.whippy.ai/logo.svg",
  authors: [],
  actions: [sendMessage,createContact,createNote,updateContact,listContacts],
  triggers: [],
});
