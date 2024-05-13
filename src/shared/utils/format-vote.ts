export const formatVote = (vote: number) => {
  if (vote >= 1000000) {
    return `${Math.round(vote / 1000000)}M`;
  } else if (vote >= 1000) {
    return `${Math.round(vote / 1000)}K`;
  } else {
    return vote.toString();
  }
};
