$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/Starter/Start.feature");
formatter.feature({
  "line": 1,
  "name": "Вход в приложението на детската градина",
  "description": "",
  "id": "вход-в-приложението-на-детската-градина",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "StarterSteps.openLoginScreen()"
});
formatter.result({
  "duration": 117762700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Вход в системата с валидни данни",
  "description": "",
  "id": "вход-в-приложението-на-детската-градина;вход-в-системата-с-валидни-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Въвежда \"Gosho\" родителско име",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Влязохте успешно!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gosho",
      "offset": 9
    }
  ],
  "location": "StarterSteps.InsertParentName(String)"
});
formatter.result({
  "duration": 1222300,
  "status": "passed"
});
formatter.match({
  "location": "StarterSteps.ClickLoginButton()"
});
formatter.result({
  "duration": 1762100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Влязохте успешно!",
      "offset": 18
    }
  ],
  "location": "StarterSteps.SuccessMessage(String)"
});
formatter.result({
  "duration": 826100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "StarterSteps.openLoginScreen()"
});
formatter.result({
  "duration": 49000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Вход в системата без данни",
  "description": "",
  "id": "вход-в-приложението-на-детската-градина;вход-в-системата-без-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Натиска бутона за въвеждане",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение: \"Въведете име на родител!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StarterSteps.ClickLoginButton()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име на родител!",
      "offset": 18
    }
  ],
  "location": "StarterSteps.SuccessMessage(String)"
});
formatter.result({
  "duration": 51300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "StarterSteps.openLoginScreen()"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Вход в системата с грешни данни",
  "description": "",
  "id": "вход-в-приложението-на-детската-градина;вход-в-системата-с-грешни-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Въвежда \"gre6no Ime\" родителско име",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Вижда съобщение: \"Сгрешени данни!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "gre6no Ime",
      "offset": 9
    }
  ],
  "location": "StarterSteps.InsertParentName(String)"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "location": "StarterSteps.ClickLoginButton()"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Сгрешени данни!",
      "offset": 18
    }
  ],
  "location": "StarterSteps.SuccessMessage(String)"
});
formatter.result({
  "duration": 59000,
  "status": "passed"
});
});