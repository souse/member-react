import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Page, Cells, Cell, CellHeader, CellBody, CellFooter, Footer, FooterText } from 'react-weui';

import API from 'API';

class Bill extends Component {
	constructor(props) {
		super(props);

		this.state = {
            items: [...Array(20).keys()]
        }
	}
	componentWillMount() {}	

	render() {		
		return (
			<div className="member-bill">
				<Cells className="bill-title">
					<Cell>
						<CellHeader>账单数量：</CellHeader>
						<CellBody>2</CellBody>
					</Cell>	
				</Cells>
				<div className="bill-list">
					<Cells onClick={() => this.context.router.push('/member/bill/detail')}>
						<Cell access>
							<CellBody className="bill-ds">
								<Cell>
									<CellHeader className="bill-le">消费金额</CellHeader>
									<CellBody>￥3600</CellBody>
								</Cell>	
								<Cell>
									<CellHeader className="bill-le">支付金额</CellHeader>
									<CellBody>￥3600</CellBody>
								</Cell>
								<Cell>
									<CellHeader className="bill-le">账单日期</CellHeader>
									<CellBody>2016-02-26 12:30:26</CellBody>
								</Cell>
								<Cell>
									<CellHeader className="bill-le">支付方式</CellHeader>
									<CellBody>支付宝</CellBody>
								</Cell>
							</CellBody>
							<CellFooter />
						</Cell>	
					</Cells>
				</div>
			</div>
		)	
	}
}

Bill.contextTypes = {
	router: PropTypes.object.isRequired,
  	store: PropTypes.object.isRequired
};

Bill.propTypes = {};

export default Bill;