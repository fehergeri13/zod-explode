"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  galaxySchema: () => galaxySchema
});
module.exports = __toCommonJS(src_exports);
var import_zod = require("zod");
function object(shape) {
  return import_zod.z.object(shape);
}
var seatSchema = object({
  heated: import_zod.z.boolean(),
  side: import_zod.z.union([import_zod.z.literal("left"), import_zod.z.literal("right"), import_zod.z.literal("center")]),
  row: import_zod.z.union([import_zod.z.literal("1st"), import_zod.z.literal("2th"), import_zod.z.literal("3rd")]),
  color: import_zod.z.string(),
  comfy: import_zod.z.boolean(),
  adjustable: import_zod.z.boolean()
});
var soundSystemSchema = object({
  radioSupport: import_zod.z.number(),
  bluetoothSupport: import_zod.z.boolean(),
  cdSupport: import_zod.z.boolean(),
  casetteSupport: import_zod.z.boolean(),
  usbSupport: import_zod.z.boolean()
});
var automaticGearSystemSchema = object({
  planetary: import_zod.z.boolean(),
  numGears: import_zod.z.number()
});
var manualGearSystemSchema = object({
  numGears: import_zod.z.number(),
  hasReverse: import_zod.z.literal(true)
});
var engineSchema = object({
  power: import_zod.z.number(),
  cylinders: import_zod.z.number(),
  fuelType: import_zod.z.union([import_zod.z.literal("diesel"), import_zod.z.literal("bensin")]),
  gearType: import_zod.z.union([automaticGearSystemSchema, manualGearSystemSchema])
});
var wheelSchema = object({
  branch: import_zod.z.union([
    import_zod.z.literal("continental"),
    import_zod.z.literal("hankook"),
    import_zod.z.literal("goodyear"),
    import_zod.z.literal("michelin")
  ]),
  diameter: import_zod.z.number(),
  color: import_zod.z.string(),
  punctureSafe: import_zod.z.boolean()
});
var carSchema = object({
  brand: import_zod.z.string(),
  weight: import_zod.z.number(),
  productionYear: import_zod.z.number(),
  engine: engineSchema,
  seats: import_zod.z.array(seatSchema),
  wheels: import_zod.z.tuple([wheelSchema, wheelSchema, wheelSchema, wheelSchema]),
  soundSystem: soundSystemSchema
});
var bikeSchema = object({
  brand: import_zod.z.string(),
  color: import_zod.z.string()
});
var personSchema = object({
  name: import_zod.z.string(),
  age: import_zod.z.number(),
  address: import_zod.z.string(),
  phone: import_zod.z.string(),
  car: carSchema.optional(),
  bike: bikeSchema.optional()
});
var printerSchema = object({
  brand: import_zod.z.string(),
  format: import_zod.z.union([import_zod.z.literal("a4"), import_zod.z.literal("a5")]),
  capacity: import_zod.z.number()
});
var companySchema = object({
  ceo: personSchema,
  cfo: personSchema.optional(),
  employees: import_zod.z.array(personSchema),
  printers: import_zod.z.array(printerSchema),
  cars: import_zod.z.array(carSchema)
});
var parentCompanySchema = object({
  mainCompany: companySchema,
  subCompanies: import_zod.z.array(companySchema)
});
var flagSchema = object({
  colors: import_zod.z.array(import_zod.z.string()),
  orientation: import_zod.z.string()
});
var countrySchema = object({
  flag: flagSchema,
  departments: object({
    justice: companySchema,
    rights: companySchema,
    healthcare: companySchema,
    education: companySchema
  })
});
var continentSchema = object({
  countries: import_zod.z.array(countrySchema),
  location: import_zod.z.string(),
  area: import_zod.z.number(),
  totalPopulation: import_zod.z.number()
});
var moonSchema = object({
  color: import_zod.z.string(),
  weight: import_zod.z.number(),
  distance: import_zod.z.number()
});
var planetSchema = object({
  continents: import_zod.z.array(continentSchema),
  moons: import_zod.z.array(moonSchema)
});
var sunSchema = object({
  diameter: import_zod.z.number()
});
var solarSystemSchema = object({
  planets: import_zod.z.array(planetSchema),
  sun: sunSchema,
  flyingTesla: carSchema
});
var galaxySchema = object({
  systems: import_zod.z.array(solarSystemSchema)
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  galaxySchema
});
