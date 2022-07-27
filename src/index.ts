import axios from "axios";
import { Profile, Gender, Language } from "./types";

export default class Client {
  language: Language;
  gender: Gender;

  /**
   * Creates a client with a default language and gender.
   * @param language - The language the data of the generated profiles will be in.
   * @param gender -  The gender of the generated profiles.
   */
  constructor(language: Language = "random", gender: Gender = "random") {
    this.language = language;
    this.gender = gender;
  }

  /**
   * Builds the namefake.com API URL so that generated profiles match the specified language and gender.
   * @param language - The language the data of the generated profile will be in.
   * @param gender - The gender of the generated profile.
   * @returns The namefake.com API URL that returns the profile data.
   */
  private buildURL = (language: Language, gender: Gender) =>
    `https://api.namefake.com/${language}/${gender}/`;

  /**
   * Sets the language so that all generated profiles have data in the specified language.
   * @param language - The language the data of the generated profiles will be in.
   */
  setLanguage = (language: Language) => {
    this.language = language;
  };

  /**
   * Sets the gender so that all generated profiles are of the specified gender.
   * @param gender - The gender of the profiles that will be generated.
   */
  setGender = (gender: Gender) => {
    this.gender = gender;
  };

  /**
   * Generates a fake profile
   * @param [language] - The language the data of the generated profile will be in. It is defaulted to the client's language.
   * @param [gender] - The gender of the generated profile. It is defaulted to the client's gender.
   * @returns The data of the generated profile
   */
  generate = async (
    language: Language = this.language,
    gender: Gender = this.gender
  ) =>
    await axios
      .get<Profile>(this.buildURL(language, gender))
      .then(({ data }) => data);
}
