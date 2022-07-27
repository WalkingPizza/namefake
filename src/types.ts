export type Gender = "random" | "male" | "female";

export type Language =
  | "random"
  | "arabic-jordan"
  | "bulgarian-bulgaria"
  | "bengali-bangladesh"
  | "czech-czech-republic"
  | "danish-denmark"
  | "german-austria"
  | "german_germany"
  | "greek-greece"
  | "english-australia"
  | "english-canada"
  | "english-united-kingdom"
  | "english-new-zealand"
  | "english-philippines"
  | "english-uganda"
  | "english-united-states"
  | "english-south-africa"
  | "spanish-argentina"
  | "spanish-spain"
  | "spanish-peru"
  | "spanish-venezuela"
  | "persian_Iran"
  | "finnish-finland"
  | "french-belgium"
  | "french-canada"
  | "french-france"
  | "hungarian-hungary"
  | "armenian-armenia"
  | "indonesian-indonesia"
  | "icelandic-iceland"
  | "italian-italy"
  | "japanese-japan"
  | "georgian-georgia"
  | "kazakh-kazakhstan"
  | "korean-south-korea"
  | "latvian-latvia"
  | "montenegro-montenegrin"
  | "nepali-nepal"
  | "dutch-belgium"
  | "dutch-netherlands"
  | "norwegian-norway"
  | "polish-poland"
  | "portuguese-brazil"
  | "portuguese-portugal"
  | "romanian-moldova"
  | "romanian-romania"
  | "russian-russia"
  | "slovak-slovakia"
  | "slovenian-slovenia"
  | "serbian-cyrillic-serbia"
  | "serbian-latin-serbia"
  | "serbian-serbia"
  | "swedish-sweden"
  | "turkish-turkey"
  | "ukrainian-ukraine"
  | "vietnamese-vietnam"
  | "chinese-china"
  | "chinese-taiwan";

export interface Profile {
  /** The fake person's full name */
  name: string;
  /** The fake person's address */
  address: string;
  /** The fake person's latitute */
  latitute: string;
  /** The fake person's longitude */
  longitude: string;
  /** The fake person's maiden name */
  maiden_name: string;
  /** The fake person's birthday in YYYY-MM-DD format */
  birth_data: string;
  /** The fake person's home phone */
  phone_h: string;
  /** The fake person's work phone */
  phone_w: string;
  /** The fake person's email username, hence the part of the address before the @ symbol*/
  email_u: string;
  /** The fake person's email domain, hence the part of the address after the @ symbol*/
  email_d: string;
  /** A random username for the fake person */
  username: string;
  /** A random password for the fake person */
  password: string;
  /** The fake person's website */
  domain: string;
  /** The fake person's user agent */
  useragent: string;
  /** The fake person's IP address */
  ipv4: string;
  /** The fake person's MAC address */
  macaddress: string;
  /** The fake person's credit card number */
  plasticcard: string;
  /** The fake person's credit card expiration date */
  cardexpir: string;
  /** A percentage value representing the fake person's bonus */
  bonus: string;
  /** The company the fake person works for */
  company: string;
  /** The fake person's favorite color */
  color: string;
  /** A random UUID for the fake person */
  uuid: string;
  /** The fake person's height */
  height: string;
  /** The fake person's weight */
  weight: string;
  /** The fake person's blood type */
  blood: string;
  /** The fake person's eye color */
  eye: string;
  /** The fake person's hai style and color */
  hair: string;
  /** The fake person's picture */
  pict: string;
  /** The namefake.com URL to view the fake person's profile */
  url: string;
  /** The sport the fake person plays */
  sport: string;
  /** The URL to perform an IP lookup of the fake person's IP */
  ipv4_url: string;
  /** The URL to check the fake person's inbox */
  email_url: string;
  /** The URL to perform a WHOIS check on the fake person's website */
  domain_url: string;
}
