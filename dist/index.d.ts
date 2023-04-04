import { z, baseObjectOutputType } from 'zod';

declare const galaxySchema: z.ZodType<baseObjectOutputType<{
    systems: z.ZodArray<z.ZodType<baseObjectOutputType<{
        planets: z.ZodArray<z.ZodType<baseObjectOutputType<{
            continents: z.ZodArray<z.ZodType<baseObjectOutputType<{
                countries: z.ZodArray<z.ZodType<baseObjectOutputType<{
                    flag: z.ZodType<baseObjectOutputType<{
                        colors: z.ZodArray<z.ZodString, "many">;
                        orientation: z.ZodString;
                    }>, z.ZodTypeDef, any>;
                    departments: z.ZodType<baseObjectOutputType<{
                        justice: z.ZodType<baseObjectOutputType<{
                            ceo: z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>;
                            cfo: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>>;
                            employees: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>, "many">;
                            printers: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                brand: z.ZodString;
                                format: z.ZodUnion<[z.ZodLiteral<"a4">, z.ZodLiteral<"a5">]>;
                                capacity: z.ZodNumber;
                            }>, z.ZodTypeDef, any>, "many">;
                            cars: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                brand: z.ZodString;
                                weight: z.ZodNumber;
                                productionYear: z.ZodNumber;
                                engine: z.ZodType<baseObjectOutputType<{
                                    power: z.ZodNumber;
                                    cylinders: z.ZodNumber;
                                    fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                    gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                        planetary: z.ZodBoolean;
                                        numGears: z.ZodNumber;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        numGears: z.ZodNumber;
                                        hasReverse: z.ZodLiteral<true>;
                                    }>, z.ZodTypeDef, any>]>;
                                }>, z.ZodTypeDef, any>;
                                seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                    heated: z.ZodBoolean;
                                    side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                    row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                    color: z.ZodString;
                                    comfy: z.ZodBoolean;
                                    adjustable: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, "many">;
                                wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>], null>;
                                soundSystem: z.ZodType<baseObjectOutputType<{
                                    radioSupport: z.ZodNumber;
                                    bluetoothSupport: z.ZodBoolean;
                                    cdSupport: z.ZodBoolean;
                                    casetteSupport: z.ZodBoolean;
                                    usbSupport: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>;
                            }>, z.ZodTypeDef, any>, "many">;
                        }>, z.ZodTypeDef, any>;
                        rights: z.ZodType<baseObjectOutputType<{
                            ceo: z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>;
                            cfo: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>>;
                            employees: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>, "many">;
                            printers: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                brand: z.ZodString;
                                format: z.ZodUnion<[z.ZodLiteral<"a4">, z.ZodLiteral<"a5">]>;
                                capacity: z.ZodNumber;
                            }>, z.ZodTypeDef, any>, "many">;
                            cars: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                brand: z.ZodString;
                                weight: z.ZodNumber;
                                productionYear: z.ZodNumber;
                                engine: z.ZodType<baseObjectOutputType<{
                                    power: z.ZodNumber;
                                    cylinders: z.ZodNumber;
                                    fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                    gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                        planetary: z.ZodBoolean;
                                        numGears: z.ZodNumber;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        numGears: z.ZodNumber;
                                        hasReverse: z.ZodLiteral<true>;
                                    }>, z.ZodTypeDef, any>]>;
                                }>, z.ZodTypeDef, any>;
                                seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                    heated: z.ZodBoolean;
                                    side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                    row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                    color: z.ZodString;
                                    comfy: z.ZodBoolean;
                                    adjustable: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, "many">;
                                wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>], null>;
                                soundSystem: z.ZodType<baseObjectOutputType<{
                                    radioSupport: z.ZodNumber;
                                    bluetoothSupport: z.ZodBoolean;
                                    cdSupport: z.ZodBoolean;
                                    casetteSupport: z.ZodBoolean;
                                    usbSupport: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>;
                            }>, z.ZodTypeDef, any>, "many">;
                        }>, z.ZodTypeDef, any>;
                        healthcare: z.ZodType<baseObjectOutputType<{
                            ceo: z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>;
                            cfo: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>>;
                            employees: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>, "many">;
                            printers: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                brand: z.ZodString;
                                format: z.ZodUnion<[z.ZodLiteral<"a4">, z.ZodLiteral<"a5">]>;
                                capacity: z.ZodNumber;
                            }>, z.ZodTypeDef, any>, "many">;
                            cars: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                brand: z.ZodString;
                                weight: z.ZodNumber;
                                productionYear: z.ZodNumber;
                                engine: z.ZodType<baseObjectOutputType<{
                                    power: z.ZodNumber;
                                    cylinders: z.ZodNumber;
                                    fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                    gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                        planetary: z.ZodBoolean;
                                        numGears: z.ZodNumber;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        numGears: z.ZodNumber;
                                        hasReverse: z.ZodLiteral<true>;
                                    }>, z.ZodTypeDef, any>]>;
                                }>, z.ZodTypeDef, any>;
                                seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                    heated: z.ZodBoolean;
                                    side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                    row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                    color: z.ZodString;
                                    comfy: z.ZodBoolean;
                                    adjustable: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, "many">;
                                wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>], null>;
                                soundSystem: z.ZodType<baseObjectOutputType<{
                                    radioSupport: z.ZodNumber;
                                    bluetoothSupport: z.ZodBoolean;
                                    cdSupport: z.ZodBoolean;
                                    casetteSupport: z.ZodBoolean;
                                    usbSupport: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>;
                            }>, z.ZodTypeDef, any>, "many">;
                        }>, z.ZodTypeDef, any>;
                        education: z.ZodType<baseObjectOutputType<{
                            ceo: z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>;
                            cfo: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>>;
                            employees: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                name: z.ZodString;
                                age: z.ZodNumber;
                                address: z.ZodString;
                                phone: z.ZodString;
                                car: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    weight: z.ZodNumber;
                                    productionYear: z.ZodNumber;
                                    engine: z.ZodType<baseObjectOutputType<{
                                        power: z.ZodNumber;
                                        cylinders: z.ZodNumber;
                                        fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                        gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                            planetary: z.ZodBoolean;
                                            numGears: z.ZodNumber;
                                        }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                            numGears: z.ZodNumber;
                                            hasReverse: z.ZodLiteral<true>;
                                        }>, z.ZodTypeDef, any>]>;
                                    }>, z.ZodTypeDef, any>;
                                    seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                        heated: z.ZodBoolean;
                                        side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                        row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                        color: z.ZodString;
                                        comfy: z.ZodBoolean;
                                        adjustable: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, "many">;
                                    wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                        diameter: z.ZodNumber;
                                        color: z.ZodString;
                                        punctureSafe: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>], null>;
                                    soundSystem: z.ZodType<baseObjectOutputType<{
                                        radioSupport: z.ZodNumber;
                                        bluetoothSupport: z.ZodBoolean;
                                        cdSupport: z.ZodBoolean;
                                        casetteSupport: z.ZodBoolean;
                                        usbSupport: z.ZodBoolean;
                                    }>, z.ZodTypeDef, any>;
                                }>, z.ZodTypeDef, any>>;
                                bike: z.ZodOptional<z.ZodType<baseObjectOutputType<{
                                    brand: z.ZodString;
                                    color: z.ZodString;
                                }>, z.ZodTypeDef, any>>;
                            }>, z.ZodTypeDef, any>, "many">;
                            printers: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                brand: z.ZodString;
                                format: z.ZodUnion<[z.ZodLiteral<"a4">, z.ZodLiteral<"a5">]>;
                                capacity: z.ZodNumber;
                            }>, z.ZodTypeDef, any>, "many">;
                            cars: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                brand: z.ZodString;
                                weight: z.ZodNumber;
                                productionYear: z.ZodNumber;
                                engine: z.ZodType<baseObjectOutputType<{
                                    power: z.ZodNumber;
                                    cylinders: z.ZodNumber;
                                    fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                                    gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                                        planetary: z.ZodBoolean;
                                        numGears: z.ZodNumber;
                                    }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                        numGears: z.ZodNumber;
                                        hasReverse: z.ZodLiteral<true>;
                                    }>, z.ZodTypeDef, any>]>;
                                }>, z.ZodTypeDef, any>;
                                seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                                    heated: z.ZodBoolean;
                                    side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                                    row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                                    color: z.ZodString;
                                    comfy: z.ZodBoolean;
                                    adjustable: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, "many">;
                                wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                                    branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                                    diameter: z.ZodNumber;
                                    color: z.ZodString;
                                    punctureSafe: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>], null>;
                                soundSystem: z.ZodType<baseObjectOutputType<{
                                    radioSupport: z.ZodNumber;
                                    bluetoothSupport: z.ZodBoolean;
                                    cdSupport: z.ZodBoolean;
                                    casetteSupport: z.ZodBoolean;
                                    usbSupport: z.ZodBoolean;
                                }>, z.ZodTypeDef, any>;
                            }>, z.ZodTypeDef, any>, "many">;
                        }>, z.ZodTypeDef, any>;
                    }>, z.ZodTypeDef, any>;
                }>, z.ZodTypeDef, any>, "many">;
                location: z.ZodString;
                area: z.ZodNumber;
                totalPopulation: z.ZodNumber;
            }>, z.ZodTypeDef, any>, "many">;
            moons: z.ZodArray<z.ZodType<baseObjectOutputType<{
                color: z.ZodString;
                weight: z.ZodNumber;
                distance: z.ZodNumber;
            }>, z.ZodTypeDef, any>, "many">;
        }>, z.ZodTypeDef, any>, "many">;
        sun: z.ZodType<baseObjectOutputType<{
            diameter: z.ZodNumber;
        }>, z.ZodTypeDef, any>;
        flyingTesla: z.ZodType<baseObjectOutputType<{
            brand: z.ZodString;
            weight: z.ZodNumber;
            productionYear: z.ZodNumber;
            engine: z.ZodType<baseObjectOutputType<{
                power: z.ZodNumber;
                cylinders: z.ZodNumber;
                fuelType: z.ZodUnion<[z.ZodLiteral<"diesel">, z.ZodLiteral<"bensin">]>;
                gearType: z.ZodUnion<[z.ZodType<baseObjectOutputType<{
                    planetary: z.ZodBoolean;
                    numGears: z.ZodNumber;
                }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                    numGears: z.ZodNumber;
                    hasReverse: z.ZodLiteral<true>;
                }>, z.ZodTypeDef, any>]>;
            }>, z.ZodTypeDef, any>;
            seats: z.ZodArray<z.ZodType<baseObjectOutputType<{
                heated: z.ZodBoolean;
                side: z.ZodUnion<[z.ZodLiteral<"left">, z.ZodLiteral<"right">, z.ZodLiteral<"center">]>;
                row: z.ZodUnion<[z.ZodLiteral<"1st">, z.ZodLiteral<"2th">, z.ZodLiteral<"3rd">]>;
                color: z.ZodString;
                comfy: z.ZodBoolean;
                adjustable: z.ZodBoolean;
            }>, z.ZodTypeDef, any>, "many">;
            wheels: z.ZodTuple<[z.ZodType<baseObjectOutputType<{
                branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                diameter: z.ZodNumber;
                color: z.ZodString;
                punctureSafe: z.ZodBoolean;
            }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                diameter: z.ZodNumber;
                color: z.ZodString;
                punctureSafe: z.ZodBoolean;
            }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                diameter: z.ZodNumber;
                color: z.ZodString;
                punctureSafe: z.ZodBoolean;
            }>, z.ZodTypeDef, any>, z.ZodType<baseObjectOutputType<{
                branch: z.ZodUnion<[z.ZodLiteral<"continental">, z.ZodLiteral<"hankook">, z.ZodLiteral<"goodyear">, z.ZodLiteral<"michelin">]>;
                diameter: z.ZodNumber;
                color: z.ZodString;
                punctureSafe: z.ZodBoolean;
            }>, z.ZodTypeDef, any>], null>;
            soundSystem: z.ZodType<baseObjectOutputType<{
                radioSupport: z.ZodNumber;
                bluetoothSupport: z.ZodBoolean;
                cdSupport: z.ZodBoolean;
                casetteSupport: z.ZodBoolean;
                usbSupport: z.ZodBoolean;
            }>, z.ZodTypeDef, any>;
        }>, z.ZodTypeDef, any>;
    }>, z.ZodTypeDef, any>, "many">;
}>, z.ZodTypeDef, any>;

export { galaxySchema };
