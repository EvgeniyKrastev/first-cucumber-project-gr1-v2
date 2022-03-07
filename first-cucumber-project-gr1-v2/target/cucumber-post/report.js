$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/kid/Kid.feature");
formatter.feature({
  "line": 1,
  "name": "Въвеждане данни за дете",
  "description": "",
  "id": "въвеждане-данни-за-дете",
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
  "name": "Родителя отваря екрана за управление на данните",
  "keyword": "Given "
});
formatter.match({
  "location": "KidSteps.openAddKidDataScreen()"
});
formatter.result({
  "duration": 2025300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Успешно въвеждане данни за дете",
  "description": "",
  "id": "въвеждане-данни-за-дете;успешно-въвеждане-данни-за-дете",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Добавя име: \"Petar\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Добавя данни за Работещи родители",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Добавя данни за Дете с увреждане",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Добавя данни за Дете с близнак",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Добавя данни за Брат/сестра",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Вижда съобщение: \"Успешно въведени данни\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Petar",
      "offset": 13
    }
  ],
  "location": "KidSteps.addName(String)"
});
formatter.result({
  "duration": 179700,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.workingParents()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.disabledKid()"
});
formatter.result({
  "duration": 20600,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.haveTwin()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.broterSister()"
});
formatter.result({
  "duration": 13900,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.ClickInsertDataButton()"
});
formatter.result({
  "duration": 13902200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно въведени данни",
      "offset": 18
    }
  ],
  "location": "KidSteps.SuccessMessage(String)"
});
formatter.result({
  "duration": 122700,
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
  "name": "Родителя отваря екрана за управление на данните",
  "keyword": "Given "
});
formatter.match({
  "location": "KidSteps.openAddKidDataScreen()"
});
formatter.result({
  "duration": 86200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Въвеждане данни без Име",
  "description": "",
  "id": "въвеждане-данни-за-дете;въвеждане-данни-без-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Добавя данни за Работещи родители",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Добавя данни за Дете с увреждане",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Добавя данни за Дете с близнак",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Добавя данни за Брат/сестра",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Вижда съобщение: \"Въведете име на дете!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "KidSteps.workingParents()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.disabledKid()"
});
formatter.result({
  "duration": 15200,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.haveTwin()"
});
formatter.result({
  "duration": 13900,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.broterSister()"
});
formatter.result({
  "duration": 47800,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.ClickInsertDataButton()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име на дете!",
      "offset": 18
    }
  ],
  "location": "KidSteps.SuccessMessage(String)"
});
formatter.result({
  "duration": 63700,
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
  "name": "Родителя отваря екрана за управление на данните",
  "keyword": "Given "
});
formatter.match({
  "location": "KidSteps.openAddKidDataScreen()"
});
formatter.result({
  "duration": 76100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Въвеждане данни с прикалено късо име",
  "description": "",
  "id": "въвеждане-данни-за-дете;въвеждане-данни-с-прикалено-късо-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Добавя име: \"Nm\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Добавя данни за Работещи родители",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Добавя данни за Дете с увреждане",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Добавя данни за Дете с близнак",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Добавя данни за Брат/сестра",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Вижда съобщение: \"Въведете име с повече символи\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Nm",
      "offset": 13
    }
  ],
  "location": "KidSteps.addName(String)"
});
formatter.result({
  "duration": 130400,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.workingParents()"
});
formatter.result({
  "duration": 29700,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.disabledKid()"
});
formatter.result({
  "duration": 22100,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.haveTwin()"
});
formatter.result({
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.broterSister()"
});
formatter.result({
  "duration": 14100,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.ClickInsertDataButton()"
});
formatter.result({
  "duration": 17000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име с повече символи",
      "offset": 18
    }
  ],
  "location": "KidSteps.SuccessMessage(String)"
});
formatter.result({
  "duration": 49900,
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
  "name": "Родителя отваря екрана за управление на данните",
  "keyword": "Given "
});
formatter.match({
  "location": "KidSteps.openAddKidDataScreen()"
});
formatter.result({
  "duration": 46200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Въвеждане данни без Работещи родители",
  "description": "",
  "id": "въвеждане-данни-за-дете;въвеждане-данни-без-работещи-родители",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "Добавя име: \"Petar\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Добавя данни за Дете с увреждане",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Добавя данни за Дете с близнак",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Добавя данни за Брат/сестра",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Вижда съобщение: \"Въведете всички данни\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Petar",
      "offset": 13
    }
  ],
  "location": "KidSteps.addName(String)"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.disabledKid()"
});
formatter.result({
  "duration": 12700,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.haveTwin()"
});
formatter.result({
  "duration": 16900,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.broterSister()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.ClickInsertDataButton()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете всички данни",
      "offset": 18
    }
  ],
  "location": "KidSteps.SuccessMessage(String)"
});
formatter.result({
  "duration": 97800,
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
  "name": "Родителя отваря екрана за управление на данните",
  "keyword": "Given "
});
formatter.match({
  "location": "KidSteps.openAddKidDataScreen()"
});
formatter.result({
  "duration": 64500,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Въвеждане данни без Дете с близнак",
  "description": "",
  "id": "въвеждане-данни-за-дете;въвеждане-данни-без-дете-с-близнак",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "Добавя име: \"Petar\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Добавя данни за Работещи родители",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Добавя данни за Дете с увреждане",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Добавя данни за Брат/сестра",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Вижда съобщение: \"Въведете всички данни\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Petar",
      "offset": 13
    }
  ],
  "location": "KidSteps.addName(String)"
});
formatter.result({
  "duration": 103900,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.workingParents()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.disabledKid()"
});
formatter.result({
  "duration": 14200,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.broterSister()"
});
formatter.result({
  "duration": 23700,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.ClickInsertDataButton()"
});
formatter.result({
  "duration": 12600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете всички данни",
      "offset": 18
    }
  ],
  "location": "KidSteps.SuccessMessage(String)"
});
formatter.result({
  "duration": 64100,
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
  "name": "Родителя отваря екрана за управление на данните",
  "keyword": "Given "
});
formatter.match({
  "location": "KidSteps.openAddKidDataScreen()"
});
formatter.result({
  "duration": 52800,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Въвеждане данни без Дете с увреждане",
  "description": "",
  "id": "въвеждане-данни-за-дете;въвеждане-данни-без-дете-с-увреждане",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "Добавя име: \"Petar\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Добавя данни за Работещи родители",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Добавя данни за Дете с близнак",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Добавя данни за Брат/сестра",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Вижда съобщение: \"Въведете всички данни\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Petar",
      "offset": 13
    }
  ],
  "location": "KidSteps.addName(String)"
});
formatter.result({
  "duration": 106400,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.workingParents()"
});
formatter.result({
  "duration": 17500,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.haveTwin()"
});
formatter.result({
  "duration": 25700,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.broterSister()"
});
formatter.result({
  "duration": 10500,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.ClickInsertDataButton()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете всички данни",
      "offset": 18
    }
  ],
  "location": "KidSteps.SuccessMessage(String)"
});
formatter.result({
  "duration": 115400,
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
  "name": "Родителя отваря екрана за управление на данните",
  "keyword": "Given "
});
formatter.match({
  "location": "KidSteps.openAddKidDataScreen()"
});
formatter.result({
  "duration": 72500,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Въвеждане данни без Брат/сестра",
  "description": "",
  "id": "въвеждане-данни-за-дете;въвеждане-данни-без-брат/сестра",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "Добавя име: \"Petar\"",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "Добавя данни за Работещи родители",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Добавя данни за Дете с увреждане",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Добавя данни за Дете с близнак",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Натиска бутона за въвеждане",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Вижда съобщение: \"Въведете всички данни\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Petar",
      "offset": 13
    }
  ],
  "location": "KidSteps.addName(String)"
});
formatter.result({
  "duration": 121400,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.workingParents()"
});
formatter.result({
  "duration": 18500,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.disabledKid()"
});
formatter.result({
  "duration": 30100,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.haveTwin()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "KidSteps.ClickInsertDataButton()"
});
formatter.result({
  "duration": 21400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете всички данни",
      "offset": 18
    }
  ],
  "location": "KidSteps.SuccessMessage(String)"
});
formatter.result({
  "duration": 72000,
  "status": "passed"
});
});