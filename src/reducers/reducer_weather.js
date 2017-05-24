import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
		// instead using push, we want to use a pure function and don't mutate state inside a reducer, then we use concat which returns a new instance of state
			//return state.concat([ action.payload.data ]);
			//EJS6 syntax
			return [ action.payload.data, ...state ];
	}
	return state;
}