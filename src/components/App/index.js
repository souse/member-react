import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.less';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}	

	render() {		
		return (
			<div>
				{ this.props.children }
			</div>	
		)	
	}
}

App.propTypes = {
	children: PropTypes.node.isRequired
};

export default App;