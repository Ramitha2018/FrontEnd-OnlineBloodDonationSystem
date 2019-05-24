export class User {

  private _email: string;
  private _key: string;
  private _fname: string;
  private _lname: string;
  private _NIC: string;
  private _Address: string;
  private _contact: number;
  private _firstsign: boolean;
  private _district: string;
  private _isAvailable: boolean;
  private _isHealthy: boolean;
  private _pastHealth: boolean;
  private _recentDonation: boolean;

  get fname(): string {
    return this._fname;
  }

  set fname(value: string) {
    this._fname = value;
  }


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get lname(): string {
    return this._lname;
  }

  set lname(value: string) {
    this._lname = value;
  }

  get NIC(): string {
    return this._NIC;
  }

  set NIC(value: string) {
    this._NIC = value;
  }

  get Address(): string {
    return this._Address;
  }

  set Address(value: string) {
    this._Address = value;
  }

  get contact(): number {
    return this._contact;
  }

  set contact(value: number) {
    this._contact = value;
  }

  get firstsign(): boolean {
    return this._firstsign;
  }

  set firstsign(value: boolean) {
    this._firstsign = value;
  }

  get district(): string {
    return this._district;
  }

  set district(value: string) {
    this._district = value;
  }

  get isAvailable(): boolean {
    return this._isAvailable;
  }

  set isAvailable(value: boolean) {
    this._isAvailable = value;
  }

  get isHealthy(): boolean {
    return this._isHealthy;
  }

  get pastHealth(): boolean {
    return this._pastHealth;
  }

  get recentDonation(): boolean {
    return this._recentDonation;
  }
  set isHealthy(value: boolean) {
    this._isHealthy = value;
  }

  set pastHealth(value: boolean) {
    this._pastHealth = value;
  }

  set recentDonation(value: boolean) {
    this._recentDonation = value;
  }
}
