import { Metadata } from "./Map/Metadata";
import { Stats } from "./Map/Stats";
import { Uploader } from "./Map/Uploader";

export interface IBeatSaverMap {
    metadata:       Metadata;
    stats:          Stats;
    description:    string;
    deletedAt:      string;
    _id:            string;
    key:            string;
    name:           string;
    uploader:       Uploader;
    hash:           string;
    uploaded:       Date;
    directDownload: string;
    downloadURL:    string;
    coverURL:       string;
}