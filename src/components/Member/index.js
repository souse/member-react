import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cells, Cell, CellHeader, CellBody, CellFooter } from 'react-weui';

import CardMessage from 'MIXIN/cardMessage';

class Index extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}	

	render() {
		return (
			<div className="member-index">
				{ CardMessage() }
				<Cells>
		            <Cell access onClick={() => this.context.router.push('/member/stored')}>
		            	<CellHeader>
                    		<img className="weui_cell_header_icon" src={require('./images/icon-chuzhi.png')} />
                		</CellHeader>
		                <CellBody>我的储值</CellBody>
		                <CellFooter/>
		            </Cell>
		            <Cell access onClick={() => this.context.router.push('/member/bill')}>
		            	<CellHeader>
                    		<img className="weui_cell_header_icon" src={require('./images/icon-zhangdan.png')} />
                		</CellHeader>
		                <CellBody>我的账单</CellBody>
		                <CellFooter/>
		            </Cell>
		        </Cells>
		        <Cells>
		            <Cell access onClick={() => this.context.router.push('/member/paycode')}>
		            	<CellHeader>
                    		<img className="weui_cell_header_icon" src={require('./images/icon-zhifuma.png')} />
                		</CellHeader>
		                <CellBody>支付码</CellBody>
		                <CellFooter/>
		            </Cell>
		        </Cells>
		        <Cells>
		            <Cell access onClick={() => this.context.router.push('/member/recharge')}>
		            	<CellHeader>
                    		<img className="weui_cell_header_icon" src={require('./images/icon-chongzhi.png')} />
                		</CellHeader>
		                <CellBody>在线充值</CellBody>
		                <CellFooter/>
		            </Cell>
		            <Cell access onClick={() => this.context.router.push('/member/perinfo')}>
		            	<CellHeader>
                    		<img className="weui_cell_header_icon" src={require('./images/icon-member.png')} />
                		</CellHeader>
		                <CellBody>会员信息</CellBody>
		                <CellFooter/>
		            </Cell>
		        </Cells>
			</div>	
		)	
	}
}

Index.contextTypes = {
	router: PropTypes.object.isRequired,
  	store: PropTypes.object.isRequired
};

Index.propTypes = {};

export default Index;