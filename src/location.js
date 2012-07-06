require('klass')

var Location = klass({

    controllerName: '',
    actionName: '',
    params: {},

    initialize: function(controllerName, actionName, params) {
        this.controllerName = controllerName
        this.actionName = actionName
        this.params = params
    },

    getControllerName: function() {
        return this.controllerName
    },

    getActionName: function() {
        return this.actionName
    },

    getParams: function() {
        return this.params
    }

}).statics({

    factory: function(options) {
        return new this(
            options.controller,
            options.action,
            options.params
        )
    }
})

module.exports = Location