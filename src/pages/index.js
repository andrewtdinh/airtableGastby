import React from "react";
import { graphql } from 'gatsby';

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Items"}}) {
      nodes {
        recordId
        data {
          Name
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
        {data.allAirtable.nodes.map(node => (
          <li key={node.recordId}>{node.data.Name}</li>
        ))}
      </ul>
    </div>
  )
}
