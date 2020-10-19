---
title: 树多选
order: 6
nav:
  title: 组件
  order: 2
---

## RelatedResource 资源树多选

基本使用:

```jsx
import React from 'react';
import Demo from '../../src/DynamicFormItem/Demo';
const schema = {
  basicUse: {
    title: '基本使用',
    fields: [
      {
        name: 'resource',
        label: '关联资源',
        widget: 'resource',
        rules: [
          {
            required: true,
            message: '关联资源不能为空',
          },
        ],
        options: {
          placeholder: '请选择关联资源',
          disabled: true,
        },
        fields: {
          style: {
            width: '100%',
          },
        },
      },
    ],
  },
};
export default () => <Demo schema={schema} />;
```

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
