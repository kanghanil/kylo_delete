// Hook to avoid caching
var systemLocate = System.locate;
System.locate = function (load) {
    return Promise.resolve(systemLocate.call(this, load)).then(function (address) {
        return address + "?ver=0.10.1-SNAPSHOT"
    });
};

// Configure dependencies
System.config({
    baseURL: "js",
    defaultJSExtensions: true,
    paths: {
        "angular-material-icons":"vendor/angular-material-icons/angular-material-icons",
        "app":"app",
        "bower:": "../bower_components/",
        "cardLayout":"common/card-layout/card-layout",
        "codemirror": "../bower_components/codemirror/lib/codemirror",
        "codemirror/addon/": "../bower_components/codemirror/addon/",
        "codemirror/mode/": "../bower_components/codemirror/mode/",
        "common/module-name": "common/module-name",
        "dirPagination":"vendor/dirPagination/dirPagination",
        "kylo-common":"common/module-require",
        "kylo-common-module":"common/module",
        "kylo-feedmgr":"feed-mgr/module-require",
        "kylo-feedmgr-module":"feed-mgr/module",
        "kylo-opsmgr":"ops-mgr/module-require",
        "kylo-opsmgr-module":"ops-mgr/module",
        "kylo-services":"services/module-require",
        "kylo-services-module":"services/module",
        "kylo-side-nav":"side-nav/module-require",
        "kylo-side-nav-module":"side-nav/module",
        "kylo-ui-codemirror":"codemirror-require/module",
        "kyloTimer":"common/timer/kylo-timer",
        "ment-io":"vendor/ment.io/mentio",
        "npm:": "../node_modules/",
        "ng-text-truncate":"vendor/ng-text-truncate/ng-text-truncate",
        "routes": "routes",
        "services/module-name":"services/module-name",
        "svg-morpheus":"../bower_components/svg-morpheus/compile/unminified/svg-morpheus",
        "underscore":"../bower_components/underscore/underscore-min",
        "vis":"../bower_components/vis/dist/vis.min",
        "tmh.dynamicLocale": "../bower_components/angular-dynamic-locale/dist/tmhDynamicLocale.min",
        "pascalprecht.translate":"../bower_components/angular-translate/angular-translate",
        "angular-translate-loader-static-files": "../bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
        "angular-translate-storage-local": "../bower_components/angular-translate-storage-local/angular-translate-storage-local.min.js",
        "angular-translate-handler-log": "../bower_components/angular-translate-handler-log/angular-translate-handler-log.min.js",
        "angular-translate-storage-cookie": "../bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js",
        "angular-cookies": "../bower_components/angular-cookies/angular-cookies.min.js"
    },
    map: {
        '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min',
        '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.min',
        '@angular/cdk': 'npm:@angular/cdk/bundles/cdk.umd.min',
        '@angular/cdk/a11y':'npm:@angular/cdk/bundles/cdk-a11y.umd.min',
        '@angular/cdk/accordion':'npm:@angular/cdk/bundles/cdk-accordion.umd.min',
        '@angular/cdk/bidi':'npm:@angular/cdk/bundles/cdk-bidi.umd.min',
        '@angular/cdk/coercion':'npm:@angular/cdk/bundles/cdk-coercion.umd.min',
        '@angular/cdk/collections':'npm:@angular/cdk/bundles/cdk-collections.umd.min',
        '@angular/cdk/keycodes':'npm:@angular/cdk/bundles/cdk-keycodes.umd.min',
        '@angular/cdk/layout':'npm:@angular/cdk/bundles/cdk-layout.umd.min',
        '@angular/cdk/observers':'npm:@angular/cdk/bundles/cdk-observers.umd.min',
        '@angular/cdk/overlay':'npm:@angular/cdk/bundles/cdk-overlay.umd.min',
        '@angular/cdk/platform':'npm:@angular/cdk/bundles/cdk-platform.umd.min',
        '@angular/cdk/portal':'npm:@angular/cdk/bundles/cdk-portal.umd.min',
        '@angular/cdk/scrolling':'npm:@angular/cdk/bundles/cdk-scrolling.umd.min',
        '@angular/cdk/stepper':'npm:@angular/cdk/bundles/cdk-stepper.umd.min',
        '@angular/cdk/table':'npm:@angular/cdk/bundles/cdk-table.umd.min',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.min',
        '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.min',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.min',
        '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
        '@angular/flex-layout/core': 'npm:@angular/flex-layout/bundles/flex-layout-core.umd.js',
        '@angular/flex-layout/extended': 'npm:@angular/flex-layout/bundles/flex-layout-extended.umd.js',
        '@angular/flex-layout/flex': 'npm:@angular/flex-layout/bundles/flex-layout-flex.umd.js',
        '@angular/flex-layout/server': 'npm:@angular/flex-layout/bundles/flex-layout-server.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min',
        '@angular/material/autocomplete': 'npm:@angular/material/bundles/material-autocomplete.umd.min',
        '@angular/material/button': 'npm:@angular/material/bundles/material-button.umd.min',
        '@angular/material/button-toggle': 'npm:@angular/material/bundles/material-button-toggle.umd.min',
        '@angular/material/card': 'npm:@angular/material/bundles/material-card.umd.min',
        '@angular/material/checkbox': 'npm:@angular/material/bundles/material-checkbox.umd.min',
        '@angular/material/chips': 'npm:@angular/material/bundles/material-chips.umd.min',
        '@angular/material/core': 'npm:@angular/material/bundles/material-core.umd.min',
        '@angular/material/datepicker': 'npm:@angular/material/bundles/material-datepicker.umd.min',
        '@angular/material/dialog': 'npm:@angular/material/bundles/material-dialog.umd.min',
        '@angular/material/divider': 'npm:@angular/material/bundles/material-divider.umd.min',
        '@angular/material/expansion': 'npm:@angular/material/bundles/material-expansion.umd.min',
        '@angular/material/form-field': 'npm:@angular/material/bundles/material-form-field.umd.min',
        '@angular/material/grid-list': 'npm:@angular/material/bundles/material-grid-list.umd.min',
        '@angular/material/icon': 'npm:@angular/material/bundles/material-icon.umd.min',
        '@angular/material/input': 'npm:@angular/material/bundles/material-input.umd.min',
        '@angular/material/list': 'npm:@angular/material/bundles/material-list.umd.min',
        '@angular/material/menu': 'npm:@angular/material/bundles/material-menu.umd.min',
        '@angular/material/paginator': 'npm:@angular/material/bundles/material-paginator.umd.min',
        '@angular/material/progress-bar': 'npm:@angular/material/bundles/material-progress-bar.umd.min',
        '@angular/material/progress-spinner': 'npm:@angular/material/bundles/material-progress-spinner.umd.min',
        '@angular/material/radio': 'npm:@angular/material/bundles/material-radio.umd.min',
        '@angular/material/select': 'npm:@angular/material/bundles/material-select.umd.min',
        '@angular/material/sidenav': 'npm:@angular/material/bundles/material-sidenav.umd.min',
        '@angular/material/slide-toggle': 'npm:@angular/material/bundles/material-slide-toggle.umd.min',
        '@angular/material/slider': 'npm:@angular/material/bundles/material-slider.umd.min',
        '@angular/material/snack-bar': 'npm:@angular/material/bundles/material-snack-bar.umd.min',
        '@angular/material/sort': 'npm:@angular/material/bundles/material-sort.umd.min',
        '@angular/material/stepper': 'npm:@angular/material/bundles/material-stepper.umd.min',
        '@angular/material/table': 'npm:@angular/material/bundles/material-table.umd.min',
        '@angular/material/tabs': 'npm:@angular/material/bundles/material-tabs.umd.min',
        '@angular/material/toolbar': 'npm:@angular/material/bundles/material-toolbar.umd.min',
        '@angular/material/tooltip': 'npm:@angular/material/bundles/material-tooltip.umd.min',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min',
        '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.min',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.min',
        '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.min',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.min',
        '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.min',
        '@covalent/core/chips': 'npm:@covalent/core/bundles/covalent-core-chips.umd.min',
        '@covalent/core/common': 'npm:@covalent/core/bundles/covalent-core-common.umd.min',
        '@covalent/core/data-table': 'npm:@covalent/core/bundles/covalent-core-data-table.umd.min',
        '@covalent/core/dialogs': 'npm:@covalent/core/bundles/covalent-core-dialogs.umd.min',
        '@covalent/core/expansion-panel': 'npm:@covalent/core/bundles/covalent-core-expansion-panel.umd.min',
        '@covalent/core/file': 'npm:@covalent/core/bundles/covalent-core-file.umd.min',
        '@covalent/core/json-formatter': 'npm:@covalent/core/bundles/covalent-core-json-formatter.umd.min',
        '@covalent/core/layout': 'npm:@covalent/core/bundles/covalent-core-layout.umd.min',
        '@covalent/core/loading': 'npm:@covalent/core/bundles/covalent-core-loading.umd.min',
        '@covalent/core/media': 'npm:@covalent/core/bundles/covalent-core-media.umd.min',
        '@covalent/core/menu': 'npm:@covalent/core/bundles/covalent-core-menu.umd.min',
        '@covalent/core/message': 'npm:@covalent/core/bundles/covalent-core-message.umd.min',
        '@covalent/core/notifications': 'npm:@covalent/core/bundles/covalent-core-notifications.umd.min',
        '@covalent/core/paging': 'npm:@covalent/core/bundles/covalent-core-paging.umd.min',
        '@covalent/core/search': 'npm:@covalent/core/bundles/covalent-core-search.umd.min',
        '@covalent/core/steps': 'npm:@covalent/core/bundles/covalent-core-steps.umd.min',
        '@covalent/core/virtual-scroll': 'npm:@covalent/core/bundles/covalent-core-virtual-scroll.umd.min',
        '@covalent/dynamic-forms': 'npm:@covalent/dynamic-forms/bundles/covalent-dynamic-forms.umd',
        "@kylo/feed": "../lib/feed/index",
        '@kylo/wrangler': 'feed-mgr/visual-query/wrangler/index',
        '@kylo/wrangler/api': 'feed-mgr/visual-query/wrangler/api/index',
        '@ngx-translate/core': 'npm:@ngx-translate/core/bundles/core.umd.min',
        '@ngx-translate/http-loader': 'npm:@ngx-translate/http-loader/bundles/http-loader.umd',
        '@uirouter/angular': 'npm:@uirouter/angular/_bundles/ui-router-ng2',
        '@uirouter/angular-hybrid': 'npm:@uirouter/angular-hybrid/_bundles/ui-router-angular-hybrid',
        '@uirouter/angularjs': 'npm:@uirouter/angularjs/release/angular-ui-router',
        '@uirouter/core': 'npm:@uirouter/core/_bundles/ui-router-core',
        '@uirouter/rx': 'npm:@uirouter/rx/_bundles/ui-router-rx',
        "angular":"bower:angular/angular.min",
        "angular-drag-and-drop-lists":"bower:angular-drag-and-drop-lists/angular-drag-and-drop-lists.min",
        "angular-material-data-table":"bower:angular-material-data-table/dist/md-data-table.min",
        "angular-material-expansion-panel":"bower:angular-material-expansion-panel/dist/md-expansion-panel.min",
        "angular-nvd3":"bower:angular-nvd3/dist/angular-nvd3.min",
        "angular-sanitize":"bower:angular-sanitize/angular-sanitize.min",
        "angular-ui-codemirror":"bower:angular-ui-codemirror/ui-codemirror.min",
        "angular-ui-grid":"bower:angular-ui-grid/ui-grid.min",
        "angular-visjs":"bower:angular-visjs/angular-vis",
        "angularAnimate":"bower:angular-animate/angular-animate.min",
        "angularAria":"bower:angular-aria/angular-aria.min",
        "angularLocalStorage": "bower:angularLocalStorage/dist/angularLocalStorage.min",
        "angularMaterial":"bower:angular-material/angular-material.min",
        "angularMessages":"bower:angular-messages/angular-messages.min",
        "c3":"bower:c3/c3.min",
        "d3":"bower:d3/d3.min",
        "draggabilly":"bower:draggabilly/dist/draggabilly.pkgd.min",
        "fattable": "bower:fattable/fattable",
        "gsap": "bower:gsap/src/uncompressed/TweenMax",
        "jquery":"bower:jquery/dist/jquery.min",
        "jquery-ui":"bower:jquery-ui/jquery-ui.min",
        "lz-string": "bower:lz-string/libs/lz-string.min",
        "moment":"bower:moment/min/moment.min",
        'ng-fx':"bower:ngFx/dist/ngFx.min",
        "ng2-codemirror": "npm:ng2-codemirror/lib/index",
        "ng2-nvd3": "npm:ng2-nvd3/build/index",
        "nvd3": "bower:nvd3/build/nv.d3.min",
        "ocLazyLoad":"bower:oclazyload/dist/ocLazyLoad.require",
        "pivottable": "bower:pivottable/dist/pivot.min",
        "pivottable-c3-renderers":"bower:pivottable/dist/c3_renderers.min",
        "requirejs": "bower:requirejs/require",
        'rxjs': 'npm:rxjs',
        "svg-morpheus":"bower:svg-morpheus/compile/unminified/svg-morpheus",
        'tslib': 'npm:tslib/tslib',
        "ui-grid": "angular-ui-grid",
        "underscore":"bower:underscore/underscore-min",
        "vis":"bower:vis/dist/vis.min",
        "mdPickers":"bower:mdPickers/dist/mdPickers.min",
        "ngx-drag-and-drop-lists":"npm:ngx-drag-and-drop-lists/bundles/ngx-drag-and-drop-lists.umd.min"
    },
    meta: {
        "@angular/core": {deps:["angular"]},
        "angular": {deps:["jquery"],exports: "angular"},
        'angularAria': ['angular'],
        'angularMessages': ['angular'],
        'angularAnimate': ['angular'],
        'angularMaterial': ['angular','angularAnimate','angularAria','angularMessages'],
        'angular-material-expansion-panel':['angular'],
        'angular-material-icons':['angular'],
        'angular-material-data-table':['angular'],
        "angular-nvd3":['angular','nvd3'],
        "angular-sanitize":["angular"],
        'angular-ui-grid':['angular','angularAnimate'],
        'angular-ui-codemirror':['angular','codemirror'],
        'angular-visjs':['angular','vis'],
        "codemirror-pig": ["codemirror"],
        "codemirror-properties":["codemirror"],
        "codemirror-velocity":["codemirror"],
        "codemirror-python":["codemirror"],
        "codemirror-xml":["codemirror"],
        "codemirror-shell":["codemirror"],
        "codemirror-javascript":["codemirror"],
        "codemirror-sql":["codemirror"],
        "codemirror-show-hint":["codemirror"],
        "codemirror-sql-hint":["codemirror"],
        "codemirror-xml-hint":["codemirror"],
        "codemirror-groovy":["codemirror"],
        "codemirror-dialog":["codemirror"],
        'd3':{exports:'d3'},
        'dirPagination':['angular'],
        "jquery-ui":["jquery"],
        'ocLazyLoad':['angular'],
        'kylo-services-module':{deps:['angular','jquery']},
        'kylo-services':{deps:['angular','kylo-services-module','jquery']},
        'kylo-common-module':{deps:['angular','jquery']},
        'kylo-common':{deps:['angular','kylo-services','kylo-common-module','jquery','angular-material-icons'], exports:'kylo-common', format:"amd"},
        'kylo-feedmgr-module':{deps:['angular','jquery']},
        'kylo-feedmgr':{deps:['angular','kylo-services','kylo-common','kylo-feedmgr-module']},
        'kylo-opsmgr-module':{deps:['angular','jquery']},
        'kylo-opsmgr':{deps:['angular','kylo-services','kylo-common','kylo-opsmgr-module']},
        'kylo-side-nav-module':{deps:['angular','jquery']},
        'kylo-side-nav':{deps:['angular','kylo-services','jquery','angular-material-icons','kylo-side-nav-module'], exports:'kylo-side-nav', format:"amd"},
        'ment-io':['angular'],
        "ng-fx":{deps:["gsap"]},
        "ng-text-truncate":["angular"],
        'nvd3':{deps:['d3'],exports:'nv'},
        'pivottable':{deps:['c3','jquery']},
        "pivottable-c3-renderers":{deps:['pivottable']},
        'vis':{exports:"vis"},
        'app':{deps:['ocLazyLoad','underscore','angularMaterial','jquery','angular-sanitize','ng-text-truncate'], exports:'app', format: "amd"},
        'routes':{deps:['app'], exports:'routes', format: "amd"}
    },
    packages: {
        'plugin': {
            meta: {
                './*.js': {
                    loader: "systemjs-angular-loader.js"
                }
            }
        }
    }
});