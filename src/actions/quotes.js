export const addQuote = quote => {
  console.log("Adding Quote")
  return {
    type: "ADD_QUOTE",
    quote: {...quote, votes: 0}
  }
}

export const removeQuote = quoteId => {
  return {
    type: "REMOVE_QUOTE",
    quoteId
  }
}

export const upvoteQuote = quoteId => {
  return {
    type: "UPVOTE_QUOTE",
    quoteId
  }
}

export const downvoteQuote = quoteId => {
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId
  }
}
