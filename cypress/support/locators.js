const locators = {

    HOME: {
        BTN_APPOINTMENT: "#btn-make-appointment",
        LOGIN: "#txt-username",
        PASSWORD: "#txt-password",
        BTN_LOGIN: "#btn-login",
        MSG_LOGIN_FAILED: ".text-danger"
    },

    APPOINTMENT: {
        FACILITY: "#combo_facility",
        CHECKBOX_READMISSION: ".checkbox-inline",
        FN_XP_HEALTHCARE_PROGRAM: program => `//label[@class='radio-inline' and contains(., '${program}')]`,
        VISIT_DATE: "#txt_visit_date",
        DATEPICKER: ".datepicker",
        COMMENT: "#txt_comment",
        BTN_BOOK_APPOINTMENT: "#btn-book-appointment"
    },

    MENU: {
        TOGGLE: "#menu-toggle",
        FN_XP_DYNAMIC: menu => `//nav[@id='sidebar-wrapper']//li[contains(., '${menu}')]`
    },

    TITLE: "h2"
}

export default locators