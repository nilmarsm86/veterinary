import { useState } from "react";

function useFormModel(initialValue) {
  let [model, set] = useState(initialValue);

  let result = {};

  for (let field in model) {
    result[field] = fieldModel(model[field]);
    result[field]["name"] = field;
    result[field]["onChange"] = function (e) {
      //set the state value
      model[field] = e.target.value;
      //console.log({ ...model });
      set({ ...model });
    };
  }
  return [result, set];
}

function fieldModel(model, set = null) {
  let attrs = { value: model };
  if (set !== null) {
    attrs["onChange"] = function (e) {
      set(e.target.value);
    };
  }
  return attrs;
}

function useFieldModel(model, set) {
  return fieldModel(model, set);
}

function validateFormModel(model, validation) {
  for (let field in validation) {
    if (model[field].value === validation[field]) {
      return true;
    }
  }
  return false;
}

function reAssembleData(model, exclude) {
  let data = {};
  for (let field in model) {
    if (field !== exclude) {
      data[field] = model[field]["value"];
    }
  }
  return data;
}

export { useFormModel, useFieldModel, validateFormModel, reAssembleData };
