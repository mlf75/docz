import React, { Component } from 'react';
import SearchInput from './index';
import _debounce from 'lodash/debounce';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      options: [],
    };
    this.getSearchData = _debounce(this.getSearchData, 500);
  }

  handleSelect = (value, selectedRow) => {
    console.log('value', value);
    console.log('selectedRow', selectedRow);
  };
  handleSearch = value => {
    this.setState(
      {
        keyword: value,
      },
      () => this.getSearchData(),
    );
  };

  getSearchData = () => {
    if (!this.state.keyword) {
      this.setState({
        options: [],
        keyword: this.state.keyword,
      });
      return;
    }

    this.props.systemState
      .getDimensionPage({ keyword: this.state.keyword })
      .then(rs => {
        const options = this.searchResult(this.state.keyword, rs);
        const obj = [
          {
            options,
            label: (
              <div
                className="show-total"
                style={{
                  textAlign: 'right',
                }}
              >
                <span>{`共有${rs.total}条匹配结果`}</span>
              </div>
            ),
          },
        ];
        this.setState({
          options: obj,
        });
      });
  };

  searchResult = (keyword, data) => {
    return data.list && data.list.length
      ? data.list.map((item, idx) => {
          return {
            value: item.rowname,
            item,
            label: (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'no-wrap',
                  }}
                  title={item.rowname}
                >
                  {item.rowname}
                </span>
              </div>
            ),
          };
        })
      : [];
  };

  render() {
    return (
      <SearchInput
        options={this.state.options}
        onSearch={this.handleSearch}
        onSelect={this.handleSelect}
      />
    );
  }
}
