import optionsFieldMask from './values/field-mask';
import providerFieldMask from './providers/field-mask';
import directiveFieldMask from './directives/field-mask';

angular
  .module('demica.common.inputMasks', [])
  .value('fieldMaskConfig', optionsFieldMask)
  .provider('fieldMaskConfigProvider', providerFieldMask)
  .directive('fieldMask', directiveFieldMask);