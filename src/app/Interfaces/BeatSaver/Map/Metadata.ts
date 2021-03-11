import { Characteristic } from "./Metadata/Characteristic";
import { MetadataDifficulties } from "./Metadata/MetadataDiffuculties";

export interface Metadata {
    difficulties:    MetadataDifficulties;
    duration:        number;
    automapper:      boolean | null;
    characteristics: Characteristic[];
    levelAuthorName: string;
    songAuthorName:  string;
    songName:        string;
    songSubName:     string;
    bpm:             number;
}
