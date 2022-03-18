import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { deleteVote } from "../mockup/apiCall";

function VoteDetail(props: any) {
  const { vote_id } = useParams();
  const [element, setElement] = useState();

  useEffect(() => {
    async function getVoteById() {
      let result = await axios.get(
        `https://api.thecatapi.com/v1/votes/${vote_id}`,
        {
          headers: {
            "x-api-key": "DEMO-API-KEY",
          },
        }
      );

      setElement(result.data);
    }
    getVoteById()
  });

  return <div className="row">Vote detail {vote_id}
  <p>{JSON.stringify(element)}</p>
  <button onClick={() => deleteVote(vote_id)}> Delete vote</button></div>;
}

export default VoteDetail;
