import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "KR2MJYJXFY",
  "305635d41cc1e7781ec2842466e9d413"
);

const AlgoliaInstantSearch = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
};

export default AlgoliaInstantSearch;
