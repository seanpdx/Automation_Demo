import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';
import { googlePo } from '../pages/google.po';
import { duckDuckGoPo } from '../pages/duckduckgo.po';
import { bingPo } from '../pages/bing.po' ;

export  class searchEngineFactory {

    static getSearchBar(searchEngine: string): ElementFinder {
        
        switch(searchEngine){
            case 'Google': {
                return googlePo.getSearchBar();
                break;
            }
            case 'DuckDuckGo': {
                return duckDuckGoPo.getSearchBar();
                break;
            }
            case 'Bing': {
                return bingPo.getSearchBar();
                break;
            }
            default: {
                break;
            }
        }
    }
}

