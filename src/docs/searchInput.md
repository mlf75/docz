---
title: SearchInput
order: 1
nav:
  title: 组件
  order: 2
---

## 异步搜索输入框

### 使用说明:

实际通常是会去异步请求后端的真实数据，这里做演示使用模拟数据

##### 本地模拟数据

```
const mock = {
  list: [
    {
      rowcode: "000000",
      rowname: "国家",
    },
    {
      rowcode: "500000",
      rowname: "重庆市",
    },
    {
      rowcode: "500101",
      rowname: "万州区",
    },
    {
      rowcode: "500102",
      rowname: "涪陵区",
    },
    {
      rowcode: "500103",
      rowname: "渝中区",
    },
  ],
  total: 5
}
```

```jsx
import React, { Component } from 'react';
import SearchInput from '../../src/SearchInput/index';
import _debounce from 'lodash/debounce';

const mock = {
  list: [
    {
      rowcode: '000000',
      rowname: '国家',
    },
    {
      rowcode: '500000',
      rowname: '重庆市',
    },
    {
      rowcode: '500101',
      rowname: '万州区',
    },
    {
      rowcode: '500102',
      rowname: '涪陵区',
    },
    {
      rowcode: '500103',
      rowname: '渝中区',
    },
  ],
  total: 5,
};

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      options: [],
    };
    this.getSearchData = _debounce(this.getSearchData, 500); // 控制实际接口的请求次数
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
    const { keyword } = this.state;
    if (!this.state.keyword) {
      this.setState({
        options: [],
        keyword,
      });
      return;
    }

    new Promise(resolve => {
      const options = this.searchResult(
        keyword,
        mock.list.filter(item => item.rowname.includes(keyword)),
      );
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
              <span>{`共有${options.length}条匹配结果`}</span>
            </div>
          ),
        },
      ];
      this.setState({
        options: obj,
      });
      resolve();
    });
  };

  // 对于搜索结果数据的展示形式的转换
  searchResult = (keyword, data) => {
    return data.length
      ? data.map((item, idx) => {
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
```

## Props

| 参数     | 说明                                                  | 类型                    | 默认值 | 是否必填 |
| -------- | ----------------------------------------------------- | ----------------------- | ------ | -------- |
| options  | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | { label, value }array   | -      | true     |
| onSearch | 搜索补全项的时候调用                                  | function(value)         | -      | true     |
| onSelect | 选中某一搜索结果时回调函数，参数为选中项的 value 值   | function(value, option) | -      | false    |

## 其余参数说明

继承自 Ant Design `AutoComplete` 组件，其余参数参考 Ant Design `AutoComplete` 组件属性说明 [AutoComplete](https://ant.design/components/auto-complete-cn/#API)
