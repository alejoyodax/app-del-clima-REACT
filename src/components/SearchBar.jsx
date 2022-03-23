import React, { useState } from 'react';

import styles from "./SearchBar.module.css"
import logo from "../components/img/logo.png"

import { connect } from "react-redux";
import { fetchCityInfo } from "../actions";

function SearchBar(props) {
  // acá va tu código
  const [state, setState] = useState({ ciudad: "" });


  function handleChangeInput(event) {
    setState({ ciudad: event.target.value })
    // console.log(state);
  }

  return (
    <div className={ styles.searchBarContainer }>

      <span>
        <img className={ styles.logo } src={ logo } alt="logo" />
      </span>

      <span className={ styles.formSearch } >
        <input className={ styles.input } value={ state.ciudad } onChange={ handleChangeInput } type="text" />
        <button className={ styles.btn } onClick={ () => props.fetchCityInfo(state.ciudad) }>AGREGAR</button>
      </span>

    </div>)



};

function mapStateToProps(state) {
  return {
    cities: state.citiesFav,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCityInfo: city => dispatch(fetchCityInfo(city)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);