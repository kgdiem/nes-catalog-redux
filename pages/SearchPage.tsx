import React, { useEffect } from "react";
import { useSelector, connect } from 'react-redux';

import { GameList, Header, Pagination, SearchBar } from "../components";
import { getList, getPage,  getQuery, search } from '../redux';

const SearchPageComponent = ({ search }) => {
  const results = useSelector(getList);
  const page = useSelector(getPage);
  const query = useSelector(getQuery)

  const _search = (query?, page?) => search(query, page);

  useEffect(() => {
    _search(query, page);
  }, []);

  const changePage = (pageNum) => {
    _search(query, pageNum);
  }

  const doSearch = query => {
    _search(query, 1);
  }

  return (
    <div className="p-10">
      <Header />

      <SearchBar value={query} onChange={doSearch} />

      <GameList list={results} />

      <Pagination 
        current={page} 
        click={changePage} 
        pageSize={20} 
        total={results?.count}
      />
    </div>
  );
};

export const SearchPage = connect(null, { search })(SearchPageComponent);
