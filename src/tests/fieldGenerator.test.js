import { fieldGenerator } from "../utils/fieldGenerator";
import CustomInput from "../components/common/FormElements/CustomElements";
import { requiredField } from "../utils/validators";

describe("FieldGenerator", () => {
  test("create Fields with params", () => {
    const fields = fieldGenerator(
      ["1", "2"],
      ["!", "№"],
      ["input", CustomInput],
      ["text", "text"],
      [["someValidation"], [requiredField]],
      "custom",
      true
    );
    const fieldsModeSolo = fieldGenerator(
      "randomName",
      "place",
      CustomInput,
      "text",
      [requiredField],
      "solo",
      true
    );
    const fieldsModeSame = fieldGenerator(
      ["randomName", "secondName"],
      ["place", "secondPlace"],
      CustomInput,
      ["text", "text"],
      [requiredField],
      "same",
      true
    );
    //Mode: custom - when we need a lot of fields with different params
    expect(fields.length).toBe(2);
    expect(fields[1].component).toEqual(CustomInput);
    expect(fields[1].validate).toEqual([requiredField]);
    //
    //Mode: solo - when we need one field to draw
    expect(fieldsModeSolo.length).toBe(1);
    expect(fieldsModeSolo[0].component).toEqual(CustomInput);
    expect(fieldsModeSolo[0].validate).toEqual([requiredField]);
    //
    //Mode: same - when we need a lot of fields with same validate and component params
    expect(fieldsModeSame.length).toBe(2);
    expect(fieldsModeSame[1].component).toEqual(CustomInput);
    expect(fieldsModeSame[1].validate).toEqual([requiredField]);
  });
});
