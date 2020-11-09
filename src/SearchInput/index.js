/**
 * @author      mlf
 * @date        2020-08-09
 * @description
 */

import React, { Component } from 'react';
import { AutoComplete, Input } from 'antd';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      keyword: this.props.keyword,
    };
  }

  onSelect = (value, options) => {
    this.props.onSelect(value, options);
  };

  handleSearch = value => {
    console.log('value', value);
    this.setState(
      {
        keyword: value,
      },
      () => this.props.onSearch(value),
    );
  };

  render() {
    const { options, keyword } = this.state;
    return (
      <AutoComplete
        value={keyword}
        options={options}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        {...this.props}
      >
        <Input.Search placeholder="请输入搜索关键字" />
      </AutoComplete>
    );
  }
}
