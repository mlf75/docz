---
title: Markdown
order: 1
nav:
  title: 组件
  order: 2
---

## Markdown

### 基本使用

```jsx
import React from 'react';
import Demo from '../../src/DynamicFormItem/Demo';

const schema = {
  basicUse: {
    title: '',
    fields: [
      {
        name: 'markdown',
        label: '',
        widget: 'sampleData',
        required: true,
        hidden: false,
        options: {
          uiWidget: 'SampleData',
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 默认数据使用

`defaultValue: XXXXXX`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '',
    fields: [
      {
        name: 'disabled',
        label: '',
        widget: 'sampleData',
        defaultValue: '这是默认数据',
        options: {
          uiWidget: 'SampleData',
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

## Props

| 参数         | 说明              | 类型   | 默认值 | 是否必填 |
| ------------ | ----------------- | ------ | ------ | -------- |
| name         | 表单项字段名      | string | -      | true     |
| label        | 表单项 label 标题 | string | -      | true     |
| defaultValue | 默认值            | string | -      | false    |
| widget       | 展示的组件类型    | string | -      | true     |
| options      | 组件额外配置      | object | -      | true     |

## Option Props

| 参数     | 说明                           | 类型   | 默认值 | 是否必填 |
| -------- | ------------------------------ | ------ | ------ | -------- |
| uiWidget | 自定义展示时需要渲染的 ui 组件 | string | -      | false    |
