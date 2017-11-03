// index.js

// getaccname
import {
  getGroupingLabels,
  nameFromNativeSemantics,
  getAccessibleName,
  getAccessibleDesc
} from './getaccname.js';

export {
  getGroupingLabels,
  getAccessibleName,
  getAccessibleDesc
};

// roles
import {
  getValidRole,
  getAriaRole,
  nameFromIncludesContents
} from './roles';

export {
  getAriaRole
};

// dom
import {
  isVisible,
  countChildrenWithTagNames,
  isDescendantOf,
  hasParentWithName
} from './dom';

export {
  isVisible,
  countChildrenWithTagNames
};
