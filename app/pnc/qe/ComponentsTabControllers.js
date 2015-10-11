(function() {
  'use strict';

  var data = [
    {
      buildConfiguration: {
        name: 'hibernate-4.3',
        scmUrl: 'http://github.com/hibernate#4.3',
        buildScript: 'mvn clean install -Pmagic',
        buildEnvironment: 'RHEL 6 / Java 1.6'
      },
      qeStatus: 'warning',
      qeChecks: [
        {
          name: 'GAV Clash',
          passed: false
        },
        {
          name: 'Unit Tests',
          passed: true
        }
      ]
    },

    {
      buildConfiguration: {
        name: 'apache-karaf-2.4.4',
        scmUrl: 'http://github.com/apache-karaf#2.4.4',
        buildScript: 'mvn clean install -Pmagic',
        buildEnvironment: 'RHEL 5 / Java 1.5'
      },
      qeStatus: 'success',
      qeChecks: [
        {
          name: 'GAV Clash',
          passed: false
        },
        {
          name: 'Unit Tests',
          passed: true
        }
      ]
    },

    {
      buildConfiguration: {
        name: 'apache-camel-2.14.1',
        scmUrl: 'http://github.com/apache-camel#2.14.4',
        buildScript: 'mvn clean install -Pmagic',
        buildEnvironment: 'RHEL 6 / Java 1.7'
      },
      qeStatus: 'danger',
      qeChecks: [
        {
          name: 'GAV Clash',
          passed: false
        },
        {
          name: 'Unit Tests',
          passed: false
        }
      ]
    }
  ];

  angular
    .module('pnc.qe')
    .controller('ComponentsTabController', ComponentsTabController);

  function ComponentsTabController() {
    var vm = this;

    vm.content = "Components Tab";
    vm.components = data;
  }
})();
