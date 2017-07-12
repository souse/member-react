
/**
 * 会员卡 卡片信息公用部分
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */

import React, { Component } from 'react';
import { Cells, Cell, CellHeader, CellBody, CellFooter } from 'react-weui';

export default function(data) {
	return (
		<div>
			<Cells className="mem-index">
				<Cell>
					<CellBody className="mem-title">厨品秀餐厅</CellBody>
					<CellFooter>
						<img className="weui_cell_header_icon" src={require('COMPONENT/Member/images/icon-refresh.png')} />	
					</CellFooter>
				</Cell>	
			</Cells>
			<div className="member-card">
				<img className="card-logo" src={require('COMPONENT/Member/images/icon-card.png')} alt=""/>	
				<Cell className="member-restaurant">
					<CellHeader>
	            		<img className="mem-logo" src={require('COMPONENT/Member/images/icon-logo.png')} />
	        		</CellHeader>
					<CellBody>
						<p className="p1">厨品秀智慧餐厅</p>
						<p className="p1 p2">会员卡</p>
					</CellBody>
				</Cell>
				<Cell className="member-carno">
					<CellBody>
						<img className="mem-logo" src={require('COMPONENT/Member/images/icon-vip.png')} />
						<p className="p1 p3">NO.19810701226</p>
					</CellBody>
				</Cell>
			</div>
		</div>
	)
}