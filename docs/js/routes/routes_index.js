var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"launch","pathMatch":"full"},{"path":"launch","loadChildren":"./launch/launch.module#LaunchPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/launch/launch.module.ts","module":"LaunchPageModule","children":[{"path":"","component":"LaunchPage"}],"kind":"module"}],"module":"LaunchPageModule"}]},{"path":"login","loadChildren":"./login/login.module#LoginPageModule","children":[{"kind":"module","children":[],"module":"LoginPageModule"}]},{"path":"tabs","loadChildren":"./tabs/tabs.module#TabsPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/tabs-routing.module.ts","module":"TabsPageRoutingModule","children":[{"path":"","component":"TabsPage","children":[{"path":"apps","children":[{"path":"","loadChildren":"./apps/apps.module#AppsPageModule","children":[{"kind":"module","children":[],"module":"AppsPageModule"}]},{"path":"data-entry","loadChildren":"./apps/data-entry/data-entry.module#DataEntryPageModule","children":[{"kind":"module","children":[],"module":"DataEntryPageModule"}]},{"path":"data-entry-form","loadChildren":"./apps/data-entry/pages/data-entry-form/data-entry-form.module#DataEntryFormPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/apps/data-entry/pages/data-entry-form/data-entry-form.module.ts","module":"DataEntryFormPageModule","children":[{"path":"","component":"DataEntryFormPage"}],"kind":"module"}],"module":"DataEntryFormPageModule"}]},{"path":"event-capture","loadChildren":"./apps/event-capture/event-capture.module#EventCapturePageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/apps/event-capture/event-capture.module.ts","module":"EventCapturePageModule","children":[{"path":"","component":"EventCapturePage"}],"kind":"module"}],"module":"EventCapturePageModule"}]},{"path":"tracker-capture","loadChildren":"./apps/tracker-capture/tracker-capture.module#TrackerCapturePageModule","children":[{"kind":"module","children":[],"module":"TrackerCapturePageModule"}]},{"path":"dashboard","loadChildren":"./apps/dashboard/dashboard.module#DashboardPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/apps/dashboard/dashboard.module.ts","module":"DashboardPageModule","children":[{"path":"","component":"DashboardPage"}],"kind":"module"}],"module":"DashboardPageModule"}]},{"path":"reports","loadChildren":"./apps/reports/reports.module#ReportsPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/apps/reports/reports.module.ts","module":"ReportsPageModule","children":[{"path":"","component":"ReportsPage"}],"kind":"module"}],"module":"ReportsPageModule"}]},{"path":"sync","loadChildren":"./apps/sync/sync.module#SyncPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/apps/sync/sync.module.ts","module":"SyncPageModule","children":[{"path":"","component":"SyncPage"}],"kind":"module"}],"module":"SyncPageModule"}]},{"path":"settings","loadChildren":"./apps/settings/settings.module#SettingsPageModule"}]},{"path":"accounts","children":[{"path":"","loadChildren":"./accounts/accounts.module#AccountsPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/accounts/accounts.module.ts","module":"AccountsPageModule","children":[{"path":"","component":"AccountsPage"}],"kind":"module"}],"module":"AccountsPageModule"}]},{"path":"profile","loadChildren":"./accounts/profile/profile.module#ProfilePageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/accounts/profile/profile.module.ts","module":"ProfilePageModule","children":[{"path":"","component":"ProfilePage"}],"kind":"module"}],"module":"ProfilePageModule"}]},{"path":"about","loadChildren":"./accounts/about/about.module#AboutPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/accounts/about/about.module.ts","module":"AboutPageModule","children":[{"path":"","component":"AboutPage"}],"kind":"module"}],"module":"AboutPageModule"}]},{"path":"help","loadChildren":"./accounts/help/help.module#HelpPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/accounts/help/help.module.ts","module":"HelpPageModule","children":[{"path":"","component":"HelpPage"}],"kind":"module"}],"module":"HelpPageModule"}]}]},{"path":"","redirectTo":"apps","pathMatch":"full"}]},{"path":"","redirectTo":"apps","pathMatch":"full"}],"kind":"module"}],"module":"TabsPageModule"}]}],"kind":"module"},{"name":"routes","filename":"src/app/modals/coordinate-selection/coordinate-selection.module.ts","module":"CoordinateSelectionPageModule","children":[{"path":"","component":"CoordinateSelectionPage"}],"kind":"module"},{"name":"routes","filename":"src/app/modals/local-instance-selection/local-instance-selection.module.ts","module":"LocalInstanceSelectionPageModule","children":[{"path":"","component":"LocalInstanceSelectionPage"}],"kind":"module"},{"name":"routes","filename":"src/app/modals/option-set-selection/option-set-selection.module.ts","module":"OptionSetSelectionPageModule","children":[{"path":"","component":"OptionSetSelectionPage"}],"kind":"module"},{"name":"routes","filename":"src/app/modals/organisation-unit-search/organisation-unit-search.module.ts","module":"OrganisationUnitSearchPageModule","children":[{"path":"","component":"OrganisationUnitSearchPage"}],"kind":"module"},{"name":"routes","filename":"src/app/modals/organisation-unit-selection/organisation-unit-selection.module.ts","module":"OrganisationUnitSelectionPageModule","children":[{"path":"","component":"OrganisationUnitSelectionPage"}],"kind":"module"},{"name":"routes","filename":"src/app/modals/period-selection/period-selection.module.ts","module":"PeriodSelectionPageModule","children":[{"path":"","component":"PeriodSelectionPage"}],"kind":"module"},{"name":"routes","filename":"src/app/tabs/apps/settings/settings.module.ts","module":"SettingsPageModule","children":[{"path":"","component":"SettingsPage"}],"kind":"module"},{"name":"routes","filename":"src/app/modals/translation-selection/translation-selection.module.ts","module":"TranslationSelectionPageModule","children":[{"path":"","component":"TranslationSelectionPage"}],"kind":"module"}]}