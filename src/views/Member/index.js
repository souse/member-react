import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import getWx from 'ACTION/wx';

import './index.less';

class Member extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}	

	render() {	
		const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
	       	...this.props
	    }));	
		return (
			<div className="member-container">
				{ childrenWithProps }
			</div>	
		)	
	}
}

Member.propTypes = {
	children: PropTypes.node.isRequired
};

const mapStateToProps = (state) => {
	return {
		wx: state.wx
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getWx }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Member);