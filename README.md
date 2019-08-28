# Tabbouleh sample with AJV validator

Basic sample which combine [tabbouleh](https://github.com/Chnapy/tabbouleh) (JSON Schema generation) with [ajv](https://github.com/epoberezkin/ajv) (data validation).

[**__Preview here__**](https://chnapy.github.io/tabbouleh-sample-ajv)

# Getting started

```
npm install
```

```
npm start
```

# How it works

Simplified steps:

```typescript
// generate the UserData schema
const schema = Tabbouleh.generateJSONSchema(UserData);

// instantiate AJV & compile the schema
const ajv = new Ajv();
const validate = ajv.compile(schema);

// get the data from input or anything else...

// validate data with AJV
const valid = validate(data) // boolean

if(!valid) {
    // there is errors
    console.log(validate.errors);
}
```