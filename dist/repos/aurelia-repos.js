System.register(["breeze", "../github"], function (_export) {
  "use strict";

  var breeze, createEntityManager, AureliaRepos;



  function stringComparisonOrdinalIgnoreCase(a, b) {
    if (a === null) a = "";
    if (b === null) b = "";
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
  return {
    setters: [function (_breeze) {
      breeze = _breeze["default"];
    }, function (_github) {
      createEntityManager = _github.createEntityManager;
    }],
    execute: function () {
      AureliaRepos = function AureliaRepos() {
        var _this = this;
        var entityManager = createEntityManager(),
            query = breeze.EntityQuery.from("orgs/aurelia/repos").toType("Repository");

        this.repos = [];

        this.ready = entityManager.executeQuery(query).then(function (queryResult) {
          _this.repos = queryResult.results.sort(function (a, b) {
            return b.stargazers_count - a.stargazers_count;
          });
        });
      };

      _export("AureliaRepos", AureliaRepos);
    }
  };
});