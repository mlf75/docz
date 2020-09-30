---
title: Textａrea文本
order: 2
nav:
  title: 组件
  order: 2
---

## Textarea 文本框

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
        label: '文本框',
        widget: 'textarea',
        options: {
          placeholder: 'Basic usage',
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
        label: '文本框',
        widget: 'textarea',
        disabled: true,
        options: {
          placeholder: 'Basic usage',
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

###　文本框必填

`设置required: true`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '文本框必填',
    fields: [
      {
        name: 'required',
        label: '文本框',
        widget: 'textarea',
        required: true,
        options: {
          placeholder: 'Basic usage',
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 带有帮助信息文本框

`设置help说明`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '帮助信息文本框',
    fields: [
      {
        name: 'help',
        label: '文本框',
        widget: 'textarea',
        required: true,
        help: '帮助信息文本框',
        options: {
          placeholder: 'Basic usage',
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 带验证规则文本框

`设置rules中校验规则，pattern正则表达式；message校验说明`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '验证规则文本框',
    fields: [
      {
        name: 'rules',
        label: '文本框',
        widget: 'textarea',
        rules: [
          {
            pattern: /^[0-9]+$/,
            message: '序号为数值类型',
          },
        ],
        options: {
          placeholder: 'Basic usage',
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 带自定义样式的文本框

`设置style中样式`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '自定义样式文本框',
    fields: [
      {
        name: 'style',
        label: '文本框',
        widget: 'textarea',
        style: {
          width: '100%',
        },
        options: {
          placeholder: 'Basic usage',
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 设置文本框固定大小

`设置组件额外配置formElementOpts`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '固定大小文本框',
    fields: [
      {
        name: 'formElementOpts',
        label: '文本框',
        widget: 'textarea',
        options: {
          placeholder: 'Basic usage',
          formElementOpts: {
            autoSize: { minRows: 6, maxRows: 6 },
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 展示状态的输入框(默认文本展示)

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '自定义样式输入框',
    fields: [
      {
        name: 'showStatus',
        label: '文本框',
        widget: 'textarea',
        required: true,
        defaultValue: '展示状态下的文本',
        options: {
          placeholder: 'Basic usage',
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} status="show" />;
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
| help         | 帮助信息           | string  | -           | false    |
| rule         | 表单项验证规则     | array   | -           | false    |
| style        | 表单项 ui 样式     | object  | width:"50%" | false    |
| options      | 组件额外配置       | object  | -           | false    |

## Option Props

| 参数            | 说明                                                                                       | 类型    | 默认值 | 是否必填 |
| --------------- | ------------------------------------------------------------------------------------------ | ------- | ------ | -------- |
| formElementOpts | 设置具体表单元素的配置属性，例如 formElement: {placeholder: '',disabled: true,autoSize:{}} | object  | -      | false    |
| placeholder     | 表单项输入说明                                                                             | string  | -      | false    |
| disabledInEdit  | 在编辑时组件是否可用                                                                       | boolean | -      | false    |
| uiWidget        | 自定义展示时需要渲染的 ui 组件                                                             | string  | -      | false    |
| showLabel       | 在编辑时是否展示 label 说明                                                                | boolean | -      | false    |
