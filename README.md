A framework for enabling per-page javascript on multi-page web applications. [![Build Status](https://secure.travis-ci.org/breerly/terse.png?branch=master)](http://travis-ci.org/breerly/terse)

===

### Usage:

Include terse.js in your HTML:

    <script type="text/javascript" src="/js/terse.js"></script>


Place this fragment of code on the bottom of each page:

    <script type="text/javascript">
        terse.go("<?php terseJson ?>");
    </script>

Provide an object with a controller, action, and params: 

PHP:

    $terseJson = ["controller": "purchases", "action": "edit", "params": "showPastOrders=false" ];

### To run the tests:

Unix/Macintosh:

    make test

Windows:

    vcbuild.bat test

### To build the documentation:

    make doc

### To read the documentation:

    man doc/node.1

Resources for Newcomers
---
  - [Ender](http://ender.no.de/)
  - [nodejs.org](http://nodejs.org/)
  - [how to install node.js and npm (node package manager)](http://joyeur.com/2010/12/10/installing-node-and-npm/)
