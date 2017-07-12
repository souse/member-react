import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cells, Cell, CellHeader, CellBody, Button } from 'react-weui';

import CardMessage from 'MIXIN/cardMessage';
import API from 'API';

class Recharge extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}

	render() {		
		return (
			<div className="member-recharge">
				{ CardMessage() }	
				<Cells className="balance-msg weui-cell-no-dish">
					<Cell>
						<CellBody>我的余额：666.00元</CellBody>
					</Cell>
					<Cell>
						<CellBody>累计充值：666.00元</CellBody>
					</Cell>
				</Cells>
				<div className="recharge-ms">
					<h3>充值金额</h3>
					<ul>
						<li>
							<p>充2000元</p>
							<small>送400元</small>
						</li>
						<li>
							<p>充1000元</p>
							<small>送400元</small>
						</li>
						<li className="li3 active">
							<p>充500元</p>
							<small>送400元</small>
						</li>
						<li>
							<p>充200元</p>
							<small>送400元</small>
						</li>
					</ul>
				</div>
				<p className="recharge-protocol">
					点击充值，即表示已阅读并同意<a href="javascript:;">《充值协议》</a>
				</p>
				<Button className="max-btn" onClick={() => this.context.router.push('/member/recharge/payonline')}>充值</Button>
			</div>
		)	
	}
}

Recharge.contextTypes = {
	router: PropTypes.object.isRequired,
  	store: PropTypes.object.isRequired
};

Recharge.propTypes = {};

export default Recharge;