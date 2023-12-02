export type Insulator = "pvc" | "xlpe" | "b2ca";

export type NumberOfStrands =
  | "2" /* 2 */
  | "3-wire" /* 3-wielożyłowy */
  | "3-core" /* 3-jednożyłowy */;

export type InstallationMethod =
  | "A1"
  | "A2"
  | "B1"
  | "B2"
  | "E"
  | "F"
  | "D1"
  | "D2";

export type TemperatureType = "air" | "ground";

export type ThermalResistivity = number;

export type Choice = {
  metal: "Cu" | "Al";
  choices: string[];
};

export type UserData = {
  metal?: "Cu" | "Al";
  type?: string;
  insulator?: Insulator;
  numberOfStrands?: NumberOfStrands;
  installationMethod?: InstallationMethod;
  temperatureType?: TemperatureType;
  temperatureValue?: number;
  thermalResistivity?: ThermalResistivity;
};
