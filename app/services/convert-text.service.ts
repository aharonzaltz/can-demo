import {Injectable} from "@angular/core";
import {FIRST_COLOR, SECOND_COLOR} from "../config/app.config";
import {WordData} from "../interfaces/app.interfaces";

@Injectable({providedIn: 'root'})
export class ConvertTextService {

  private readonly syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;

  syllabify(words: string): WordData[] {
    return words.match(this.syllableRegex)?.map((item, index) => {
      const word = item.replace('\n', '')
      return {label: word, color: index % 2 === 0 ? FIRST_COLOR: SECOND_COLOR}
    }) || [];
  }
}
