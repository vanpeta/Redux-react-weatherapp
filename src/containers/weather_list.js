import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
					</tr>
					<tr>
						<th>Temperature</th>
					</tr>
					<tr>
						<th>Preasure</th>
					</tr>
					<tr>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
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