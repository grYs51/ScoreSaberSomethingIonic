export function getAccFromScore(score, maxSongScore = null, percentageInsteadOfAcc = false) {
  const scoreMult = !percentageInsteadOfAcc && score.uScore && score.score ? score.score / score.uScore : 1

  return maxSongScore
    ? score.score / maxSongScore / scoreMult * 100
    : (score.maxScoreEx
      ? score.score / score.maxScoreEx / scoreMult * 100
      : null)
}
