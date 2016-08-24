import json

valid_schema = {
  "mime_type": "application/json/ons/eq",
  "schema_version": "0.0.1",
  "questionnaire_id": "333",
  "survey_id": "33",
  "title": "Star Wars",
  "description": "Star Wars VII",
  "theme": "default",
  "introduction": {
    "description": "May the force be with you"
  },
  "groups": [
    {
      "id": "14ba4707-321d-441d-8d21-b8367366e766",
      "title": "",
      "blocks": [
        {
          "id": "cd3b74d1-b687-4051-9634-a8f9ce10a27d",
          "title": "Star Wars",
          "sections": [
            {
              "id": "017880bc-752d-4a6b-83df-e130409ee660",
              "title": "Star Wars Quiz",
              "description": "May the force be with you young EQ developer<br/><br/>",
              "questions": [
                {
                  "id": "88824eff-7bb6-443f-85cb-8c2db016d44c",
                  "title": "Chewie",
                  "description": "Jedi",
                  "type": "Integer",
                  "answers": [
                    {
                      "id": "6cf5c72a-c1bf-4d0c-af6c-d0f07bc5b65b",
                      "q_code": "22",
                      "label": "How old is Chewy?",
                      "guidance": "it's old",
                      "type": "Integer",
                      "options": [],
                      "mandatory": True,
                      "alias":"age",
                      "validation": {
                        "messages": {
                          "NOT_INTEGER": "Please enter your age.",
                          "NEGATIVE_INTEGER": "Negative age you can not be.",
                          "INTEGER_TOO_LARGE": "No one lives that long, not even Yoda"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

invalid_schema = {
  "mime_type": "application/json/ons/eq",
  "schema_version": "0.0.1",
  "questionnaire_id": "333",
  "survey_id": "33",
  "title": "Star Wars",
  "description": 1,
  "theme": "default",
  "introduction": {
    "description": "May the force be with you"
  },
  "groups": [
    {
      "id": "14ba4707-321d-441d-8d21-b8367366e766",
      "title": "",
      "blocks": [
        {
          "id": "cd3b74d1-b687-4051-9634-a8f9ce10a27d",
          "title": "Star Wars",
          "sections": [
            {
              "id": "017880bc-752d-4a6b-83df-e130409ee660",
              "title": "Star Wars Quiz",
              "description": "May the force be with you young EQ developer<br/><br/>",
              "questions": [
                {
                  "id": "88824eff-7bb6-443f-85cb-8c2db016d44c",
                  "title": "Chewie",
                  "description": "Jedi",
                  "type": "Integer",
                  "answers": [
                    {
                      "id": "6cf5c72a-c1bf-4d0c-af6c-d0f07bc5b65b",
                      "q_code": "22",
                      "label": "How old is Chewy?",
                      "guidance": "it's old",
                      "type": "Integer",
                      "options": [],
                      "mandatory": True,
                      "alias":"age",
                      "validation": {
                        "messages": {
                          "NOT_INTEGER": "Please enter your age.",
                          "NEGATIVE_INTEGER": "Negative age you can not be.",
                          "INTEGER_TOO_LARGE": "No one lives that long, not even Yoda"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

conditional_display_schema = {
    "mime_type": "application/json/ons/eq",
  "schema_version": "0.0.1",
  "questionnaire_id": "333",
  "survey_id": "33",
  "title": "Star Wars",
  "description": "Star Wars VII",
  "theme": "default",
  "introduction": {
    "description": "May the force be with you"
  },
    "groups": [
        {
            "blocks": [
                {
                    "display": {
                        "properties": {}
                    },
                    "id": "f22b1ba4-d15f-48b8-a1f3-db62b6f34cc0",
                    "sections": [
                        {
                            "description": "",
                            "display": {
                                "properties": {}
                            },
                            "id": "ed3e200a-0735-4e8d-9eea-627c1d908697",
                            "questions": [
                                {
                                    "answers": [
                                        {
                                            "display": {
                                                "properties": {
                                                    "columns": True
                                                }
                                            },
                                            "guidance": "",
                                            "id": "ca3ce3a3-ae44-4e30-8f85-5b6a7a2fb23c",
                                            "label": "Pick your age range",
                                            "mandatory": True,
                                            "options": [
                                                {
                                                    "label": "0 - 17 years",
                                                    "value": "17"
                                                },
                                                {
                                                    "label": "18 + years",
                                                    "value": "18"
                                                }
                                            ],
                                            "q_code": "20",
                                            "type": "Radio",
                                            "validation": {
                                                "messages": {}
                                            }
                                        }
                                    ],
                                    "description": "",
                                    "display": {
                                        "properties": {}
                                    },
                                    "id": "4bfa0229-0ce8-4190-817b-535f55ad2817",
                                    "title": "",
                                    "type": "General",
                                    "validation": []
                                }
                            ],
                            "title": "Pick your age range",
                            "validation": []
                        }
                    ],
                    "title": "",
                    "validation": []
                },
                {
                    "display": {
                        "properties": {}
                    },
                    "id": "96682325-47ab-41e4-a56e-8315a19ffe2a",
                    "sections": [
                        {
                            "description": "",
                            "display": {
                                "properties": {}
                            },
                            "id": "a7dcbb30-1187-4276-a49c-9284730ba4ed",
                            "questions": [
                                {
                                    "answers": [
                                        {
                                            "display": {
                                                "properties": {
                                                    "columns": True
                                                }
                                            },
                                            "guidance": "",
                                            "id": "ca3ce3a3-ae44-4e30-8f85-5b6a7a2fb23d",
                                            "label": "Pick a colour",
                                            "mandatory": True,
                                            "options": [
                                                {
                                                    "label": "Red",
                                                    "value": "Red"
                                                },
                                                {
                                                    "label": "Yellow",
                                                    "value": "Yellow"
                                                }
                                            ],
                                            "q_code": "20",
                                            "type": "Radio",
                                            "validation": {
                                                "messages": {}
                                            }
                                        }
                                    ],
                                    "description": "",
                                    "display": {
                                        "properties": {}
                                    },
                                    "id": "f2ee7dd4-b63c-45f1-a883-9f89c937ad16",
                                    "title": "Pick a colour",
                                    "type": "General"
                                },
                                {
                                    "answers": [
                                        {
                                            "display": {},
                                            "guidance": "",
                                            "id": "fcf636ff-7b3d-47b6-aaff-9a4b00aa888b",
                                            "label": "Please provide your current employment status",
                                            "mandatory": True,
                                            "options": [],
                                            "q_code": "45",
                                            "type": "TextField"
                                        }
                                    ],
                                    "description": "",
                                    "display": {
                                        "properties": {}
                                    },
                                    "id": "f2ee7dd4-b63c-45f1-a883-9f89c937ad17",
                                    "title": "As you are of working age:",
                                    "type": "General",
                                    "skip_condition": {
                                        "when": {
                                            "id" : "ca3ce3a3-ae44-4e30-8f85-5b6a7a2fb23c",
                                            "condition": "equals",
                                            "value": "17"
                                        }
                                    }
                                }
                            ],
                            "title": "",
                            "validation": []
                        }
                    ],
                    "title": "",
                    "validation": []
                }
            ],
            "display": {
                "properties": {}
            },
            "id": "14ba4707-321d-441d-8d21-b8367366e766",
            "title": ""
        }
    ]
}


repeating_block_schema = {
  "mime_type": "application/json/ons/eq",
  "schema_version": "0.0.1",
  "questionnaire_id": "333",
  "survey_id": "33",
  "title": "Star Wars",
  "description": "Star Wars VII",
  "theme": "default",
  "introduction": {
    "description": "May the force be with you"
  },
  "groups": [
    {
      "id": "14ba4707-321d-441d-8d21-b8367366e766",
      "title": "",
      "blocks": [
        {
          "display": {
            "properties": {}
          },
          "id": "f22b1ba4-d15f-48b8-a1f3-db62b6f34cc0",
          "sections": [
            {
              "title": "title",
              "description": "",
              "display": {
                "properties": {}
              },
              "id": "ed3e200a-0735-4e8d-9eea-627c1d908697",
              "questions": [
                {
                  "answers": [
                    {
                      "display": {
                        "properties": {
                          "columns": True
                        }
                      },
                      "guidance": "",
                      "id": "50dd83c9-8de6-4c3b-be24-e85dd290b855",
                      "label": "How many gold stars do you want?",
                      "mandatory": True,
                      "options": [
                        {
                          "label": "1",
                          "value": "1"
                        },
                        {
                          "label": "2",
                          "value": "2"
                        }
                      ],
                      "q_code": "35",
                      "type": "Radio",
                      "validation": {
                        "messages": {}
                      }
                    }
                  ],
                  "description": "",
                  "display": {
                    "properties": {}
                  },
                  "id": "1335d8e2-013e-4dba-a493-5fc7e1019d39",
                  "title": "How many gold stars do you want?",
                  "type": "General",
                  "validation": []
                }
              ]
            }
          ],
          "routing_rules":[
            {
              "goto": {
                "location": "block",
                "id" : "fab02f02-6ce4-4f22-b61f-0c7880009f08_1"
              }
            }
          ],
          "title": "",
          "validation": []
        },
        {
          "display": {
            "properties": {}
          },
          "id": "fab02f02-6ce4-4f22-b61f-0c7880009f08_1",
          "sections": [
            {
              "description": "",
              "display": {
                "properties": {}
              },
              "id": "cc8ab489-4ad1-4d89-b60f-b13d550fa591_1",
              "questions": [
                {
                  "answers": [
                    {
                      "display": {
                        "properties": {
                          "columns": True
                        }
                      },
                      "guidance": "",
                      "id": "a5d5ca1a-cf58-4626-be35-dce81297688b_1",
                      "label": "",
                      "mandatory": True,
                      "options": [
                        {
                          "label": "Shiny gold star",
                          "value": "Shiny gold star"
                        },
                        {
                          "label": "Glittery gold star",
                          "value": "Glittery gold star"
                        }
                      ],
                      "q_code": "22",
                      "type": "Radio",
                      "validation": {
                        "messages": {}
                      }
                    }
                  ],
                  "description": "",
                  "display": {
                    "properties": {}
                  },
                  "id": "cb8f691d-7925-4131-a19b-9eeef592ceea_1",
                  "title": "Which gold star do you want?",
                  "type": "General",
                  "validation": []
                }
              ],
              "title": "",
              "validation": []
            }
          ],
          "routing_rules":[
            {
              "repeat": {
                "answer_id" : "50dd83c9-8de6-4c3b-be24-e85dd290b855",
                "goto": "summary"
              }
            }
          ],
          "title": "",
          "validation": []
        }
      ]
    }
  ]
}

routing_schema = {
  "mime_type": "application/json/ons/eq",
  "schema_version": "0.0.1",
  "questionnaire_id": "333",
  "survey_id": "33",
  "title": "Star Wars",
  "description": "Star Wars VII",
  "theme": "default",
  "introduction": {
    "description": "May the force be with you"
  },
    "groups": [
        {
            "blocks": [
                {
                    "display": {
                        "properties": {}
                    },
                    "id": "f22b1ba4-d15f-48b8-a1f3-db62b6f34cc0",
                    "sections": [
                        {
                            "description": "",
                            "display": {
                                "properties": {}
                            },
                            "id": "ed3e200a-0735-4e8d-9eea-627c1d908697",
                            "questions": [
                                {
                                    "answers": [
                                        {
                                            "display": {
                                                "properties": {
                                                    "columns": True
                                                }
                                            },
                                            "guidance": "",
                                            "id": "ca3ce3a3-ae44-4e30-8f85-5b6a7a2fb23c",
                                            "label": "Please choose a route",
                                            "mandatory": True,
                                            "options": [
                                                {
                                                    "label": "Route 66",
                                                    "value": "Route 66"
                                                },
                                                {
                                                    "label": "Route veg",
                                                    "value": "Route veg"
                                                },
                                                {
                                                    "label": "Route-ing for the other team",
                                                    "value": "Route-ing for the other team"
                                                }
                                            ],
                                            "q_code": "20",
                                            "type": "Radio",
                                            "validation": {
                                                "messages": {}
                                            }
                                        }
                                    ],
                                    "description": "",
                                    "display": {
                                        "properties": {}
                                    },
                                    "id": "4bfa0229-0ce8-4190-817b-535f55ad2817",
                                    "title": "",
                                    "type": "General",
                                    "validation": []
                                }
                            ],
                            "title": "Please choose a route",
                            "validation": []
                        }
                    ],
                    "routing_rules":[
                        {
                            "goto": {
                                "id" : "96682325-47ab-41e4-a56e-8315a19ffe2a",
                                "when": {
                                    "id" : "ca3ce3a3-ae44-4e30-8f85-5b6a7a2fb23c",
                                    "condition": "equals",
                                    "value":"Route 66"
                                }
                            }

                        },
                        {
                            "goto": {
                                "id": "923ccc84-9d47-4a02-8ebc-1e9d14fcf10b",
                                "when": {
                                    "id" : "ca3ce3a3-ae44-4e30-8f85-5b6a7a2fb23c",
                                    "condition": "equals",
                                    "value":"Route veg"
                                }
                            }

                        },
                        {
                            "goto": {
                                "id": "summary",
                                "when": {
                                    "id" : "ca3ce3a3-ae44-4e30-8f85-5b6a7a2fb23c",
                                    "condition": "equals",
                                    "value":"Route-ing for the other team"
                                }
                            }

                        }
                    ],
                    "title": "",
                    "validation": []
                },
                {
                    "display": {
                        "properties": {}
                    },
                    "id": "96682325-47ab-41e4-a56e-8315a19ffe2a",
                    "sections": [
                        {
                            "description": "",
                            "display": {
                                "properties": {}
                            },
                            "id": "a7dcbb30-1187-4276-a49c-9284730ba4ed",
                            "questions": [
                                {
                                    "answers": [
                                        {
                                            "display": {
                                                "properties": {
                                                    "columns": True
                                                }
                                            },
                                            "guidance": "",
                                            "id": "91631df0-4356-4e9f-a9d9-ce8b08d26eb3",
                                            "label": "",
                                            "mandatory": True,
                                            "options": [
                                                {
                                                    "label": "Hawaii",
                                                    "value": "Hawaii"
                                                },
                                                {
                                                    "label": "California",
                                                    "value": "California"
                                                },
                                                {
                                                    "label": "New York",
                                                    "value": "New York"
                                                },
                                                {
                                                    "label": "Alaska",
                                                    "value": "Alaska"
                                                }
                                            ],
                                            "q_code": "21",
                                            "type": "Radio",
                                            "validation": {
                                                "messages": {}
                                            }
                                        }
                                    ],
                                    "description": "",
                                    "display": {
                                        "properties": {}
                                    },
                                    "id": "680f2ff9-d5a5-4057-b1cd-9fde2660b244",
                                    "title": "Pick a US state",
                                    "type": "General",
                                    "validation": []
                                }
                            ],
                            "title": "",
                            "validation": []
                        }
                    ],
                    "routing_rules":[
                        {
                            "goto": {
                                "id" : "summary"
                            }
                        }
                    ],
                    "title": "",
                    "validation": []
                },
                {
                    "display": {
                        "properties": {}
                    },
                    "id": "923ccc84-9d47-4a02-8ebc-1e9d14fcf10b",
                    "sections": [
                        {
                            "description": "",
                            "display": {
                                "properties": {}
                            },
                            "id": "dcb42b6a-88b8-4258-bfe4-3e8b46db28b5",
                            "questions": [
                                {
                                    "answers": [
                                        {
                                            "display": {
                                                "properties": {
                                                    "columns": True
                                                }
                                            },
                                            "guidance": "",
                                            "id": "653e6407-43d6-4dfc-8b11-a673a73d602d",
                                            "label": "",
                                            "mandatory": True,
                                            "options": [
                                                {
                                                    "label": "Parsnip",
                                                    "value": "Parsnip"
                                                },
                                                {
                                                    "label": "Turnip",
                                                    "value": "Turnip"
                                                },
                                                {
                                                    "label": "Potato",
                                                    "value": "Potato"
                                                },
                                                {
                                                    "label": "Salsify",
                                                    "value": "Salsify"
                                                }
                                            ],
                                            "q_code": "22",
                                            "type": "Radio",
                                            "validation": {
                                                "messages": {}
                                            }
                                        }

                                    ],
                                    "description": "",
                                    "display": {
                                        "properties": {}
                                    },
                                    "id": "d9fd4a58-83a5-44df-a413-47ce41244124",
                                    "title": "Pick a veg",
                                    "type": "General",
                                    "validation": []
                                }
                            ],
                            "title": "",
                            "validation": []
                        }
                    ],
                    "title": "",
                    "validation": []
                }
            ],
            "display": {
                "properties": {}
            },
            "id": "14ba4707-321d-441d-8d21-b8367366e766",
            "title": ""
        }
    ]
}

