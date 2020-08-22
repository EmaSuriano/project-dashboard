/* tslint:disable */
// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv from 'ajv';
import Project from './Project';
export const ajv = new Ajv({"allErrors":true,"coerceTypes":false,"format":"fast","nullable":true,"unicode":true,"uniqueItems":true,"useDefaults":true});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export const ProjectSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "defaultProperties": [
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "issues": {
      "defaultProperties": [
      ],
      "properties": {
        "totalCount": {
          "type": "number"
        }
      },
      "required": [
        "totalCount"
      ],
      "type": "object"
    },
    "name": {
      "type": "string"
    },
    "pullRequests": {
      "defaultProperties": [
      ],
      "properties": {
        "totalCount": {
          "type": "number"
        }
      },
      "required": [
        "totalCount"
      ],
      "type": "object"
    },
    "stargazers": {
      "allOf": [
        {
          "defaultProperties": [
          ],
          "properties": {
            "totalCount": {
              "type": "number"
            }
          },
          "required": [
            "totalCount"
          ],
          "type": "object"
        },
        {
          "defaultProperties": [
          ],
          "properties": {
            "nodes": {
              "items": {
                "defaultProperties": [
                ],
                "properties": {
                  "avatarUrl": {
                    "type": "string"
                  },
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  }
                },
                "required": [
                  "avatarUrl",
                  "id",
                  "name"
                ],
                "type": "object"
              },
              "type": "array"
            }
          },
          "required": [
            "nodes"
          ],
          "type": "object"
        }
      ]
    },
    "url": {
      "type": "string"
    },
    "vulnerabilityAlerts": {
      "defaultProperties": [
      ],
      "properties": {
        "totalCount": {
          "type": "number"
        }
      },
      "required": [
        "totalCount"
      ],
      "type": "object"
    }
  },
  "required": [
    "id",
    "issues",
    "name",
    "pullRequests",
    "stargazers",
    "url",
    "vulnerabilityAlerts"
  ],
  "type": "object"
};
export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, 'errors'>
export const isProject = ajv.compile(ProjectSchema) as ValidateFunction<Project>;
export default function validate(value: unknown): Project {
  if (isProject(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(isProject.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: 'Project'}) +
      '\n\n' +
      inspect(value),
    );
  }
}
