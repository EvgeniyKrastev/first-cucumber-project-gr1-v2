$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/admin/Admin.feature");
formatter.feature({
  "line": 2,
  "name": "Въвеждане на родители",
  "description": "",
  "id": "въвеждане-на-родители",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Въвеждане на родител",
  "description": "",
  "id": "въвеждане-на-родители;въвеждане-на-родител",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Админът отваря приложението за добавяне на родители",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въвежда \"\u003cИме\u003e\" на родител",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда телефонен номер \"\u003cНомер\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"\u003cСъобщение\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "въвеждане-на-родители;въвеждане-на-родител;",
  "rows": [
    {
      "cells": [
        "Име",
        "Номер",
        "Съобщение"
      ],
      "line": 12,
      "id": "въвеждане-на-родители;въвеждане-на-родител;;1"
    },
    {
      "cells": [
        "Gosho",
        "0883335553",
        "Успешно Въведени данни"
      ],
      "line": 13,
      "id": "въвеждане-на-родители;въвеждане-на-родител;;2"
    },
    {
      "cells": [
        "Gosho",
        "08765421",
        "Въведете номер с повече символи"
      ],
      "line": 14,
      "id": "въвеждане-на-родители;въвеждане-на-родител;;3"
    },
    {
      "cells": [
        "Go",
        "0876542155",
        "Въведете име с повече символи"
      ],
      "line": 15,
      "id": "въвеждане-на-родители;въвеждане-на-родител;;4"
    },
    {
      "cells": [
        "",
        "08765421",
        "Въведете име с повече символи"
      ],
      "line": 16,
      "id": "въвеждане-на-родители;въвеждане-на-родител;;5"
    },
    {
      "cells": [
        "Gosho",
        "",
        "Въведете номер с повече символи"
      ],
      "line": 17,
      "id": "въвеждане-на-родители;въвеждане-на-родител;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Въвеждане на родител",
  "description": "",
  "id": "въвеждане-на-родители;въвеждане-на-родител;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Админът отваря приложението за добавяне на родители",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въвежда \"Gosho\" на родител",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда телефонен номер \"0883335553\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Успешно Въведени данни\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.adminOpenAddParentApp()"
});
formatter.result({
  "duration": 120402500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 9
    }
  ],
  "location": "AdminSteps.AddParent(String)"
});
formatter.result({
  "duration": 1274800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0883335553",
      "offset": 25
    }
  ],
  "location": "AdminSteps.addPhoneNumber(String)"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.addDataButton()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно Въведени данни",
      "offset": 18
    }
  ],
  "location": "AdminSteps.message(String)"
});
formatter.result({
  "duration": 1037400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Въвеждане на родител",
  "description": "",
  "id": "въвеждане-на-родители;въвеждане-на-родител;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Админът отваря приложението за добавяне на родители",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въвежда \"Gosho\" на родител",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда телефонен номер \"08765421\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Въведете номер с повече символи\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.adminOpenAddParentApp()"
});
formatter.result({
  "duration": 63800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 9
    }
  ],
  "location": "AdminSteps.AddParent(String)"
});
formatter.result({
  "duration": 52900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08765421",
      "offset": 25
    }
  ],
  "location": "AdminSteps.addPhoneNumber(String)"
});
formatter.result({
  "duration": 39900,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.addDataButton()"
});
formatter.result({
  "duration": 14300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете номер с повече символи",
      "offset": 18
    }
  ],
  "location": "AdminSteps.message(String)"
});
formatter.result({
  "duration": 40500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Въвеждане на родител",
  "description": "",
  "id": "въвеждане-на-родители;въвеждане-на-родител;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Админът отваря приложението за добавяне на родители",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въвежда \"Go\" на родител",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда телефонен номер \"0876542155\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Въведете име с повече символи\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.adminOpenAddParentApp()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Go",
      "offset": 9
    }
  ],
  "location": "AdminSteps.AddParent(String)"
});
formatter.result({
  "duration": 57000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0876542155",
      "offset": 25
    }
  ],
  "location": "AdminSteps.addPhoneNumber(String)"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.addDataButton()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име с повече символи",
      "offset": 18
    }
  ],
  "location": "AdminSteps.message(String)"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Въвеждане на родител",
  "description": "",
  "id": "въвеждане-на-родители;въвеждане-на-родител;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Админът отваря приложението за добавяне на родители",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въвежда \"\" на родител",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда телефонен номер \"08765421\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Въведете име с повече символи\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.adminOpenAddParentApp()"
});
formatter.result({
  "duration": 44700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "AdminSteps.AddParent(String)"
});
formatter.result({
  "duration": 47900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08765421",
      "offset": 25
    }
  ],
  "location": "AdminSteps.addPhoneNumber(String)"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.addDataButton()"
});
formatter.result({
  "duration": 9600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име с повече символи",
      "offset": 18
    }
  ],
  "location": "AdminSteps.message(String)"
});
formatter.result({
  "duration": 27800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Въвеждане на родител",
  "description": "",
  "id": "въвеждане-на-родители;въвеждане-на-родител;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Админът отваря приложението за добавяне на родители",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въвежда \"Gosho\" на родител",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда телефонен номер \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Въведете номер с повече символи\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AdminSteps.adminOpenAddParentApp()"
});
formatter.result({
  "duration": 88400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 9
    }
  ],
  "location": "AdminSteps.AddParent(String)"
});
formatter.result({
  "duration": 41700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "AdminSteps.addPhoneNumber(String)"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.addDataButton()"
});
formatter.result({
  "duration": 10700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете номер с повече символи",
      "offset": 18
    }
  ],
  "location": "AdminSteps.message(String)"
});
formatter.result({
  "duration": 26100,
  "status": "passed"
});
});