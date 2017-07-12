import React, { Component } from 'react';
import { Cells, Cell, CellHeader, CellBody, CellFooter, Footer, FooterText } from 'react-weui';

import API from 'API';

class BillDetail extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}	

	render() {		
		return (
			<div className="member-billdetail">
				<div>
					<Cell className="bd-title">
						<CellHeader>账单列表</CellHeader>
						<CellBody>NO.7582 2097 2688 2699</CellBody>	
					</Cell>
					<Cell className="bd-moeny">
						<CellBody>
							-299.60
							<p>交易完成</p>
						</CellBody>	
					</Cell>	
					<Cell className="mb-1">
						<CellBody className="dishs-list">
							<Cell>
								<CellHeader className="bd-hd">精品烤鸭</CellHeader>
								<CellBody>1只</CellBody>
								<CellFooter>￥199</CellFooter>
							</Cell>
							<Cell>
								<CellHeader className="bd-hd">泰钰丰大拌菜</CellHeader>
								<CellBody>1只</CellBody>
								<CellFooter>￥199</CellFooter>
							</Cell>
							<Cell>
								<CellHeader className="bd-hd">消费金额</CellHeader>
								<CellBody>1只</CellBody>
								<CellFooter>￥199</CellFooter>
							</Cell>
						</CellBody>
					</Cell>
					<Cell className="mb-1">
						<CellBody className="dishs-pay">
							<Cell>
								<CellHeader className="db-hd">合计：</CellHeader>
								<CellBody>4项</CellBody>
								<CellFooter>299.60元</CellFooter>
							</Cell>
							<Cell>
								<CellHeader className="db-hd">实付：</CellHeader>
								<CellBody />
								<CellFooter className="real-pay">299.60元</CellFooter>
							</Cell>
						</CellBody>
					</Cell>
				</div>
			</div>
		)	
	}
}

BillDetail.propTypes = {};

export default BillDetail;