import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormCell, Cells, Cell, CellHeader, CellBody, CellFooter, Button, Label, Input, Select } from 'react-weui';

import API from 'API';

class PerInfo extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}
	componentWillMount() {}

	handleChange() {

	}

	render() {		
		return (
			<div className="member-perinfo">
				<Form>
					<Cells className="p-form">
						<FormCell>
		                    <CellHeader>
		                        <Label>姓名</Label>
		                    </CellHeader>
		                    <CellBody>
		                        <Input type="text" name="name" onChange={ this.handleChange } placeholder="请输入您的姓名" value="叶良辰"/>
		                    </CellBody>
		                </FormCell>
		                <FormCell select selectPos="after">
		                	<CellHeader>
		                        <Label>性别</Label>
		                    </CellHeader>    
		                    <CellBody>
		                        <Select name="sex" data={[{value: 0, label: '男'}, {value: 1, label: '女'}]} onChange={ this.handleChange } />
		                    </CellBody>
		                </FormCell>
		                <Cell>
		                    <CellHeader>
		                        <Label>生日</Label>
		                    </CellHeader>
		                    <CellBody>
		                    	2000-01-20    
		                    </CellBody>
		                </Cell>
					</Cells>
				</Form>
				<Cells>
					<Cell>
	                    <CellHeader>
	                        <Label>手机号</Label>
	                    </CellHeader>
	                    <CellBody>
	                    	18721171724   
	                    </CellBody>
	                </Cell>	
				</Cells>

				<Button className="max-btn">保存</Button>	
			</div>
		)	
	}
}

PerInfo.contextTypes = {
	router: PropTypes.object.isRequired,
  	store: PropTypes.object.isRequired
};

PerInfo.propTypes = {};

export default PerInfo;