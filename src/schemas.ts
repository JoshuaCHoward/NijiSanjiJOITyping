import Joi,{object} from 'joi'

//object.shape and object literally do the same thing, object shape is just the long forms
//nested objects are just so you don't have to write multiple short objects. you can reuse an object to check multiple fields and for nested fields
//placeholder comments that get fixed final test again. but previous commit before this worked with everything. recheck


export const ChangedPairingSchema= object({
        text: Joi.string().required(),
        changed: Joi.boolean().default(false),
        commited: Joi.boolean().default(false)
});
export const YourVoiceTranscriptTheirVoiceSchema = object({
    yourVoice: ChangedPairingSchema.required(),
    transcript: ChangedPairingSchema.required(),
    theirVoice: ChangedPairingSchema.required(),
    characterId: Joi.string().required(),
    soundId: Joi.string(),
})


