import React, { useState, useEffect } from "react";
import { useSelector, connect } from 'react-redux';

import { GameList, Header, Pagination, SearchBar } from "../components";
import { getList, search } from '../redux';

const SearchPageComponent = ({ search }) => {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const results = useSelector(getList);

  const _search = (query?, page?) => search(query, page);

  useEffect(() => {
    _search();
  }, []);

  const changePage = (pageNum) => {
    setPage(pageNum);

    _search(query, pageNum);
  }

  const doSearch = query => {
    setPage(1);
    setQuery(query);

    _search(query, 1);
  }

  return (
    <div className="p-10">
      <Header />

      <SearchBar onChange={doSearch} />

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
