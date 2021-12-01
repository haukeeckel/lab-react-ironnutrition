import React from 'react';

function AddForm({ btnAdd }) {
  return (
    <>
      <form onSubmit={btnAdd}>
        <input
          className="input is-info"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="input is-info"
          name="calories"
          type="Number"
          placeholder="Calories"
        />
        <input
          className="input is-info"
          name="image"
          type="text"
          placeholder="Image URL"
        />
        <button className="button is-primary">GO!</button>
      </form>
    </>
  );
}

export default AddForm;
