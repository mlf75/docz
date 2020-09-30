---
title: Radio单选框
nav:
  title: 组件
  order: 2
---

## Radio 单选框

### 基本使用

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '基本使用',
    fields: [
      {
        name: 'base',
        label: '单选框',
        widget: 'radio',
        options: {
          data: {
            0: '否',
            1: '是',
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 禁止使用状态

`设置disabled: true`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '禁用状态',
    fields: [
      {
        name: 'disabled',
        label: '单选框',
        widget: 'radio',
        disabled: true,
        options: {
          data: {
            0: '否',
            1: '是',
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 带有帮助信息的单选框

`设置help说明`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '帮助信息单选框',
    fields: [
      {
        name: 'help',
        label: '单选框',
        widget: 'radio',
        help: '帮助信息单选框',
        options: {
          data: {
            0: '否',
            1: '是',
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 默认选中其中一个

`给defaultValue一个默认值`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '默认选中单选框',
    fields: [
      {
        name: 'defaultValue',
        label: '单选框',
        widget: 'radio',
        defaultValue: 1,
        help: '帮助信息单选框',
        options: {
          data: {
            0: '否',
            1: '是',
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 提交必选校验

`设置required: true`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '必选校验单选框',
    fields: [
      {
        name: 'required',
        label: '单选框',
        widget: 'radio',
        required: true,
        help: '帮助信息',
        options: {
          data: {
            0: '否',
            1: '是',
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

## Props

| 参数         | 说明               | 类型    | 默认值 | 是否必填 |
| ------------ | ------------------ | ------- | ------ | -------- |
| name         | 表单项字段名       | string  | -      | true     |
| label        | 表单项 label 标题  | string  | -      | true     |
| defaultValue | 默认值             | string  | -      | false    |
| widget       | 展示的组件类型     | string  | -      | true     |
| required     | 是否必填           | boolean | false  | false    |
| disabled     | 表单项组件是否可用 | boolean | -      | false    |
| help         | 帮助信息           | string  | -      | false    |
| options      | 组件额外配置       | object  | -      | false    |

## Option Props

| 参数      | 说明                           | 类型    | 默认值 | 是否必填 |
| --------- | ------------------------------ | ------- | ------ | -------- |
| data      | 数据列表                       | object  | -      | true     |
| uiWidget  | 自定义展示时需要渲染的 ui 组件 | string  | -      | false    |
| showLabel | 在编辑时是否展示 label 说明    | boolean | -      | false    |
