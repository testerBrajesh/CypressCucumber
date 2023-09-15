Feature: newtours validation


    Background:
        Given Open_the_application
    @smoke @sanity
    Scenario: Home  Page

        When I_log_in_as_following

            | userName | passWord |
            | mercury  | mercury  |
        And Submit_button
        Then Verify_titile_'Login: Mercury Tours'
    @regression
    Scenario: Verify my titile

        Given Open_the_application
        When I_log_in_as_following

            | userName | passWord |
            | mercury  | mercury  |
        And Submit_button
        Then Verify_titile_'Login: Mercury Tours'
