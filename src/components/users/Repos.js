import React, { Component, Fragment } from 'react';
import { List, Avatar, Space, PageHeader , Typography} from 'antd';
import { StarOutlined, ForkOutlined } from '@ant-design/icons';

import './Repos.css';

const IconText = ({ icon, text }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

const { Paragraph } = Typography;

class Repos extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getLastUpdateDateAndTime = (date) => {
		let formatedDate = new Date(date);
		return `Updated at ${formatedDate}`;
	};
	renderListOfUsers = (items) => {
		return (
			<List
				bordered={true}
				style={{ height: 'inherit' }}
				itemLayout="vertical"
				size="large"
				pagination={{
					onChange: (page) => {
						console.log(page);
					},
					pageSize: 15,
				}}
				dataSource={items.slice(0, 100)}
				renderItem={(item) => (
					<List.Item
						style={{
							border: '1px solid gray',
							borderRadius: '2px',
							margin: '8px 8px 0 8px',
							background: '#ffff',
						}}
						key={item.id}
						actions={[
							<IconText icon={StarOutlined} text={item.stargazers_count} key="list-vertical-star-o" />,
							<IconText icon={ForkOutlined} text={item.forks_count} key="list-vertical-like-o" />,
						]}
					>
						<List.Item.Meta
							avatar={<Avatar src={item.owner.avatar_url} />}
							title={
								<a href={item.html_url} target="_blank">
									{item.full_name}
								</a>
							}
							description={item.owner.login}
						/>
						<Paragraph>{item.description}</Paragraph>
						<Paragraph>{this.getLastUpdateDateAndTime(item.updated_at)}</Paragraph>
					</List.Item>
				)}
			/>
		);
	};

	getTotalCount = () => {
		if (this.props.totalCount !== undefined) {
			return <PageHeader className="page-header" title={`Number Of Results : ${this.props.totalCount}`} />;
		} else {
			return <PageHeader className="page-header" title="Search for github repositories" />;
		}
	};

	render() {
		if (this.props.items === undefined || this.props.items === null) {
			return <img src="../../images/git.jfif" alt="No results Found. Please re enter the search query"></img>;
		} else {
			return (
				<Fragment>
					{this.getTotalCount()}
					{this.renderListOfUsers(this.props.items)}
				</Fragment>
			);
		}
	}
}

export default Repos;
