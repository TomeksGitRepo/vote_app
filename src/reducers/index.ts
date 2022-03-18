import { PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {  parseData } from "../components/DataTable";
import { ActionType } from "../actions";

const allVotesReducer = (state = [], action: PayloadAction<string>) => {
    switch (action.type) {
        case ActionType.VotesDownload:
                return action.payload;
        default: 
            return state;
    }
    
}

export default combineReducers({
  allVotes: allVotesReducer,
});