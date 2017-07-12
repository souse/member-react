import React, { Component } from 'react';

import { Form, Cells, Cell, FormCell, CellHeader, CellBody, CellFooter, CellsTitle, Checkbox, Button } from 'react-weui';

import API from 'API';

class PayOnline extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}

	render() {		
		return (
			<div className="member-payonline">
				<Cells className="pl-title weui-cell-no-dish">
					<Cell className="showpay">
						<CellBody>应付金额</CellBody>
						<CellFooter>299.60元</CellFooter>
					</Cell>
					<Cell>
						<CellBody>实付金额</CellBody>
						<CellFooter className="real-pay">299.60元</CellFooter>
					</Cell>
				</Cells>
				<CellsTitle>支付方式</CellsTitle>
				<Form checkbox>
					<FormCell checkbox>
	                    <CellBody>微信支付</CellBody>
	                    <CellFooter>
	                    	<Checkbox name="wechartpay" value="1" defaultChecked="checked"  />
	                    </CellFooter>
	                </FormCell>
                </Form>
                <Button className="max-btn">确定</Button>
			</div>
		)	
	}
}

PayOnline.propTypes = {};

export default PayOnline;