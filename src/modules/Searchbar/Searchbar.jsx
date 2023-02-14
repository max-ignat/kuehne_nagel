import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
// import PacmanLoader from 'react-spinners/BeatLoader';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

Notiflix.Notify.init({
  position: 'right-top',
  clickToClose: 'true',
});

const Searchbar = ({ submitPropValue }) => {
  const [query, setQuery] = useState('');
//   const [loading, setLoading] = useState(false);

  const handleInputChange = event => {
    setQuery( event.currentTarget.value.toLowerCase());
    // const { value } = event.currentTarget;
    // setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return Notiflix.Notify.warning('Please enter your query');
    }
    
    // !передаем значение query в проп наверх
    submitPropValue(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  // const override = {
  //   // display: 'block',
  //   // margin: '0 auto',
  //   // borderColor: 'red',
  // };


  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch style={{ width: 22, height: 22 }} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          value={query}
          onChange={handleInputChange}
          name="query"
          // autofocus
          placeholder="which movies would you like to find?"
        />
        
      </SearchForm>
    </SearchbarHeader>
  );
};

export default Searchbar;

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired}