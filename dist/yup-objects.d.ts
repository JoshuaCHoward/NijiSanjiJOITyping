import { SchemaOf } from 'yup';
export interface IChangedPairing {
    text: string;
    changed: boolean;
    commited: boolean;
}
export interface IYourVoiceTranscriptTheirVoice {
    yourVoice?: IChangedPairing;
    transcript?: IChangedPairing;
    theirVoice?: IChangedPairing;
    id?: string;
}
export interface IListYourVoiceTranscriptTheirVoice {
    items: Array<IYourVoiceTranscriptTheirVoice>;
}
export declare const ChangedPairing: SchemaOf<IChangedPairing>;
export declare const YourVoiceTranscriptTheirVoice: SchemaOf<IYourVoiceTranscriptTheirVoice>;
//# sourceMappingURL=yup-objects.d.ts.map