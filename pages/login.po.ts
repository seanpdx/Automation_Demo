import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';

export class loginPos {
    static getSpanElement(text: string): ElementArrayFinder {
        return element.all(by.cssContainingText('span', text));
    }

    static getLoginRedirectBtn(): ElementFinder {
        return element(by.className('btn btn--primary button-big u-1/1 fontsize18'));
    }

    static getLoginBtn(): ElementFinder {
        return element(by.className('login'));
    }

    static getUserNameField(): ElementFinder {
        return element(by.name('username'));
    }

    static getPasswordField(): ElementFinder {
        return element(by.name('password'));
    }

    static getMyDashboardHeader(): ElementFinder {
        return element(by.className('logo-brand-txt'));
    }




}