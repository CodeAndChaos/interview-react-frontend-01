import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { MasterDetail } from "./MasterDetail";

const FEED_QUERY = gql`
  query {
    search(query: "org.facebook", type: REPOSITORY, first: 100) {
      nodes {
        ... on Repository {
          title: name
          content: description
        }
      }
    }
  }
`;

export const GitHubList: React.FC = () => {
  const { loading, error, data } = useQuery(FEED_QUERY);

  if (loading) return <>"Loading..."</>;
  if (error) return <>`Error! ${error.message}`</>;

  const payload = data.search.nodes;

  return <MasterDetail payload={payload} />;
};
