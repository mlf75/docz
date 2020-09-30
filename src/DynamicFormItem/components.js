// 自定义组件 map

import DatabaseTable from './components/DatabaseTable';
import TableFields from './components/TableFields';
import TableShow from './components/TableShow';
import RelatedResource from './components/RelatedResource';
const components = {
  table: DatabaseTable,
  tableFields: TableFields,
  tableShow: TableShow,
  resource: RelatedResource,
};

export default components;
