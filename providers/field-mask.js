export default fieldMaskConfigProvider;

function fieldMaskConfigProvider() {
  angular.extend(this, {
    maskDefinitions,
    clearOnBlur,
    clearOnBlurPlaceholder,
    eventsToHandle,
    addDefaultPlaceholder,
    allowInvalidValue,
    $get: () => this,
  })
  
  let options = {};

  this.maskDefinitions = function(maskDefinitions) {
    return options.maskDefinitions = maskDefinitions;
  };
  this.clearOnBlur = function(clearOnBlur) {
    return options.clearOnBlur = clearOnBlur;
  };
  this.clearOnBlurPlaceholder = function(clearOnBlurPlaceholder) {
    return options.clearOnBlurPlaceholder = clearOnBlurPlaceholder;
  };
  this.eventsToHandle = function(eventsToHandle) {
    return options.eventsToHandle = eventsToHandle;
  };
  this.addDefaultPlaceholder = function(addDefaultPlaceholder) {
    return options.addDefaultPlaceholder = addDefaultPlaceholder;
  };
  this.allowInvalidValue = function(allowInvalidValue) {
    return options.allowInvalidValue = allowInvalidValue;
  };
  this.$get = ['fieldMaskConfig', function(fieldMaskConfig) {
    let tempOptions = fieldMaskConfig;

    for (let prop in options) {
      if (angular.isObject(options[prop]) && !angular.isArray(options[prop])) {
        angular.extend(tempOptions[prop], options[prop]);
      } else {
        tempOptions[prop] = options[prop];
      }
    }

    return tempOptions;
  }];
}
