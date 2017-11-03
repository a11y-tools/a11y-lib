// index.js

// getaccname
import {
  getGroupingLabels,
  getAccessibleName,
  getAccessibleDesc
} from './getaccname';

export {
  getGroupingLabels,
  getAccessibleName,
  getAccessibleDesc
};

// namefrom
import {
  getAttributeValue,
  isLabelableElement
} from './namefrom';

export {
  getAttributeValue,
  isLabelableElement
}

// roles
import {
  getAriaRole
} from './roles';

export {
  getAriaRole
};

// dom
import {
  isVisible,
  countChildrenWithTagNames,
  isDescendantOf
} from './dom';

export {
  isVisible,
  countChildrenWithTagNames,
  isDescendantOf
};
