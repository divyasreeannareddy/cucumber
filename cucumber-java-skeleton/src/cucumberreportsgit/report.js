$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skeleton/thu.feature");
formatter.feature({
  "line": 1,
  "name": "Git Hub Login Feature",
  "description": "",
  "id": "git-hub-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User enters \u003cusername\u003e as username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Navigates to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ],
      "line": 13,
      "id": "git-hub-login-feature;login-scenario;;1"
    },
    {
      "cells": [
        "saranyaUS",
        "newpass21",
        "Git Hub"
      ],
      "line": 14,
      "id": "git-hub-login-feature;login-scenario;;2"
    },
    {
      "cells": [
        "saranyaUS",
        "thes",
        "Sign In Git Hub"
      ],
      "line": 15,
      "id": "git-hub-login-feature;login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "The URL of Git Hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_URL_of_Git_Hub()"
});
formatter.result({
  "duration": 15547272117,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User enters saranyaUS as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters newpass21 as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Navigates to Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "saranyaUS",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_saranya_as_username(String)"
});
formatter.result({
  "duration": 124779994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newpass21",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_newpass_as_password(String)"
});
formatter.result({
  "duration": 123493725,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_Clicks_on_SignIn()"
});
formatter.result({
  "duration": 2800588274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_Navigates_to_Git_Hub(String)"
});
formatter.result({
  "duration": 10801347,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "The URL of Git Hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_URL_of_Git_Hub()"
});
formatter.result({
  "duration": 16805622435,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User enters saranyaUS as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters thes as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Navigates to Sign In Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "saranyaUS",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_saranya_as_username(String)"
});
formatter.result({
  "duration": 175602676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thes",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_newpass_as_password(String)"
});
formatter.result({
  "duration": 78314402,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_Clicks_on_SignIn()"
});
formatter.result({
  "duration": 1519543009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_Navigates_to_Git_Hub(String)"
});
formatter.result({
  "duration": 18878851,
  "status": "passed"
});
});