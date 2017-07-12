import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cells, CellHeader, CellBody, CellFooter, Form, FormCell, Label, Input, Select, Button, Toast } from 'react-weui';

import API from 'API';

const getInitState = () => ({ 
	name: '', 
	sex: 0, 
	birthday: '', 
	phone: '', 
	otpcode: '', 
	showToast: false, 
	tipMessage: '', 
	toastTimer: null,
	otpText: '获取验证码',
	otpClass: 'vcode-normal',
	countdownFn: null,
	headimgurl: ''
});
const phoneRegx = /^1[34578]\d{9}$/;
let params;

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = getInitState();

		this.sendOTP = this.sendOTP.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		params = this.props.location.query;
	}	

	componentWillUnmount() {
		this.state.toastTimer && clearTimeout(this.state.toastTimer);
	}

	componentDidMount() {
		const _self = this;
		const { dispatch } = _self.context.store;
		let pomise = API.get('/test/testRegister', { params: { accessToken: params.at, openId: params.openId } });

		pomise.then(resolve => {
			const { data } = resolve;

			dispatch({ type: 'GET_WX_SUCCESS', payload: resolve });	
			_self.setState({
				name: data.nickname,
				sex: data.sex,
				headimgurl: data.headimgurl
			});
		}, reject => {
			console.log('testRegister reject ......');
		});
	}

	sendOTP(event) {
		const { phone, otpClass } = this.state;
		const target = event.target;
		let pomise, countdown, countdownFn;

		if (otpClass.indexOf('vcode-normal') > -1) return;

		pomise = api.get('/get_shop_info.json', { params: {} });

		pomise.then(resolve => {

		}, reject => {
			console.log('get vcode reject......');
		});

		countdown = this.countDown(10);
		this.setState({
			otpClass: 'vcode-normal',
			countdownFn: setInterval(countdown, 1000)
		});
		countdown();
	}

	countDown(counter) {
		const _self = this;

		return function() {
			if (0 >= counter--) {
                const { countdownFn } = _self.state;

                clearInterval(countdownFn);
                _self.setState({
                	otpClass: '',
                	otpText: '重新获取',
                	countdownFn: null
                });
            } else {
                _self.setState({
                	otpText: counter + '秒'
                });
            }
		}
	}

	handleChange(event) {
		const targetName = event.target.name;
		const targetValue = event.target.value.trim();

		if (targetName == 'phone') {
			const cls = phoneRegx.test(targetValue) ? '' : 'vcode-normal';

			this.setState({
		    	otpClass: cls
		  	});
		}

		this.setState({
	    	[targetName]: targetValue
	  	});
	}

	_checkData(object) {
		let flag = '';
		const objectKeys = Object.keys(object);

		for (var i = 0; i < objectKeys.length; i++) {
			const key = objectKeys[i];
			const value = object[key];

			if (value == '') {
				switch (key) {
					case 'name': 
						flag = '姓名不能为空！';
						break;
					case 'birthday':
						flag = '生日不能为空！';
						break;
					case 'phone':
						flag = '手机号不能为空！';
						break;
					case 'otpcode':
						flag = '验证码不能为空';
						break;
					default:
						console.log('非表单验证数据...');
				}
			}
			if (flag != '') break;
		};
		return flag;
	}

	handleSubmit(event) {
		const _self = this;
		const flag = this._checkData(_self.state);

		if (flag) {
			this.setState({
				showToast: true,
				tipMessage: flag
			});
			this.state.toastTimer = setTimeout(()=> {
	            this.setState({ showToast: false });
	        }, 1500);
	        return false;
		}
		// 跳转
		this.context.router.push('/member');
	}

	render() {
		return (
			<div className="member-register">
				<div className="head-logo">
					<img className="head-img" src={ this.state.headimgurl } />
				</div>
				<Form>
					<Cells>
						<FormCell>
		                    <CellHeader>
		                        <Label>姓名</Label>
		                    </CellHeader>
		                    <CellBody>
		                        <Input type="text" name="name" value={ this.state.name } onChange={ this.handleChange } placeholder="请输入您的姓名"/>
		                    </CellBody>
		                </FormCell>
		                <FormCell select selectPos="after">
		                	<CellHeader>
		                        <Label>性别</Label>
		                    </CellHeader>    
		                    <CellBody>
		                        <Select name="sex" defaultValue={ this.state.sex } data={[{value: 1, label: '男'}, {value: 2, label: '女'}]} onChange={ this.handleChange } />
		                    </CellBody>
		                </FormCell>
		                <FormCell>
		                    <CellHeader>
		                        <Label>生日</Label>
		                    </CellHeader>
		                    <CellBody>
		                        <Input type="date" name="birthday" defaultValue="" onChange={ this.handleChange }/>
		                    </CellBody>
		                </FormCell>
	                </Cells>
	                <div className="register-mid">
		                <Cells>
			                <FormCell vcode>
			                    <CellHeader>
			                        <Label>手机号</Label>
			                    </CellHeader>
			                    <CellBody>
			                        <Input type="tel" name="phone" onChange={ this.handleChange } placeholder="请输入您的手机号"/>
			                    </CellBody>
			                    <CellFooter>
			                        <Button type="vcode" id="sendOtp" className={this.state.otpClass} onClick={this.sendOTP}>{this.state.otpText}</Button>
			                    </CellFooter>
			                </FormCell>
			                <FormCell>
			                    <CellHeader>
			                        <Label>验证码</Label>
			                    </CellHeader>
			                    <CellBody>
			                        <Input type="number" name="otpcode" onChange={ this.handleChange } placeholder="请输入您收到的验证码"/>
			                    </CellBody>
			                </FormCell>
		                </Cells>
	                </div>
	                <Button className="register-confirm" onClick={ this.handleSubmit }>认证</Button>
				</Form>	
				<Toast icon="warn-no-circle" show={this.state.showToast}>{this.state.tipMessage}</Toast>
			</div>	
		)	
	}
}

Register.contextTypes = {
	router: PropTypes.object.isRequired,
  	store: PropTypes.object.isRequired
};

Register.propTypes = {};

export default Register;