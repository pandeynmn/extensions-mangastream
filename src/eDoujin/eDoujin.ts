/* eslint-disable linebreak-style */
import {
    LanguageCode,
    SourceInfo,
    TagType,
    ContentRating
} from 'paperback-extensions-common'

import {
    MangaStream,
    getExportVersion
} from '../MangaStream'

const EDOUJIN_DOMAIN = 'https://edoujin.net'

export const eDoujinInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'eDoujin',
    description: 'Extension that pulls manga from eDoujin',
    author: 'Netsky',
    authorWebsite: 'http://github.com/TheNetsky',
    icon: 'icon.png',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: EDOUJIN_DOMAIN,
    sourceTags: [
        {
            text: '18+',
            type: TagType.YELLOW
        }
    ]
}

export class eDoujin extends MangaStream {
    //FOR ALL THE SELECTIONS, PLEASE CHECK THE MangaSteam.ts FILE!!!

    baseUrl: string = EDOUJIN_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH

    //----MANGA DETAILS SELECTORS
    /*
    If a website uses different names/words for the status below, change them to these.
    These must also be changed id a different language is used!
    Don't worry, these are case insensitive.
    */

    //manga_StatusTypes: object = { 
    //    ONGOING: "ongoing",
    //    COMPLETED: "completed"
    //}

    //----HOMESCREEN SELECTORS
    //Disabling some of these will cause some Home-Page tests to fail, edit these test files to match the setting.
    //Always be sure to test this in the app!

    override homescreen_PopularToday_enabled = true

    override homescreen_LatestUpdate_enabled = true
    override homescreen_LatestUpdate_selector_item = 'div.bsx'

    override homescreen_NewManga_enabled = false

    override homescreen_TopAllTime_enabled = false
    override homescreen_TopMonthly_enabled = false
    override homescreen_TopWeekly_enabled = false

    /*
    ----TAG SELECTORS
    PRESET 1 (default): Genres are on homepage ex. https://mangagenki.com/
    tags_SubdirectoryPathName: string = ""
    tags_selector_box: string = "ul.genre"
    tags_selector_item: string = "li"
    tags_selector_label: string = ""

    PRESET 2: with /genre/ subdirectory ex. https://mangadark.com/genres/
    tags_SubdirectoryPathName: string = "/genres/"
    tags_selector_box: string = "ul.genre"
    tags_selector_item: string = "li"
    tags_selector_label: string = "span"
    */

    override tags_SubdirectoryPathName = '/genres/'
    override tags_selector_box = 'ul.taxindex'
    override tags_selector_item = 'li'
    override tags_selector_label = 'span'

}
