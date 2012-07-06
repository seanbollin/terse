### Terse:

A framework for enabling per-page javascript on multi-page web applications. [![Build Status](https://secure.travis-ci.org/breerly/terse.png?branch=master)](http://travis-ci.org/breerly/terse)

===

Resources for Newcomers
---
  - [Ender](http://ender.no.de/)
  - [nodejs.org](http://nodejs.org/)
  - [how to install node.js and npm (node package manager)](http://joyeur.com/2010/12/10/installing-node-and-npm/)


### Usage:

Include terse.js in your HTML:

    <script type="text/javascript" src="/js/terse.js"></script>


Place this fragment of code on the bottom of each page:

    <script type="text/javascript">
        terse.go("<?php terseJson ?>");
    </script>

Provide an object with a controller, action, and params: 

PHP:

    $terseJson = ["controller": "purchases", "action": "edit", "params": "showPastOrders=false"];

Ruby on Rails:

    def index
        @terseJson = {:controller => "purchases", :action => "edit", :params => "showPastOrders=false"}

        respond_to do |format|
            format.html # index.html.erb
        end
    end

### To run the tests:

    npm install
    npm test

Resources for Newcomers
---
  - [Ender](http://ender.no.de/)
  - [nodejs.org](http://nodejs.org/)
  - [how to install node.js and npm (node package manager)](http://joyeur.com/2010/12/10/installing-node-and-npm/)
