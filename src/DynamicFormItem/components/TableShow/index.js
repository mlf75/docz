import React, { Fragment } from "react";
import TableFields from "../TableFields";

function TableShow(props) {
  const { formData, fields, hidden, required, label, name } = props;
  return (
    <Fragment>
      <div
        className={`show-item ${hidden ? "show-item-hidden" : null}`}
        key={name}
      >
        <p className={`show-item-label ${required ? "required" : ""}`}>
          {label || ""}:
        </p>
        <p className="markdown-body">{formData[name]}</p>
      </div>
      <div className="show-item">
        <div style={{ paddingLeft: 130, width: '100%' }}>
          <TableFields formData={formData} fields={fields} />
        </div>
      </div>
    </Fragment>
  );
}
export default TableShow;
