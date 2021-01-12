import React, { Component } from 'react';
import { List, Avatar, Space } from 'antd';
import { StarOutlined, ForkOutlined } from '@ant-design/icons';

import './users.css';

const IconText = ({ icon, text }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getLastUpdateDateAndTime = (date) => {
		let formatedDate = new Date(date);
		return `Updated at ${formatedDate}`;
	};
	renderListOfUsers = (items) => {
		return (<List
			bordered={true}
			style={{ height: 'inherit' }}
			itemLayout="vertical"
			size="large"
			pagination={{
				onChange: (page) => {
					console.log(page);
				},
				pageSize: 10,
			}}
			dataSource={items.slice(0, 30)}
			renderItem={(item) => (
				<List.Item
					style={{ border: '2px solid gray' }}
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
					{item.description}
					<p>{this.getLastUpdateDateAndTime(item.updated_at)}</p>
				</List.Item>
			)}
		/>);
	};

	render() {
        if(this.props.items === undefined || this.props.items === null)
         {
             return (
                <img src = 'C:/Brajesh/PheonixRobotix/search-application/src/images/git.jfif'></img>
             )
         }
         else{
            return (this.renderListOfUsers(this.props.items));

         }
		
	}
}

export default Users;
