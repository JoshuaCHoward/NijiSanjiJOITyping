import Joi,{Schema,object} from 'joi'

//object.shape and object literally do the same thing, object shape is just the long forms
//nested objects are just so you don't have to write multiple short objects. you can reuse an object to check multiple fields and for nested fields
//placeholder comments that get fixed final test again. but previous commit before this worked with everything. recheck
//
// export interface IChangedPairing {
//     text: string,
//     changed:boolean ,
//     commited:boolean,
//
// }
//
// export interface IYourVoiceTranscriptTheirVoice {
//     yourVoice?: IChangedPairing ,
//     transcript?: IChangedPairing,
//     theirVoice?: IChangedPairing,
//     soundId?:string
//     characterId: string
// }
//
// export interface IListYourVoiceTranscriptTheirVoice {
//     items: Array<IYourVoiceTranscriptTheirVoice>,
// }
//
// export interface ProcessCharacter{
//     characterId: string
//
// }


export const ChangedPairing= object({
        text: Joi.string().required(),
        changed: Joi.boolean().default(false),
        commited: Joi.boolean().default(false)
});
export const YourVoiceTranscriptTheirVoice = object({
    yourVoice: ChangedPairing.required(),
    transcript: ChangedPairing.required(),
    theirVoice: ChangedPairing.required(),
    characterId: Joi.string().required(),
    soundId: Joi.string(),
})


