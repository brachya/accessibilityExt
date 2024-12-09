"use strict";
import { languages, labels } from "./global";

export const translate: Record<languages, Record<labels, string>> = {
  he: {
    closeText: "סגור",
    sideBarLabel: "הגדרת נגישות",
    accessibilityBtn: "כפתור נגישות",
    top: "ראש הדף",
    header: "חלק עליון",
    nav: "תפריט",
    main: "תוכן",
    h1: "כותרת ראשית",
    h2: "כותרת משנית",
    middle: "מרכז הדף",
    bottom: "תחתית הדף",
    moveHeaderText: "ניווט בדף",
    textBiggerLabel: "הגדלת גודל טקסט",
    textSmallerLabel: "הקטנת גודל טקסט",
    textResetLabel: "איפוס גודל טקסט",
    hyperText: "הדגשת קישורים",
    headerText: "הדגשת כותרות",
    colorBlindText: "שחור לבן",
    invertText: "כבדי ראיה",
    brightnessText: "בהירות גבוהה",
    blueLightText: "מסך כחול",
    warmColorsText: "צבעים חמים",
    coldColorsText: "צבעים קרים",
    focusBorderText: "הדגשה מיקום",
    fontChangerText: "שינוי פונט",
    pauseAnimateText: "עצירת אנימציות",
    speakerText: "הקראת מסך",
    statementBtnText: "הצהרת נגישות",
    statementText: `אתר זה רואה חשיבות רבה בהנגשתו לכלל האוכלוסייה ופועל כדי לאפשר לאנשים עם מוגבלות חוויית שימוש נוחה ונגישה בתכניו.
במסגרת מאמצי ההנגשה, האתר עובר התאמות ועומד בתקני הנגישות העדכניים ביותר. עם זאת, ייתכנו חלקים באתר או תכנים המוצעים על ידי גורמי צד שלישי, כגון סרטונים מוטמעים או קבצים חיצוניים, שאינם נגישים במלואם.
אנו שואפים לשפר את הנגישות באופן מתמיד ולהבטיח חוויית גלישה טובה לכל המשתמשים. במידה ונתקלתם בקושי או בבעיה בנגישות האתר, נשמח אם תפנו אלינו על מנת שנוכל לטפל בכך בהקדם האפשרי.`,
    guideText: `ALT+A לפתיחת וסגירת החלון נגישות`,
    developerText: "פותח על ידי ברכיה יצחק שושן.",
    noTextError: "אין טקסט",
  },
  en: {
    closeText: "close",
    sideBarLabel: "set accessibility",
    accessibilityBtn: "accessibility button",
    top: "top",
    header: "header",
    nav: "navigator",
    main: "main",
    h1: "main header",
    h2: "second header",
    middle: "middle",
    bottom: "bottom",
    moveHeaderText: "page navigation",
    textBiggerLabel: "increase text size",
    textSmallerLabel: "decrease text size",
    textResetLabel: "reset text size",
    hyperText: "bold hyper link",
    headerText: "bold headers",
    colorBlindText: "black & white",
    invertText: "visual liver",
    brightnessText: "high brightness",
    blueLightText: "blue screen",
    warmColorsText: "warm colors",
    coldColorsText: "cold colors",
    focusBorderText: "focus element",
    fontChangerText: "change font",
    pauseAnimateText: "pause animation",
    speakerText: "screen reader",
    statementBtnText: "accessibility statement",
    statementText: `This site sees great importance in its accessibility to the entire population and works to enable people with disabilities to have a comfortable and accessible experience using its contents.
As part of the accessibility efforts, the site undergoes adjustments and complies with the latest accessibility standards. However, there may be parts of the website or content offered by third parties, such as embedded videos or external files, that are not fully accessible.
We strive to constantly improve accessibility and ensure a good browsing experience for all users. If you encounter a difficulty or a problem with the site's accessibility, we would be happy if you contact us so that we can take care of it as soon as possible.`,
    guideText: "ALT+A for close or open accessibility menu.",
    developerText: "developed by Brachya itzhack shushan.",
    noTextError: "no text",
  },
};
