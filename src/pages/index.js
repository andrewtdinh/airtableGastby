import React from "react";
import { graphql } from 'gatsby';

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Items"}}) {
      nodes {
        table
        data {
          Name
          Company {
            data {
              Name
            }
          }
          Role
        }
      }
    }
  }
`;

export default function Home({ data }) {
  return (
    <div>
      <h2>My Resume</h2>
      <ul>
        {data.allAirtable.nodes.filter(node => node.data.Name).map(node => (
          <li key={node.recordId}>{node.data.Role} at {node.data.Name}</li>
        ))}
      </ul>
    </div>
  )
}
