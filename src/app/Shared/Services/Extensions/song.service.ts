export function getAccFromScore(score, maxSongScore = null, percentageInsteadOfAcc = false) {
  const scoreMulti = !percentageInsteadOfAcc && score.uScore && score.score ? score.score / score.uScore : 1;

  return maxSongScore
    ? score.score / maxSongScore / scoreMulti * 100
    : (score.maxScoreEx
      ? score.score / score.maxScoreEx / scoreMulti * 100
      : null);
}
