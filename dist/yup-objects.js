"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourVoiceTranscriptTheirVoice = exports.ChangedPairing = void 0;
const yup_1 = require("yup");
exports.ChangedPairing = (0, yup_1.object)({
    text: (0, yup_1.string)().required(),
    changed: (0, yup_1.boolean)().default(false),
    commited: (0, yup_1.boolean)().default(false)
});
exports.YourVoiceTranscriptTheirVoice = (0, yup_1.object)({
    yourVoice: exports.ChangedPairing.required(),
    transcript: exports.ChangedPairing.required(),
    theirVoice: exports.ChangedPairing.required(),
    id: (0, yup_1.string)(),
});
