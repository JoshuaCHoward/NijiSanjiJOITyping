import Joi from '@hapi/joi';
import "joi-extract-type";
export declare const ChangedPairingSchema: Joi.BoxObjectSchema<Joi.Box<Joi.extractMap<{
    text: Joi.BoxStringSchema<Joi.Box<string, true>>;
    changed: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
    commited: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
}>, false>>;
export declare const YourVoiceTranscriptTheirVoiceSchema: Joi.BoxObjectSchema<Joi.Box<Joi.extractMap<{
    yourVoice: Joi.BoxObjectSchema<Joi.Box<Joi.extractMap<{
        text: Joi.BoxStringSchema<Joi.Box<string, true>>;
        changed: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
        commited: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
    }>, true>>;
    transcript: Joi.BoxObjectSchema<Joi.Box<Joi.extractMap<{
        text: Joi.BoxStringSchema<Joi.Box<string, true>>;
        changed: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
        commited: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
    }>, true>>;
    theirVoice: Joi.BoxObjectSchema<Joi.Box<Joi.extractMap<{
        text: Joi.BoxStringSchema<Joi.Box<string, true>>;
        changed: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
        commited: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
    }>, true>>;
    characterId: Joi.BoxStringSchema<Joi.Box<string, true>>;
    soundId: Joi.BoxStringSchema<Joi.Box<string, false>>;
}>, false>>;
export declare const ListYourVoiceTranscriptTheirVoiceSchema: Joi.BoxObjectSchema<Joi.Box<Joi.extractMap<{
    items: Joi.BoxArraySchema<Joi.Box<Joi.extractMap<{
        yourVoice: Joi.BoxObjectSchema<Joi.Box<Joi.extractMap<{
            text: Joi.BoxStringSchema<Joi.Box<string, true>>;
            changed: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
            commited: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
        }>, true>>;
        transcript: Joi.BoxObjectSchema<Joi.Box<Joi.extractMap<{
            text: Joi.BoxStringSchema<Joi.Box<string, true>>;
            changed: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
            commited: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
        }>, true>>;
        theirVoice: Joi.BoxObjectSchema<Joi.Box<Joi.extractMap<{
            text: Joi.BoxStringSchema<Joi.Box<string, true>>;
            changed: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
            commited: Joi.BoxBooleanSchema<Joi.Box<boolean, false>>;
        }>, true>>;
        characterId: Joi.BoxStringSchema<Joi.Box<string, true>>;
        soundId: Joi.BoxStringSchema<Joi.Box<string, false>>;
    }>, true>>;
}>, false>>;
//# sourceMappingURL=schemas.d.ts.map