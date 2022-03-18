import React, {useEffect} from "react";
import { connect } from "react-redux";
import { useSearchInput } from "../hooks/search-input-hook";
import { downloadAllVotes } from "../actions";
import {Link} from "react-router-dom"
import { deleteVote } from "../mockup/apiCall";

function VoteList(props: any) {
    useEffect( () => {
        props.downloadAllVotes()
    }, [])


  return (
    <>
    <nav>
        <Link to="/create_vote">
            Create Vote
            </Link>
    </nav>
      <div className="column">
        {props.allVotes.map((item: any) => {
          return (
            <ul key={item.id}>
              <Link to={`/votes/${item.id}`}>
                <li>Vote id: {item.id}</li>
                <li>Image id: {item.image_id}</li>
              </Link>
              <button
                onClick={async () => {
                  await deleteVote(item.id);
                  props.downloadAllVotes();
                }}
                style={{ color: "red" }}
              >
                Delete
              </button>
            </ul>
          );
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  if (state.allVotes) {
    return {
        allVotes: state.allVotes
    };
  }
};

export default connect(mapStateToProps, { downloadAllVotes })(VoteList);
