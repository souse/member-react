import React, { Component } from 'react';
import { Page, Cells, Cell, CellBody, CellFooter, Footer, FooterText } from 'react-weui';

import API from 'API';

class Stored extends Component {
	constructor(props) {
		super(props);

		this.state = {
            items: [...Array(20).keys()]
        }
	}
	componentWillMount() {}	

	renderNoData() {
		return(
			<div className="store-no-list">
				<div className="no-tips">
					<p>暂无会员卡消费记录</p>
				</div>
				<Footer className="stored-footer">
					<FooterText>由厨品秀科技提供技术支持</FooterText>
					<FooterText>400-000-5997</FooterText>
				</Footer> 
			</div>
		)
	}

	render() {		
		return (
			<div className="member-stored">
				<div className="title-box">
					<p>储值余额(元)</p>
					<h2>3600.05</h2>
				</div>
				<div className="stored-list">
				    <Cells>
				    	{
				    		this.state.items.map(function(index, elem) {
				    			return (
				    				<Cell className="list-bd" key={index}>
			                            <CellBody className="rc">
			                                <div className="rc-h">充值</div>
			                                <div className="rc-f">余额：300.00元</div>
			                            </CellBody>  
			                            <CellFooter className="rc">
			                                <div className="rc-h">+ 1.60元</div>
			                                <div className="rc-f">2017/05/12 22：36</div>    
			                            </CellFooter>  
			                        </Cell>
				    			)
				    		})
				    	}
                    </Cells>  
                    <Footer className="stored-footer">
						<FooterText>由厨品秀科技提供技术支持</FooterText>
						<FooterText>400-000-5997</FooterText>
					</Footer>  		
				</div>
			</div>
		)	
	}
}

Stored.propTypes = {};

export default Stored;