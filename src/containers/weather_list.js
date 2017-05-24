import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => (Math.round(weather.main.temp - 273.15)*100/100));
		const presasures = cityData.list.map(weather => weather.main.pressure);
		const humiditis = cityData.list.map(weather => weather.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="orange" units="C"/></td>
				<td><Chart data={presasures} color="red" units="hPa"/></td>
				<td><Chart data={humiditis} color="blue" units="%"/></td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Preasure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// function mapStateToProps(state) {
// 	return { weather: state.weather };
// }
//samesyntax in EJS6
function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList)