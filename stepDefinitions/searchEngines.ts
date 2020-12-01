import {searchEngineFactory} from '../pages/searchEngineFactory.po';
import { browser, ExpectedConditions, Key } from 'protractor';
const { expect } = require('chai');

export default function() {

    this.setDefaultTimeout(60 * 1000);
    

    this.Given(/^I can access the (.*) homepage at (.*)$/, (searchEngineName, URL, next) => {
        this.currentSearchEngine = searchEngineName;
        this.currentURL = URL;
        browser.get(URL).then(() => {
            next();
        });
    });

    this.When(/^I search "([^"]*)"$/, (searchTerm, next) => {
        // TODO: Thinking of adding an interface that standardizes how to access these search engines
        const searchField = searchEngineFactory.getSearchBar(this.currentSearchEngine);
        const expectedError = `${this.currentSearchEngine} search field not found`;
        const expectedConditions = ExpectedConditions.visibilityOf(searchField);
        const expectedTimeout = 10000;
    
        browser.wait(expectedConditions, expectedTimeout, expectedError).then(() => {
            searchField.sendKeys(searchTerm);
            searchField.sendKeys(Key.ENTER).then(() => next());
        });
    });







}