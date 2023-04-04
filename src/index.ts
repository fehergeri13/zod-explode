import { baseObjectOutputType, z, ZodRawShape, ZodType, ZodTypeDef } from "zod"

function object<T extends ZodRawShape>(shape: T) {
  return z.object(shape) as ZodType<baseObjectOutputType<T>, ZodTypeDef, any>;
}

const seatSchema = object({
  heated: z.boolean(),
  side: z.union([z.literal("left"), z.literal("right"), z.literal("center")]),
  row: z.union([z.literal("1st"), z.literal("2th"), z.literal("3rd")]),
  color: z.string(),
  comfy: z.boolean(),
  adjustable: z.boolean()
})

const soundSystemSchema = object({
  radioSupport: z.number(),
  bluetoothSupport: z.boolean(),
  cdSupport: z.boolean(),
  casetteSupport: z.boolean(),
  usbSupport: z.boolean()
})

const automaticGearSystemSchema = object({
  planetary: z.boolean(),
  numGears: z.number()
})

const manualGearSystemSchema = object({
  numGears: z.number(),
  hasReverse: z.literal(true)
})

const engineSchema = object({
  power: z.number(),
  cylinders: z.number(),
  fuelType: z.union([z.literal("diesel"), z.literal("bensin")]),
  gearType: z.union([automaticGearSystemSchema, manualGearSystemSchema])
})

const wheelSchema = object({
  branch: z.union([
    z.literal("continental"),
    z.literal("hankook"),
    z.literal("goodyear"),
    z.literal("michelin")
  ]),
  diameter: z.number(),
  color: z.string(),
  punctureSafe: z.boolean()
})

const carSchema = object({
  brand: z.string(),
  weight: z.number(),
  productionYear: z.number(),
  engine: engineSchema,
  seats: z.array(seatSchema),
  wheels: z.tuple([wheelSchema, wheelSchema, wheelSchema, wheelSchema]),
  soundSystem: soundSystemSchema
})

const bikeSchema = object({
  brand: z.string(),
  color: z.string()
})

const personSchema = object({
  name: z.string(),
  age: z.number(),
  address: z.string(),
  phone: z.string(),
  car: carSchema.optional(),
  bike: bikeSchema.optional()
})

const printerSchema = object({
  brand: z.string(),
  format: z.union([z.literal("a4"), z.literal("a5")]),
  capacity: z.number()
})

const companySchema = object({
  ceo: personSchema,
  cfo: personSchema.optional(),
  employees: z.array(personSchema),
  printers: z.array(printerSchema),
  cars: z.array(carSchema)
})

const parentCompanySchema = object({
  mainCompany: companySchema,
  subCompanies: z.array(companySchema)
})

const flagSchema = object({
  colors: z.array(z.string()),
  orientation: z.string()
})

const countrySchema = object({
  flag: flagSchema,
  departments: object({
    justice: companySchema,
    rights: companySchema,
    healthcare: companySchema,
    education: companySchema
  })
})

const continentSchema = object({
  countries: z.array(countrySchema),
  location: z.string(),
  area: z.number(),
  totalPopulation: z.number()
})

const moonSchema = object({
  color: z.string(),
  weight: z.number(),
  distance: z.number()
})

const planetSchema = object({
  continents: z.array(continentSchema),
  moons: z.array(moonSchema)
})

const sunSchema = object({
  diameter: z.number()
})

const solarSystemSchema = object({
  planets: z.array(planetSchema),
  sun: sunSchema,
  flyingTesla: carSchema
})

export const galaxySchema = object({
  systems: z.array(solarSystemSchema)
})
