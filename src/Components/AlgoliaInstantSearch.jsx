import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  'KR2MJYJXFY',
  'fe09bac9s14e710ebc8d1c4ee28ad45cb'
)

const AlgoliaInstantSearch = () => {
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName='demo_ecommerce'>
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  )
}

export default AlgoliaInstantSearch
