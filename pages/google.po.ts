import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';

export class googlePo {

    static getSearchBar(): ElementFinder {
        return element(by.name('q'));
    }

    static getSearchBtn(): ElementFinder {
        return element(by.name('btnK'));
    }

}