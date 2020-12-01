import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';

export class bingPo {

    static getSearchBar(): ElementFinder {
        return element(by.id('sb_form_q'));
    }

    

}