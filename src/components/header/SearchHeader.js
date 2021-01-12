import React, { Component, Fragment } from 'react';
import { Typography, Tooltip, Input, Row, Col } from 'antd';
import { SearchOutlined, GithubFilled } from '@ant-design/icons';

import './SearchHeader.css';

const { Title } = Typography;
const { Search } = Input;

class SearchHeader extends Component {
	constructor(props) {
		super(props);
	}

	handleChange = (e) => {
		console.log('inside onchange');
		this.props.onChange(e);
	};

	getSearchIcon = () => {
		return <SearchOutlined />;
	};

	render() {
		return (
			<Fragment class="nav-bar">
				<Row align="middle">
					<Col span={3}>
						<a href="#">
							<GithubFilled id="git-icon"></GithubFilled>
						</a>
					</Col>
					<Col span={10} id="input-col">
						<Input
							id="search-input"
							value={this.props.value}
							onChange={this.handleChange}
							suffix={
								<Tooltip title="Search for a repository in github" >
									<SearchOutlined style={{ color: '#24292E' }} />
								</Tooltip>
							}
						/>
					</Col>
				</Row>
			</Fragment>
		);
	}
}

export default SearchHeader;
