import { z, ZodRawShape, baseObjectOutputType } from 'zod';
import { objectUtil } from 'zod/lib/helpers/util';
import { ZodObject, ZodTypeAny, baseObjectInputType } from 'zod/lib/types';

type ObjR<T extends ZodRawShape> = ZodObject<T, "strip", ZodTypeAny, {
    [k_1 in keyof objectUtil.addQuestionMarks<baseObjectOutputType<T>, {
        [k in keyof baseObjectOutputType<T>]: undefined extends baseObjectOutputType<T>[k] ? never : k;
    }[keyof T]>]: objectUtil.addQuestionMarks<baseObjectOutputType<T>, {
        [k in keyof baseObjectOutputType<T>]: undefined extends baseObjectOutputType<T>[k] ? never : k;
    }[keyof T]>[k_1];
}, {
    [k_2 in keyof baseObjectInputType<T>]: baseObjectInputType<T>[k_2];
}>;
declare const galaxySchema: ObjR<{
    systems: z.ZodArray<ObjR<{
        planets: z.ZodArray<ObjR<{
            continents: z.ZodArray<ObjR<{
                countries: z.ZodArray<ObjR<{
                    flag: ObjR<{
                        colors: z.ZodArray<z.ZodString, "many">;
                        orientation: z.ZodString;
                    }>;
                    departments: ObjR<{
                        justice: ObjR<{
                            ceo: ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>;
                            cfo: z.ZodOptional<ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>>;
                            employees: z.ZodArray<ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>, "many">;
                            printers: z.ZodArray<ObjR<{
                                brand: z.ZodString;
                                format: z.ZodUnion<[z.ZodLiteral<"a4">, z.ZodLiteral<"a5">]>;
                                capacity: z.ZodNumber;
                            }>, "many">;
                            cars: z.ZodArray<ObjR<{
                                brand: z.ZodString;
                                weight: z.ZodNumber;
                                productionYear: z.ZodNumber;
                                engine: ObjR<{
                                    power: z.ZodNumber;
                                    cylinders: z.ZodNumber;
                                    fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                    gearType: z.ZodUnion<[ObjR<{
                                        planetary: z.ZodBoolean;
                                        numGears: z.ZodNumber;
                                    }>, ObjR<{
                                        numGears: z.ZodNumber;
                                        hasReverse: z.ZodLiteral<true>;
                                    }>]>;
                                }>;
                                seats: z.ZodArray<ObjR<{
                                    heated: z.ZodBoolean;
                                    side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                    row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                    color: z.ZodString;
                                    comfy: z.ZodBoolean;
                                    adjustable: z.ZodBoolean;
                                }>, "many">;
                                wheels: z.ZodTuple<[ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>], null>;
                                soundSystem: ObjR<{
                                    radioSupport: z.ZodNumber;
                                    bluetoothSupport: z.ZodBoolean;
                                    cdSupport: z.ZodBoolean;
                                    casetteSupport: z.ZodBoolean;
                                    usbSupport: z.ZodBoolean;
                                }>;
                            }>, "many">;
                        }>;
                        rights: ObjR<{
                            ceo: ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>;
                            cfo: z.ZodOptional<ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>>;
                            employees: z.ZodArray<ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>, "many">;
                            printers: z.ZodArray<ObjR<{
                                brand: z.ZodString;
                                format: z.ZodUnion<[z.ZodLiteral<"a4">, z.ZodLiteral<"a5">]>;
                                capacity: z.ZodNumber;
                            }>, "many">;
                            cars: z.ZodArray<ObjR<{
                                brand: z.ZodString;
                                weight: z.ZodNumber;
                                productionYear: z.ZodNumber;
                                engine: ObjR<{
                                    power: z.ZodNumber;
                                    cylinders: z.ZodNumber;
                                    fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                    gearType: z.ZodUnion<[ObjR<{
                                        planetary: z.ZodBoolean;
                                        numGears: z.ZodNumber;
                                    }>, ObjR<{
                                        numGears: z.ZodNumber;
                                        hasReverse: z.ZodLiteral<true>;
                                    }>]>;
                                }>;
                                seats: z.ZodArray<ObjR<{
                                    heated: z.ZodBoolean;
                                    side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                    row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                    color: z.ZodString;
                                    comfy: z.ZodBoolean;
                                    adjustable: z.ZodBoolean;
                                }>, "many">;
                                wheels: z.ZodTuple<[ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>], null>;
                                soundSystem: ObjR<{
                                    radioSupport: z.ZodNumber;
                                    bluetoothSupport: z.ZodBoolean;
                                    cdSupport: z.ZodBoolean;
                                    casetteSupport: z.ZodBoolean;
                                    usbSupport: z.ZodBoolean;
                                }>;
                            }>, "many">;
                        }>;
                        healthcare: ObjR<{
                            ceo: ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>;
                            cfo: z.ZodOptional<ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>>;
                            employees: z.ZodArray<ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>, "many">;
                            printers: z.ZodArray<ObjR<{
                                brand: z.ZodString;
                                format: z.ZodUnion<[z.ZodLiteral<"a4">, z.ZodLiteral<"a5">]>;
                                capacity: z.ZodNumber;
                            }>, "many">;
                            cars: z.ZodArray<ObjR<{
                                brand: z.ZodString;
                                weight: z.ZodNumber;
                                productionYear: z.ZodNumber;
                                engine: ObjR<{
                                    power: z.ZodNumber;
                                    cylinders: z.ZodNumber;
                                    fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                    gearType: z.ZodUnion<[ObjR<{
                                        planetary: z.ZodBoolean;
                                        numGears: z.ZodNumber;
                                    }>, ObjR<{
                                        numGears: z.ZodNumber;
                                        hasReverse: z.ZodLiteral<true>;
                                    }>]>;
                                }>;
                                seats: z.ZodArray<ObjR<{
                                    heated: z.ZodBoolean;
                                    side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                    row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                    color: z.ZodString;
                                    comfy: z.ZodBoolean;
                                    adjustable: z.ZodBoolean;
                                }>, "many">;
                                wheels: z.ZodTuple<[ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>], null>;
                                soundSystem: ObjR<{
                                    radioSupport: z.ZodNumber;
                                    bluetoothSupport: z.ZodBoolean;
                                    cdSupport: z.ZodBoolean;
                                    casetteSupport: z.ZodBoolean;
                                    usbSupport: z.ZodBoolean;
                                }>;
                            }>, "many">;
                        }>;
                        education: ObjR<{
                            ceo: ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>;
                            cfo: z.ZodOptional<ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>>;
                            employees: z.ZodArray<ObjR<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: ObjR<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[ObjR<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, ObjR<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>]>;
                                    }>;
                                    seats: z.ZodArray<ObjR<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, "many">;
                                    wheels: z.ZodTuple<[ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, ObjR<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>], null>;
                                    soundSystem: ObjR<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>;
                                }>>;
                                bike: z.ZodOptional<ObjR<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>>;
                            }>, "many">;
                            printers: z.ZodArray<ObjR<{
                                brand: z.ZodString;
                                format: z.ZodUnion<[z.ZodLiteral<"a4">, z.ZodLiteral<"a5">]>;
                                capacity: z.ZodNumber;
                            }>, "many">;
                            cars: z.ZodArray<ObjR<{
                                brand: z.ZodString;
                                weight: z.ZodNumber;
                                productionYear: z.ZodNumber;
                                engine: ObjR<{
                                    power: z.ZodNumber;
                                    cylinders: z.ZodNumber;
                                    fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                    gearType: z.ZodUnion<[ObjR<{
                                        planetary: z.ZodBoolean;
                                        numGears: z.ZodNumber;
                                    }>, ObjR<{
                                        numGears: z.ZodNumber;
                                        hasReverse: z.ZodLiteral<true>;
                                    }>]>;
                                }>;
                                seats: z.ZodArray<ObjR<{
                                    heated: z.ZodBoolean;
                                    side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                    row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                    color: z.ZodString;
                                    comfy: z.ZodBoolean;
                                    adjustable: z.ZodBoolean;
                                }>, "many">;
                                wheels: z.ZodTuple<[ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, ObjR<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>], null>;
                                soundSystem: ObjR<{
                                    radioSupport: z.ZodNumber;
                                    bluetoothSupport: z.ZodBoolean;
                                    cdSupport: z.ZodBoolean;
                                    casetteSupport: z.ZodBoolean;
                                    usbSupport: z.ZodBoolean;
                                }>;
                            }>, "many">;
                        }>;
                    }>;
                }>, "many">;
                location: z.ZodString;
                area: z.ZodNumber;
                totalPopulation: z.ZodNumber;
            }>, "many">;
            moons: z.ZodArray<ObjR<{
                color: z.ZodString;
                weight: z.ZodNumber;
                distance: z.ZodNumber;
            }>, "many">;
        }>, "many">;
        sun: ObjR<{
            diameter: z.ZodNumber;
        }>;
        flyingTesla: ObjR<{
            brand: z.ZodString;
            weight: z.ZodNumber;
            productionYear: z.ZodNumber;
            engine: ObjR<{
                power: z.ZodNumber;
                cylinders: z.ZodNumber;
                fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                gearType: z.ZodUnion<[ObjR<{
                    planetary: z.ZodBoolean;
                    numGears: z.ZodNumber;
                }>, ObjR<{
                    numGears: z.ZodNumber;
                    hasReverse: z.ZodLiteral<true>;
                }>]>;
            }>;
            seats: z.ZodArray<ObjR<{
                heated: z.ZodBoolean;
                side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                color: z.ZodString;
                comfy: z.ZodBoolean;
                adjustable: z.ZodBoolean;
            }>, "many">;
            wheels: z.ZodTuple<[ObjR<{
                branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                diameter: z.ZodNumber;
                color: z.ZodString;
                punctureSafe: z.ZodBoolean;
            }>, ObjR<{
                branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                diameter: z.ZodNumber;
                color: z.ZodString;
                punctureSafe: z.ZodBoolean;
            }>, ObjR<{
                branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                diameter: z.ZodNumber;
                color: z.ZodString;
                punctureSafe: z.ZodBoolean;
            }>, ObjR<{
                branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                diameter: z.ZodNumber;
                color: z.ZodString;
                punctureSafe: z.ZodBoolean;
            }>], null>;
            soundSystem: ObjR<{
                radioSupport: z.ZodNumber;
                bluetoothSupport: z.ZodBoolean;
                cdSupport: z.ZodBoolean;
                casetteSupport: z.ZodBoolean;
                usbSupport: z.ZodBoolean;
            }>;
        }>;
    }>, "many">;
}>;

export { galaxySchema };
