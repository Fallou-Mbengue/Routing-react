import React, { Component } from 'react'

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>
        <h1>Movie Forme {match.params.id} </h1>
      </h1>
      <button
        className='btn btn-primary'
        onClick={() => history.push('/movies')}
      >
        Save
      </button>
    </div>
  )
}

export default MovieForm
