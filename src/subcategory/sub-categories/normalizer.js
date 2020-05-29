import get from 'lodash/get';
import orderBy from 'lodash/orderBy';

/**
 * Magento 2: subcategory sub-categories normalizer
 */
function normalizer(rawData) {
  const rawChildren = get(rawData, 'data.categoryList[0].children', []);
  const rawChildrenSorted = orderBy(rawChildren, 'position');
  return {
    items: rawChildrenSorted.map((item) => ({
      name: get(item, 'name', ''),
      url: `/${get(item, 'url_path', '')}${get(item, 'url_suffix', '')}`,
    })),
  };
}

export default normalizer;
