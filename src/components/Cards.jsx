import React from 'react';
import Card from './Card';
import styles from "./Cards.module.css"

import { connect } from "react-redux";
import { fetchCityInfo, removeCity } from "../actions";

function Cards(props) {
  // props --> array de objetos ciudades
  console.log(props)

  return (
    <div className={ styles.cardContainer }>
      { props.cities.map((city, index) =>
        <Card key={ index }
          onClose={ () => props.removeCity(city.name) }
          img={ city.weather[0].icon }
          name={ city.name }
          min={ Math.round(city.main.temp_min) + "º" }
          max={ Math.round(city.main.temp_max) + "º" }

        />

      )
      }

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
    removeCity: city => dispatch(removeCity(city))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);