(function() {
  'use strict';

  var data = [
    {
      artifact: 'jboss-fuse.zip',
      href: '#'
    },
    {
      artifact: 'maven-repository.zip',
      href: '#'
    },
    {
      artifact: 'maven-repository-online',
      href: '#'
    },
    {
      artifact: 'fuse-ose-cartridge.docker',
      href: '#'
    }
  ];

  angular
    .module('pnc.qe')
    .controller('BinariesTabController', BinariesTabController);

  function BinariesTabController() {
    var vm = this;

    vm.content = "Binaries Tab";
    vm.binaries = data;
  }
})();
