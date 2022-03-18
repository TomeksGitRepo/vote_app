import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { deleteVote, createVote } from "../mockup/apiCall";
import { createAbstractBuilder } from "typescript";

function CreateVote(props: any) {
  const [user_input_id, set_user_input_id] = useState("");

function submit_form(event: any) {
    event.preventDefault();
    createVote(user_input_id);
}

  return (
    <div className="row">
      <form onSubmit={submit_form}>
          <label >ID input</label>
          <input onChange={event => set_user_input_id(event.target.value) } type="text" />
          <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateVote;
