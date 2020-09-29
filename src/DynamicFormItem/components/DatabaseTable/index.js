/**
 * @author      mlf
 * @date        2020-09-02
 * @description
 */

import React, { Component, useState, useEffect, useCallback, Fragment } from 'react';
import { Input, Form } from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';
import TableFields from '../TableFields'

export default function DatabaseTable(props) {

  const {
    options,
    label,
    name,
    rules,
    fields,
    formData,
    form,
    style,
    hidden,
    colon
  } = props;

  const [visible, setVisible] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const dbname = formData.dbname || null

  return (
    <Fragment>
      <Form.Item
        label={label}
        name={name}
        rules={rules}
        style={style}
        hidden={hidden}
        colon={colon}
        {...fields}
      >
        <Input
          disabled
          placeholder='请选择表名称'
          addonAfter={<PlusOutlined 
            onClick={() => setVisible(true)}
             />}
        />
      </Form.Item>
      <TableFields
        formData={formData}
        fields={fields}
      />
    </Fragment>
  );
}