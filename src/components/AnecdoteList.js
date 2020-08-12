import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { voteAnecodate, initAnecdotes } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

function AnecdoteList({ anecdotes, filter }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAnecdotes());
  }, [dispatch]);

  const vote = (anecdote) => {
    dispatch(voteAnecodate(anecdote));
    dispatch(setNotification("ANECDOTE VOTED", 10));
  };

  return (
    <>
      {anecdotes
        .filter((anecdote) => anecdote.content.includes(filter))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  };
};

export default connect(mapStateToProps)(AnecdoteList);
