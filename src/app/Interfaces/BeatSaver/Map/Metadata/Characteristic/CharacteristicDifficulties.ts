import { Difficulties } from "./Difficulties/Difficulties";

export interface CharacteristicDifficulties {
    easy:       Difficulties | null;
    expert:     Difficulties | null;
    expertPlus: Difficulties | null;
    hard:       Difficulties | null;
    normal:     Difficulties | null;
}