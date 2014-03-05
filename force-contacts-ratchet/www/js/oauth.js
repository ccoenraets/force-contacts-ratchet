var oauth = (function () {

    "use strict";

    var apiVersion = "v29.0", // The version of the REST API you wish to use in your app.
        forceClient,
        oauthPlugin;

    function init(successHandler, errorHandler) {

        oauthPlugin = cordova.require("salesforce/plugin/oauth");

        // Call getAuthCredentials to get the initial session credentials
        oauthPlugin.getAuthCredentials(
            function (creds) {
                oauthWindowCallback(creds);
                successHandler(forceClient);
            },
            function (error) {
                errorHandler(error);
            }
        );

        // Register to receive notifications when autoRefreshOnForeground refreshes the sfdc session
        document.addEventListener("salesforceSessionRefresh", salesforceSessionRefreshed, false);

    }

    function oauthWindowCallback(creds) {
        forceClient = new forcetk.Client(creds.clientId, creds.loginUrl, null, oauthPlugin.forcetkRefresh);
        forceClient.setSessionToken(creds.accessToken, apiVersion, creds.instanceUrl);
        forceClient.setRefreshToken(creds.refreshToken);
        forceClient.setUserAgentString(creds.userAgent);
    }

    function salesforceSessionRefreshed(event) {
        var creds = event.data;
//        forceClient = new forcetk.Client(creds.clientId, creds.loginUrl, null, oauthPlugin.forcetkRefresh);
        forceClient.setSessionToken(creds.accessToken, apiVersion, creds.instanceUrl);
        forceClient.setRefreshToken(creds.refreshToken);
        forceClient.setUserAgentString(creds.userAgent);
    }

    return {
        init: init,
        getClient: function () {
            return forceClient;
        }
    };

}());

