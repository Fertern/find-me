import { Field } from "redux-form";
import React from "react";

export const fieldGenerator = (
  names,
  placeholders,
  components = "input",
  types = "text",
  validates = null,
  mode = "solo",
  arrayOnly = false
) => {
  const elementsCount = names.length;
  const fields = [];
  if (mode === "solo") {
    fields.push({
      name: names,
      placeholder: placeholders,
      type: types,
      component: components,
      validate: validates
    });
  }
  if (mode === "same") {
    for (let i = 0; i < elementsCount; i++) {
      fields.push({
        name: names[i],
        placeholder: placeholders[i],
        type: types,
        component: components,
        validate: validates
      });
    }
  }
  if (mode === "custom") {
    for (let i = 0; i < elementsCount; i++) {
      fields.push({
        name: names[i],
        placeholder: placeholders[i],
        type: types[i],
        component: components[i],
        validate: validates[i]
      });
    }
  }
  if (arrayOnly) {
    return fields;
  } else {
    return fields.map(field => (
      <Field
        name={field.name}
        placeholder={field.placeholder}
        type={field.type}
        component={field.component}
        validate={field.validate}
        key={field.name}
      />
    ));
  }
};
