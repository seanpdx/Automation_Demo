import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';

export class duckDuckGoPo {

    static getSearchBar(): ElementFinder {
        return element(by.id('search_form_input_homepage'));
    }

}
