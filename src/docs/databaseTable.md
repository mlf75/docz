---
title: 联动选择
order: 5
nav:
  title: 组件
  order: 2
---

## DataBaseTable 数据表选择

基本使用:

```jsx
import React from 'react';
import Demo from '../../src/DynamicFormItem/Demo';

const schema = {
  basicUse: {
    title: '基本使用',
    fields: [
      {
        name: 'tableXmlid',
        label: '表名称',
        widget: 'table',
        required: true,
        hidden: false,
        options: {
          uiWidget: 'tableShow',
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

展示状态(自定义组件可通过 uiWidget 设置展示时的组件)

```jsx
import React from 'react';
import Demo from '../../src/DynamicFormItem/Demo';

const schema = {
  basicUse: {
    title: '基本使用',
    fields: [
      {
        name: 'showStatus',
        label: '表名称',
        widget: 'table',
        required: true,
        hidden: false,
        options: {
          uiWidget: 'tableShow',
        },
      },
    ],
  },
};

const mockData = {
  showStatus: 'METADB',
  tableFields: [
    {
      colcnname: '雇工标识',
      colname: 'EMPLOYEE_ID',
      colxmlid: '0c63c164891d325cf7a4a9cacaa26b25',
      datatype: 'DECIMAL',
      focus: 0,
      length: null,
      tablexmlid: 'a5b161ecb2dcada936980cc56cefce58',
    },
    {
      colcnname: '雇工名称',
      colname: 'EMPLOYEE_NAME',
      colxmlid: '0eeb28ba5f0c6c943d4a2f616073cc70',
      datatype: 'VARCHAR',
      focus: 0,
      length: '20',
      tablexmlid: 'd25fdb1cf94f604ec22a8514221050e4',
    },
    {
      colcnname: '身份卡片',
      colname: 'IDENTITY_CARD',
      colxmlid: '89ae30dccabe3d0396aee54cf22de96f',
      datatype: 'VARCHAR',
      focus: 0,
      length: '18',
      tablexmlid: 'd25fdb1cf94f604ec22a8514221050e4',
    },
    {
      colcnname: '电子邮箱',
      colname: 'EMAIL',
      colxmlid: '9012d19a315ec61a8105f57d97923390',
      datatype: 'VARCHAR',
      focus: 0,
      length: '50',
      tablexmlid: 'd25fdb1cf94f604ec22a8514221050e4',
    },
    {
      colcnname: '座机',
      colname: 'PHONE',
      colxmlid: '5846bd4d4f762cc02b10fe5e2209e196',
      datatype: 'VARCHAR',
      focus: 0,
      length: '15',
      tablexmlid: 'd25fdb1cf94f604ec22a8514221050e4',
    },
    {
      colcnname: '日期号码',
      colname: 'DATE_NO',
      colxmlid: 'b6099b83c71ab5132c33af92eca03dd7',
      datatype: 'STRING',
      focus: 0,
      length: null,
      tablexmlid: 'd25fdb1cf94f604ec22a8514221050e4',
    },
  ],
};

export default () => <Demo schema={schema} status="show" formData={mockData} />;
```

> tips: 展示状态的数据均为模拟数据

## Props

| 参数         | 说明               | 类型    | 默认值      | 是否必填 |
| ------------ | ------------------ | ------- | ----------- | -------- |
| name         | 表单项字段名       | string  | -           | true     |
| label        | 表单项 label 标题  | string  | -           | true     |
| defaultValue | 默认值             | string  | -           | false    |
| widget       | 展示的组件类型     | string  | -           | true     |
| required     | 是否必填           | boolean | false       | false    |
| disabled     | 表单项组件是否可用 | boolean | -           | false    |
| placeholder  | 表单项输入说明     | string  | -           | false    |
| help         | 帮助信息           | string  | -           | false    |
| rule         | 表单项验证规则     | array   | -           | false    |
| style        | 表单项 ui 样式     | object  | width:"50%" | false    |
| options      | 组件额外配置       | object  | -           | false    |

## Option Props

| 参数            | 说明                                                                                       | 类型    | 默认值 | 是否必填 |
| --------------- | ------------------------------------------------------------------------------------------ | ------- | ------ | -------- |
| formElementOpts | 设置具体表单元素的配置属性，例如 formElement: {placeholder: '',disabled: true,autoSize:{}} | object  | -      | false    |
| disabledInEdit  | 在编辑时组件是否可用                                                                       | boolean | -      | false    |
| uiWidget        | 自定义展示时需要渲染的 ui 组件                                                             | string  | -      | false    |
| showLabel       | 在编辑时是否展示 label 说明                                                                | boolean | -      | false    |
