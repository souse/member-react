import React, { Component } from 'react';

import API from 'API';

class PayCode extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}

	render() {		
		return (
			<div className="member-paycode">
				<div className="paycode-content">
					<h2>卡余额：<strong>￥66.00</strong>元</h2>
					<img className="tiaoma" src={ require('./images/icon-tiaoma.png') } alt=""/>
					<h4>2870 6800 7682 2996</h4>
					<img className="erweima" src={ require('./images/icon-erweima.png') } alt=""/>	
				</div>
				<footer>
					倒计时36s后自动更新
				</footer>
			</div>
		)	
	}
}

PayCode.propTypes = {};

export default PayCode;