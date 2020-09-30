---
title: Select输入框
nav:
  title: 组件
  order: 2
---

## Select 选择框

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
        label: '输入框',
        widget: 'select',
        options: {
          placeholder: 'Basic usage',
          data: {
            1: '重庆市',
            2: '南岸区',
            3: '渝中区',
            4: '渝北区',
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
        label: '输入框',
        widget: 'select',
        disabled: true,
        options: {
          placeholder: 'Basic usage',
          data: {
            1: '重庆市',
            2: '南岸区',
            3: '渝中区',
            4: '渝北区',
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 选择框必填

`设置required: true`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '选择框必填',
    fields: [
      {
        name: 'required',
        label: '选择框',
        widget: 'select',
        required: true,
        options: {
          placeholder: 'Basic usage',
          data: {
            1: '重庆市',
            2: '南岸区',
            3: '渝中区',
            4: '渝北区',
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 带有帮助信息的选择框

`设置help说明`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '帮助信息输入框',
    fields: [
      {
        name: 'help',
        label: '输入框',
        widget: 'select',
        required: true,
        help: '帮助信息输入框',
        options: {
          placeholder: 'Basic usage',
          data: {
            1: '重庆市',
            2: '南岸区',
            3: '渝中区',
            4: '渝北区',
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 带验证规则输入框

`设置rules中校验规则，pattern正则表达式；message校验说明`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '验证规则输入框',
    fields: [
      {
        name: 'rules',
        label: '输入框',
        widget: 'select',
        options: {
          placeholder: 'Basic usage',
          data: {
            1: '重庆市',
            2: '南岸区',
            3: '渝中区',
            4: '渝北区',
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 带自定义样式的输入框

`设置style中样式`

```jsx
import React from 'react';
import { Demo } from 'componentDoc';

const schema = {
  basicUse: {
    title: '自定义样式输入框',
    fields: [
      {
        name: 'style',
        label: '输入框',
        widget: 'select',
        style: {
          width: '100%',
        },
        options: {
          placeholder: 'Basic usage',
          data: {
            1: '重庆市',
            2: '南岸区',
            3: '渝中区',
            4: '渝北区',
          },
        },
      },
    ],
  },
};

export default () => <Demo schema={schema} />;
```

### 设置选择默认值

`设置组件defaultValue: '重庆市'`

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
        defaultValue: '重庆市',
        widget: 'select',
        options: {
          placeholder: 'Basic usage',
          data: {
            1: '重庆市',
            2: '南岸区',
            3: '渝中区',
            4: '渝北区',
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
| help         | 帮助信息           | string  | -           | false    |
| style        | 表单项 ui 样式     | object  | width:"50%" | false    |
| options      | 组件额外配置       | object  | -           | false    |

## Option Props

| 参数            | 说明                                                                                                            | 类型    | 默认值 | 是否必填 |
| --------------- | --------------------------------------------------------------------------------------------------------------- | ------- | ------ | -------- |
| data            | 数据列表, 异步获取数据时是非必填项                                                                              | object  | -      | true     |
| remote          | 当 select 组件数据需要异步获取时，需要配置的请求信息，例如：ajax: {url: '/itemTable/getDbOptions', params: {}}, | object  | -      | false    |
| formElementOpts | 设置具体表单元素的配置属性，例如 formElement: {placeholder: '',disabled: true}                                  | object  | -      | false    |
| placeholder     | 表单项输入说明                                                                                                  | string  | -      | false    |
| disabledInEdit  | 在编辑时组件是否可用                                                                                            | boolean | -      | false    |
| uiWidget        | 自定义展示时需要渲染的 ui 组件                                                                                  | string  | -      | false    |
| showLabel       | 在编辑时是否展示 label 说明                                                                                     | boolean | -      | false    |
