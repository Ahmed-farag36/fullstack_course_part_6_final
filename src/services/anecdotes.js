const baseURL = "https://i0x6s-3000.sse.codesandbox.io";

export async function getAll() {
  const res = await fetch(`${baseURL}/anecdotes`);
  return res.json();
}

export async function newAnecdote(anecdote) {
  fetch(`${baseURL}/anecdotes`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ content: anecdote, votes: 0 })
  });
}

export async function voteAnecdoteService({ id, content, votes }) {
  fetch(`${baseURL}/anecdotes/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ content, votes: votes + 1 })
  });
}
