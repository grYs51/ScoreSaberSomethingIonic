export interface ISongScore {
    rank: number;
    scoreId: number;
    score: number;
    // TODO
    unmodififiedScore: number;
    mods: number;
    pp: number;
    weight: number;
    timeset: Date;
    leaderboardId: number;
    songHash: string;
    songName: string;
    songSubName: string;
    songAuthorName: string;
    levelAuthorName: string;
    difficulty: number;
    difficultyRaw: string;
    maxScore: number;
}
