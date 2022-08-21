var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
define("schemas", ["require", "exports", "@hapi/joi"], function (require, exports, joi_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.YourVoiceTranscriptTheirVoiceSchema = exports.ChangedPairingSchema = void 0;
    joi_1 = __importStar(joi_1);
    //object.shape and object literally do the same thing, object shape is just the long forms
    //nested objects are just so you don't have to write multiple short objects. you can reuse an object to check multiple fields and for nested fields
    //placeholder comments that get fixed final test again. but previous commit before this worked with everything. recheck
    exports.ChangedPairingSchema = (0, joi_1.object)({
        text: joi_1.default.string().required(),
        changed: joi_1.default.boolean().default(false),
        commited: joi_1.default.boolean().default(false)
    });
    exports.YourVoiceTranscriptTheirVoiceSchema = (0, joi_1.object)({
        yourVoice: exports.ChangedPairingSchema.required(),
        transcript: exports.ChangedPairingSchema.required(),
        theirVoice: exports.ChangedPairingSchema.required(),
        characterId: joi_1.default.string().required(),
        soundId: joi_1.default.string(),
    });
});
