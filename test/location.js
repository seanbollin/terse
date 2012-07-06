var assert = require("assert")
var should = require("should")
var Location = require("../src/location")

describe('terse.location', function(){

    describe('#getControllerName', function() {
        var location = new Location('index')
        it('should return index', function() {
            location.getControllerName().should.equal('index')
        })
    })

    describe('#getActionName', function() {
        var location = new Location('index', 'get')
        it('should return get', function() {
            location.getActionName().should.equal('get')
        })
    })

    describe('#getParams', function() {
        it('should return params', function() {
            var params = {'test': 'bob'}
            var location = new Location('index', 'get', params)
            location.getParams().should.equal(params)
        })
    })

    describe('#factory', function() {
        it('should create a location', function() {
            var location = Location.factory({
                'controller': 'index',
                'action': 'get',
                'params': {
                    'test': 'bob'
                }
            })
            location.should.instanceOf(Location)
        })
    })
})