import React , { Component} from 'react';

import { Layout } from 'antd';

import SearchHeader from "./components/header/SearchHeader";
import Repos from "./components/users/Repos";
import './App.css';
import { getRepositoryData } from './actions/repositoryActions';

const { Header,  Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal : "",
      totalCount : undefined,
      items : []
      }
  }

  search = async (query) => {
    const result = await getRepositoryData(query);
    console.log("result "  + JSON.stringify(result));
		return result;
	};

  handleChange = (e) => {
    console.log("result counts "  +this.state.totalCount);
		const searchVal = e.target.value;
		this.setState({ searchVal }, async () => {
			const result = await this.search(this.state.searchVal);
			if (result !== undefined) {
				this.setState({ totalCount: result.total_count });
				this.setState({ items: result.items });
			}
		});
  };

  render() { 
    console.log("this.state.searchVal" + this.state.searchVal);
    return ( 
      <Layout>
      <Header class="header">
         <SearchHeader onChange = {this.handleChange} value = {this.state.searchVal} /> 
      </Header>
      <Content class="content">
         <Repos items = {this.state.items} totalCount = {this.state.totalCount} />
      </Content>
     
    </Layout>
     );
  }
}
 
export default App 