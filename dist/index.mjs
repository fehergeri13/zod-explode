// src/index.ts
import { z } from "zod";
function object(shape) {
  return z.object(shape);
}
var seatSchema = object({
  heated: z.boolean(),
  side: z.union([z.literal("left"), z.literal("right"), z.literal("center")]),
  row: z.union([z.literal("1st"), z.literal("2th"), z.literal("3rd")]),
  color: z.string(),
  comfy: z.boolean(),
  adjustable: z.boolean()
});
var soundSystemSchema = object({
  radioSupport: z.number(),
  bluetoothSupport: z.boolean(),
  cdSupport: z.boolean(),
  casetteSupport: z.boolean(),
  usbSupport: z.boolean()
});
var automaticGearSystemSchema = object({
  planetary: z.boolean(),
  numGears: z.number()
});
var manualGearSystemSchema = object({
  numGears: z.number(),
  hasReverse: z.literal(true)
});
var engineSchema = object({
  power: z.number(),
  cylinders: z.number(),
  fuelType: z.union([z.literal("diesel"), z.literal("bensin")]),
  gearType: z.union([automaticGearSystemSchema, manualGearSystemSchema])
});
var wheelSchema = object({
  branch: z.union([
    z.literal("continental"),
    z.literal("hankook"),
    z.literal("goodyear"),
    z.literal("michelin")
  ]),
  diameter: z.number(),
  color: z.string(),
  punctureSafe: z.boolean()
});
var carSchema = object({
  brand: z.string(),
  weight: z.number(),
  productionYear: z.number(),
  engine: engineSchema,
  seats: z.array(seatSchema),
  wheels: z.tuple([wheelSchema, wheelSchema, wheelSchema, wheelSchema]),
  soundSystem: soundSystemSchema
});
var bikeSchema = object({
  brand: z.string(),
  color: z.string()
});
var personSchema = object({
  name: z.string(),
  age: z.number(),
  address: z.string(),
  phone: z.string(),
  car: carSchema.optional(),
  bike: bikeSchema.optional()
});
var printerSchema = object({
  brand: z.string(),
  format: z.union([z.literal("a4"), z.literal("a5")]),
  capacity: z.number()
});
var companySchema = object({
  ceo: personSchema,
  cfo: personSchema.optional(),
  employees: z.array(personSchema),
  printers: z.array(printerSchema),
  cars: z.array(carSchema)
});
var parentCompanySchema = object({
  mainCompany: companySchema,
  subCompanies: z.array(companySchema)
});
var flagSchema = object({
  colors: z.array(z.string()),
  orientation: z.string()
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
  countries: z.array(countrySchema),
  location: z.string(),
  area: z.number(),
  totalPopulation: z.number()
});
var moonSchema = object({
  color: z.string(),
  weight: z.number(),
  distance: z.number()
});
var planetSchema = object({
  continents: z.array(continentSchema),
  moons: z.array(moonSchema)
});
var sunSchema = object({
  diameter: z.number()
});
var solarSystemSchema = object({
  planets: z.array(planetSchema),
  sun: sunSchema,
  flyingTesla: carSchema
});
var galaxySchema = object({
  systems: z.array(solarSystemSchema)
});
export {
  galaxySchema
};
