var should = require('chai').should(),
    nsclient = require('../ns-client'),
    send = nsclient.sendNotification;

    describe('#send', function() {
    	it('converts & into &amp;', function() {
    		escape('&').should.equal('&amp;');
  		});
    });

});