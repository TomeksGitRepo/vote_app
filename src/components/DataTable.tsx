import React from "react";
import {connect} from 'react-redux';

export type AssigneStatus = {
  person_name: string;
  status: string;
};

export type DataItem = {
  "WO ID": number;
  Description: string;
  "Received date": Date;
  "Assigned to": AssigneStatus[];
  Status: string;
  Priority: string;
}

export function parseData(value: string) : DataItem[] {
  let parsedData = [];
  let dataObject = JSON.parse(value);
  parsedData = dataObject["response"]["data"].map(
    (item: {
      work_order_id: number;
      description: string;
      received_date: string;
      assigned_to: [
        {
          person_name: string;
          status: string;
        }
      ];
      status: string;
      priority: string;
    }) => {
      let parsedItem: DataItem = {
        "WO ID": item.work_order_id,
        Description: item.description,
        "Received date": new Date(item.received_date),
        "Assigned to": item.assigned_to.map((assignees) => assignees),
        Status: item.status,
        Priority: item.priority,
      };
      return parsedItem;
    }
  );
  return parsedData;
}



function DataTable(props: any) {
  return (
    <div className="row" >
      <table>
        <tbody>
          <tr>
            <th>WO ID</th>
            <th>Description</th>
            <th>Received date</th>
            <th>Assigned to</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
          {props.results != 0
            ? props.results.map((item: any) => {
                return (
                  <tr key={item["WO ID"]}>
                    <td>{item["WO ID"]}</td>
                    <td>{item.Description}</td>
                    <td>{item["Received date"].toUTCString()}</td>
                    <td style={{ whiteSpace: "pre" }}>
                        {item["Assigned to"].map(
                          (assigneStatus: any) => {
                            return <div>{`${assigneStatus.person_name} - Status: ${assigneStatus.status}`}</div>
                          }
                            
                        )}
                    </td>
                    <td>{item.Status}</td>
                    <td>{item.Priority}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  if (state.searchQuery !== "") {
    return {results: state.allTasks.filter((item: DataItem) => item.Description.toLowerCase().includes(state.searchQuery.toLowerCase()))}
  } else {
    return { results: state.allTasks };
  } 
};

export default connect(mapStateToProps)(DataTable);

