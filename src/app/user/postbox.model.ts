export interface Postbox {
  id: string;
  qrCode: string;
  requestForOpen: boolean;
  opened: boolean;
  heater: boolean;
  activationCode: string;
  owner: string;
}
