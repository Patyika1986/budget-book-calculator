
(function() {
    // Dynamic values from page request
    
var script = document.getElementById("celtra-script-1");
if (!script || script.tagName.toLowerCase() !== 'script')
    throw 'Element with id equal to scriptId does not exist or is not a script.';
  
    var runtimeParams = {"tagVersion":"html-standard-7","deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.15.7","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"112.0.0.0","browserRenderingEngine":"WebKit","vendor":"Apple","model":null},"weather":{"windy":"0","currentCondition":"sunny","apparentTemperature":21.0,"temperature":21.0,"windSpeed":9,"cloudCoverage":19,"conditions":[{"name":"sunny","weight":1}]},"ipCountryCode":"DE","ipRegionCode":null,"ipPrincipalSubdivisionCode":"BY","ipCityGeonameId":"2861650","ipCity":"Nuremberg","ipPostalCode":"90489","ipLat":49.4563,"ipLng":11.1064,"accountId":"5c3fcc42","folderId":"3e861244","placementId":"75f729b3","supplierId":null,"sessionId":"s1683471397x8ff9ed75b64658x74911387","purpose":"live","secure":1,"clientTimestamp":"1683469546.182","clientTimeZoneOffsetInMinutes":-120,"clientIp":"87.123.244.28","gpsLat":null,"gpsLng":null,"language":"de","acceptLanguage":"de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7","platformAdvId":null,"platformAdvIdTrackingLimited":null,"userIdentifiers":{},"variantChoices":{"EventMetadata":"newMeta"},"neustarSegment":null,"authBasis":"1683471397658,a1fd3584,75f729b3","authToken":"7579cdce615dbb8db34b465430bbbf56","customAudiences":{},"derivedAudiences":{},"destinationDefinitions":[],"dynamicContent":[],"moatCustomAttributes":{},"admarvel_format":null,"overrides":{"placementId":"75f729b3","customAudiences":{},"derivedAudiences":{},"deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.15.7","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"112.0.0.0","browserRenderingEngine":"WebKit","vendor":"Apple","model":null},"language":"de","ipCountryCode":"DE","ipRegionCode":null,"ipPrincipalSubdivisionCode":"BY","ipCityGeonameId":"2861650","ipCity":"Nuremberg","weather":{"windy":"0","currentCondition":"sunny","apparentTemperature":21.0,"temperature":21.0,"windSpeed":9,"cloudCoverage":19,"conditions":[{"name":"sunny","weight":1}]},"clientTimestamp":"1683469546.182","clientTimeZoneOffsetInMinutes":-120},"utSignals":null,"_mraidCheck":null,"fallbackSdk":null,"passthroughParameters":{"DFPAdUnit":"%%ADUNIT%%","TrackingContext":"d7AIlvB4n9ObGJRWh3qvNgsOV6k3NhMz6Bt8HVUiHNpwIDrXnLvaf3Zt_HJh_sndxBvE9EsaCBvMUMn9isdANydiZFhRMgKgnbakZRBQouskufbF00FNwAaKz8DABsZbOiwaRDvUrUyAku8-l3UvhrQqNqu-XtQWzsSGFLo_Sd9z5vgm_g9Y2KPxUqTHyKt2ITcdlfqKfmkAA9rcXvEevMgVawZfms7ITqDLz9tj4LwK9bqTMOUdWonQNj-5d3ZIXzL4UAUrxIkXpAs8GOvUTUzuW8LNZRsjmQ0sKNQ9YAE80yYylNec2M8n7aTFXOk7vAXsiLuGWCtIKC_7jlI2jaZ4aAu7uFuDiUuU7LQzwQ1-d6zxwtO8_ohCsdKXk5GhApJcZTCm1oRv_i_frDuLvdUPGdkMViPaVSBzp3k4CS9ME1rI8Y5aavXk1J9Ro0fSvxhaE3LsXZ2OrrIOcq5XElbsEJIuCd8ViPlXxtf7x8ZesVDMll5eMuiVWbwvH8pPBdYufJ1ghfvzjuee3vjBBn8RluHsyTWnesCGtjL7Fx67H-McgpOuDNHScOyLLJOoeTHIJqKC6uPM9hi6zj1cAbTOS6D0NTEwycngFy7xQ1xf2zMfjjDwNYVdL5ETwQC227sGsYd3zQB-eRlqR_rKgD8TeaKS58C2cJSq5wXPbASOhFZUsN7spw1JoVUohSeJxH8iQ7qkAb5d4TZvh16oo8MBJJnNBYvCeiEmBTtBE7jb8ktjusLRvtv8dpnIzBY0-Rvagu2Kk6Yk-pCR_LWWav8tCUdf4wFm9-ebOvY2DPEF8CurdOp8mqaEfsOHOXmREDjaNOhYRo-laYr_Bl2rmQ0jK2A-yokA-3Lx8Sikz-HnXhPbAXzDCv_bhbEJAEB49NCuVB78GHfL87i8r46pzdib3k1UBAINVjhJl7J7ITAJi7Q2z5LQWoUu25HTr5H3Yuf-nLSB3cLqWCqRlPbcpJhmDyYTDPv7mql5CQxBll3A6bU-O2I"},"googleMapsClientKey":"AIzaSyDzyj_3GXsFDIuCx3mJFleo3EqVCGwPnxk","shouldShowMapsPrompt":false,"pageSkinsHost":"www.gutefrage.net","pageSkinsPath":"/frage/javascript-array-addieren","stickToPageHeader":null,"externalAdServer":"DFPPremium","externalCreativeId":"243777","externalCreativeName":null,"externalPlacementId":"922249","externalPlacementName":null,"externalSiteId":"90762","externalSiteName":"","externalSupplierId":null,"externalSupplierName":null,"externalLineItemId":"179359","externalSessionId":null,"externalBundleId":null,"externalCreativeWidth":null,"externalCreativeHeight":null,"externalCampaignId":"194372","externalCampaignName":null,"externalAdvertiserId":"1332701","externalDestinationUrl":null,"clickUrl":"https://t.visx.net/click/d7AIlvB4n9ObGJRWh3qvNgsOV6k3NhMz6Bt8HVUiHNpwIDrXnLvaf3Zt_HJh_sndxBvE9EsaCBvMUMn9isdANydiZFhRMgKgnbakZRBQouskufbF00FNwAaKz8DABsZbOiwaRDvUrUyAku8-l3UvhrQqNqu-XtQWzsSGFLo_Sd9z5vgm_g9Y2KPxUqTHyKt2ITcdlfqKfmkAA9rcXvEevMgVawZfms7ITqDLz9tj4LwK9bqTMOUdWonQNj-5d3ZIXzL4UAUrxIkXpAs8GOvUTUzuW8LNZRsjmQ0sKNQ9YAE80yYylNec2M8n7aTFXOk7vAXsiLuGWCtIKC_7jlI2jaZ4aAu7uFuDiUuU7LQzwQ1-d6zxwtO8_ohCsdKXk5GhApJcZTCm1oRv_i_frDuLvdUPGdkMViPaVSBzp3k4CS9ME1rI8Y5aavXk1J9Ro0fSvxhaE3LsXZ2OrrIOcq5XElbsEJIuCd8ViPlXxtf7x8ZesVDMll5eMuiVWbwvH8pPBdYufJ1ghfvzjuee3vjBBn8RluHsyTWnesCGtjL7Fx67H-McgpOuDNHScOyLLJOoeTHIJqKC6uPM9hi6zj1cAbTOS6D0NTEwycngFy7xQ1xf2zMfjjDwNYVdL5ETwQC227sGsYd3zQB-eRlqR_rKgD8TeaKS58C2cJSq5wXPbASOhFZUsN7spw1JoVUohSeJxH8iQ7qkAb5d4TZvh16oo8MBJJnNBYvCeiEmBTtBE7jb8ktjusLRvtv8dpnIzBY0-Rvagu2Kk6Yk-pCR_LWWav8tCUdf4wFm9-ebOvY2DPEF8CurdOp8mqaEfsOHOXmREDjaNOhYRo-laYr_Bl2rmQ0jK2A-yokA-3Lx8Sikz-HnXhPbAXzDCv_bhbEJAEB49NCuVB78GHfL87i8r46pzdib3k1UBAINVjhJl7J7ITAJi7Q2z5LQWoUu25HTr5H3Yuf-nLSB3cLqWCqRlPbcpJhmDyYTDPv7mql5CQxBll3A6bU-O2I///https%3A%2F%2Fa.yoc.com%2Fassets%2Fhelper%2Fpixel.png","useClickAsDestination":null,"scriptId":"celtra-script-1","firehoseUrl":null,"clickEvent":"advertiser","clickUrlNeedsDest":null,"ncu":null,"firstPage":1,"dataURIsEnabled":0,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38","iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null,"moatRandom":{"first":670313557,"second":342076124},"skipOffset":null,"_enablePoliteLoading":null,"massProductionPreview":null,"fontSubsetterIsDisabled":null,"_politeImageUrl":null,"_politeClickThrough":null,"sticky":null,"_mopubExt":null,"enabledServices":[],"creativeVariantLockSize":null,"screenIdLock":null,"vastVersion":null,"standalonePreview":null,"campaignExplorer":null,"exportingFirstFrame":null,"exportingFrameRate":null,"exportingVideoAssetBlobHash":null,"country":"DE","productCategoryCode":null,"campaignName":"PIAmedia / BAT / British American Tobacco / GLO Testkampagne / MAI-JUL","agencyId":"4adfae84","customPartnerAttributeBrandId":null,"suppressCloseButton":null,"featureFlags":{"accessibility":true},"urlHostname":"www.gutefrage.net","urlPath":"/frage/javascript-array-addieren","coppa":"%%TFCD%%","preferredClickThroughWindow":"new","expandDirection":"undefined","hostPageLoadId":"2137447306272675"};
    runtimeParams.overridableClickThroughDestinationUrl = false;
    runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
    runtimeParams.skinPageConfig = "eyJoZWFkZXIiOnsic2VsZWN0b3IiOiIjY2VsdHJhX3RvcF9iZWFjb24ifSwicGFnZUNvbnRlbnQiOnsic2VsZWN0b3IiOiJtYWluLkNvbnRlbnRXaXRoQWRzLW1haW4iLCJzdHlsZXMiOnsiei1pbmRleCI6IjEiLCJiYWNrZ3JvdW5kIjoibGluZWFyLWdyYWRpZW50KCNmZmYsICNmZmYpIG5vLXJlcGVhdCAwIDI1MHB4IWltcG9ydGFudDsifX0sImFkZGl0aW9uYWxDU1MiOlt7InNlbGVjdG9yIjoiLkJpZ2Zvb3QiLCJzdHlsZXMiOnsicG9zaXRpb24iOiJyZWxhdGl2ZSIsIm1heC13aWR0aCI6Ijg1NnB4IiwibWFyZ2luLWxlZnQiOiJhdXRvIiwibWFyZ2luLXJpZ2h0IjoiYXV0byIsIm1hcmdpbi10b3AiOiIwcHgifX0seyJzZWxlY3RvciI6Ii5EaXNwbGFjZWRTdGlja3lBZC5EaXNwbGFjZWRTdGlja3lBZC0tbGVmdCIsInN0eWxlcyI6eyJ2aXNpYmlsaXR5IjoiaGlkZGVuIn19LHsic2VsZWN0b3IiOiIuRGlzcGxhY2VkU3RpY2t5QWQuRGlzcGxhY2VkU3RpY2t5QWQtLXJpZ2h0Iiwic3R5bGVzIjp7InZpc2liaWxpdHkiOiJoaWRkZW4ifX0seyJzZWxlY3RvciI6ImJvZHkiLCJzdHlsZXMiOnsiZGlzcGxheSI6ImZsb3ctcm9vdCIsInBhZGRpbmciOiIwLjFweCJ9fSx7InNlbGVjdG9yIjoiI2NlbHRyYS1za2luLWNvbnRhaW5lci10b3AiLCJzdHlsZXMiOnsid2lkdGgiOiIxMDAlIiwibWFyZ2luLWxlZnQiOiIwICFpbXBvcnRhbnQiLCJtYXJnaW4tcmlnaHQiOiIwICFpbXBvcnRhbnQiLCJwb3NpdGlvbiI6ImFic29sdXRlIiwidG9wIjoiNi40cmVtIn19XSwiYWRkaXRpb25hbEpTIjoiaWYgKHRoaXMuYWRhcHRlci5hZEJlaGF2aW9yLmlzTXVsdGlVbml0U2tpbikge1xuICAgIFwvXC8gTXVsdGktVW5pdCBTa2luIGNvbmZpZ3VyYXRpb25cbiAgICBcL1wvIEFwcGx5IGFkZGl0aW9uYWwgQ1NTXG4gICAgdGhpcy5fYXBwbHlSZXZlcnRhYmxlU3R5bGVzKCcuQ29udGVudFdpdGhBZHMtbWFpbiAnLCB7ICdtaW4td2lkdGgnIDogJzg0MHB4JyB9KTtcbiAgICB0aGlzLl9hcHBseVJldmVydGFibGVTdHlsZXMoJy5Db250ZW50V2l0aEFkcy1tYWluICcsIHsgJ21hcmdpbi10b3AnIDogJzE2cHggIWltcG9ydGFudCcgfSk7XG4gICAgdGhpcy5fYXBwbHlSZXZlcnRhYmxlU3R5bGVzKCcuQ29udGVudFdpdGhBZHMtb3V0ZXInLCB7ICdtaW4td2lkdGgnIDogJzEwMDBweCcgfSk7XG4gICAgdGhpcy5fYXBwbHlSZXZlcnRhYmxlU3R5bGVzKCcuQ29udGVudFdpdGhBZHMtaW5uZXInLCB7ICdtaW4td2lkdGgnIDogJzg0MHB4JyB9KTtcbiAgICB0aGlzLl9hcHBseVJldmVydGFibGVTdHlsZXMoJy5Db250ZW50V2l0aEFkcy1pbm5lcicsIHsgJ21hcmdpbi10b3AnIDogJzBweCAhaW1wb3J0YW50JyB9KTtcbiAgICBcL1wvIHRoaXMuX2FwcGx5UmV2ZXJ0YWJsZVN0eWxlcygnLkNvbnRlbnRXaXRoQWRzLW1haW4nLCB7ICdtYXJnaW4tdG9wJyA6ICcwcHggIWltcG9ydGFudCcgfSk7XG4gICAgdGhpcy5fYXBwbHlSZXZlcnRhYmxlU3R5bGVzKCcuQ29udGVudFdpdGhBZHMtaW5uZXInLCB7ICdtYXJnaW4tcmlnaHQnIDogJ2F1dG8nIH0pO1xuICAgIHRoaXMuX2FwcGx5UmV2ZXJ0YWJsZVN0eWxlcygnLkJpZ2Zvb3QnLCB7ICd6LWluZGV4JyA6ICcxJyB9KTtcbiAgICB0aGlzLl9hcHBseVJldmVydGFibGVTdHlsZXMoJy5CaWdmb290JywgeyAnbWluLXdpZHRoJyA6ICc4NTZweCcgfSk7XG59In0=";
    
    
var macros = function (x) {
    if (x instanceof Array) {
        return x.map(macros);
    } else {
        var macroTags = [
            ['%%CACHEBUSTER%%', (Math.random()+'').slice(2)]
,['%ecid!', "243777"]
,['%n', (Math.random()+'').slice(2)]
,['%s', "https"]
,['\\{celtraAccountId\\}', "5c3fcc42"]
,['\\{celtraAgencyId\\}', "4adfae84"]
,['\\{celtraAndroidAdvIdTrackingLimitedBoolStr\\}', ""]
,['\\{celtraAndroidAdvIdTrackingLimited\\}', ""]
,['\\{celtraAndroidAdvId\\}', ""]
,['\\{celtraCampaignId:int\\}', "1048973892"]
,['\\{celtraCampaignId\\}', "3e861244"]
,['\\{celtraCampaignName\\}', "PIAmedia%20%2F%20BAT%20%2F%20British%20American%20Tobacco%20%2F%20GLO%20Testkampagne%20%2F%20MAI-JUL"]
,['\\{celtraCountryCode\\}', "DE"]
,['\\{celtraCreativeId:int\\}', "2717726084"]
,['\\{celtraCreativeId\\}', "a1fd3584"]
,['\\{celtraCreativeVariant:urlenc\\}', ""]
,['\\{celtraCreativeVariant\\}', ""]
,['\\{celtraCustomPartnerAttribute\\[code\\]\\}', ""]
,['\\{celtraExternalAdServer\\}', "DFPPremium"]
,['\\{celtraExternalAdvertiserId\\}', "1332701"]
,['\\{celtraExternalBundleId\\}', ""]
,['\\{celtraExternalCampaignId\\}', "194372"]
,['\\{celtraExternalCampaignName\\}', ""]
,['\\{celtraExternalCreativeId\\}', "243777"]
,['\\{celtraExternalCreativeName\\}', ""]
,['\\{celtraExternalDestinationUrl\\}', ""]
,['\\{celtraExternalLineItemId\\}', "179359"]
,['\\{celtraExternalPlacementId\\}', "922249"]
,['\\{celtraExternalPlacementName\\}', ""]
,['\\{celtraExternalSessionId\\}', ""]
,['\\{celtraExternalSiteId\\}', "90762"]
,['\\{celtraExternalSiteName\\}', ""]
,['\\{celtraExternalSupplierId\\}', ""]
,['\\{celtraExternalSupplierName\\}', ""]
,['\\{celtraFeedReportLabel\\}', ""]
,['\\{celtraIosAdvIdTrackingLimitedBoolStr\\}', ""]
,['\\{celtraIosAdvIdTrackingLimited\\}', ""]
,['\\{celtraIosAdvId\\}', ""]
,['\\{celtraPlacementId:int\\}', "1979132339"]
,['\\{celtraPlacementId\\}', "75f729b3"]
,['\\{celtraPlatformAdvIdTrackingLimited\\}', ""]
,['\\{celtraPlatformAdvId\\}', ""]
,['\\{celtraProductCategoryCode\\}', ""]
,['\\{celtraProto\\}', "https"]
,['\\{celtraRandom\\}', (Math.random()+'').slice(2)]
,['\\{celtraSessionId\\}', "s1683471397x8ff9ed75b64658x74911387"]
,['\\{celtraSupplierId:int\\}', ""]
,['\\{celtraSupplierId\\}', ""]
,['\\{passthroughParameters\\[DFPAdUnit\\]\\}', "%%ADUNIT%%"]
,['\\{passthroughParameters\\[TrackingContext\\]\\}', "d7AIlvB4n9ObGJRWh3qvNgsOV6k3NhMz6Bt8HVUiHNpwIDrXnLvaf3Zt_HJh_sndxBvE9EsaCBvMUMn9isdANydiZFhRMgKgnbakZRBQouskufbF00FNwAaKz8DABsZbOiwaRDvUrUyAku8-l3UvhrQqNqu-XtQWzsSGFLo_Sd9z5vgm_g9Y2KPxUqTHyKt2ITcdlfqKfmkAA9rcXvEevMgVawZfms7ITqDLz9tj4LwK9bqTMOUdWonQNj-5d3ZIXzL4UAUrxIkXpAs8GOvUTUzuW8LNZRsjmQ0sKNQ9YAE80yYylNec2M8n7aTFXOk7vAXsiLuGWCtIKC_7jlI2jaZ4aAu7uFuDiUuU7LQzwQ1-d6zxwtO8_ohCsdKXk5GhApJcZTCm1oRv_i_frDuLvdUPGdkMViPaVSBzp3k4CS9ME1rI8Y5aavXk1J9Ro0fSvxhaE3LsXZ2OrrIOcq5XElbsEJIuCd8ViPlXxtf7x8ZesVDMll5eMuiVWbwvH8pPBdYufJ1ghfvzjuee3vjBBn8RluHsyTWnesCGtjL7Fx67H-McgpOuDNHScOyLLJOoeTHIJqKC6uPM9hi6zj1cAbTOS6D0NTEwycngFy7xQ1xf2zMfjjDwNYVdL5ETwQC227sGsYd3zQB-eRlqR_rKgD8TeaKS58C2cJSq5wXPbASOhFZUsN7spw1JoVUohSeJxH8iQ7qkAb5d4TZvh16oo8MBJJnNBYvCeiEmBTtBE7jb8ktjusLRvtv8dpnIzBY0-Rvagu2Kk6Yk-pCR_LWWav8tCUdf4wFm9-ebOvY2DPEF8CurdOp8mqaEfsOHOXmREDjaNOhYRo-laYr_Bl2rmQ0jK2A-yokA-3Lx8Sikz-HnXhPbAXzDCv_bhbEJAEB49NCuVB78GHfL87i8r46pzdib3k1UBAINVjhJl7J7ITAJi7Q2z5LQWoUu25HTr5H3Yuf-nLSB3cLqWCqRlPbcpJhmDyYTDPv7mql5CQxBll3A6bU-O2I"]

        ];
        return macroTags.reduce(function(str, replacementRule, idx, arr) {
            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
        }, x);
    }
};

    // Dynamic values that we do not want to pass forward in urls,
    // so we look them up on every page request based on runtimeParams
    var urlOpenedOverrideUrls = {};
    var storeOpenedOverrideUrls = {};
    var urlOpenedUrlAppendage = "";
    var clickThroughDestinationUrl = null;

    // Less dynamic values for payload request
    var payloadBase = "https://cache-ssl.celtra.com/api/creatives/a1fd3584/compiled/web.js";
    var cacheParams = {"v": "78-75973deebe", "secure": 1, "cachedVariantChoices": "W10-", "isPurposePreview": 0, "eventMetadataExperiment": 'newMeta', "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0'};

    
    var trackers = (function() {
    return [
        // 3rd-party tracker (regular)
function(event) {
    if (event.name == 'adLoading')
        return {urls: macros(["https://pixel.adsafeprotected.com/rfw/st/1457601/71065093/skeleton.gif?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_278}&gdpr_pd=${GDPR_PD}","https://ad2.adfarm1.adition.com/banner?sid=4813072&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_39}&kid=5871998&bid=17803424&wpt=C&ts={celtraProto}"])};

    if (event.name == 'firstInteraction')
        return {urls: macros([])};

    if (event.name == 'creativeLoaded')
        return {urls: macros([])};

    if (event.name == 'creativeRendered')
        return {urls: macros([])};

    if (event.name == 'viewable00')
        return {urls: macros([])};

    if (event.name == 'viewable501')
        return {urls: macros([])};

    if (event.name == 'expandRequested')
        return {urls: macros([])};

    if (event.name == 'videoPlayInitiated')
        return {urls: macros([])};

    if (event.clazz === "MasterVideo") {
        if (event.name == 'videoStart')
            return {urls: macros([])};

        if (event.name == 'videoFirstQuartile')
            return {urls: macros([])};

        if (event.name == 'videoMidpoint')
            return {urls: macros([])};

        if (event.name == 'videoThirdQuartile')
            return {urls: macros([])};

        if (event.name == 'videoComplete')
            return {urls: macros([])};
    }

    if (event.name == 'videoPause')
        return {urls: macros([])};

    if (event.name == 'videoMuted')
        return {urls: macros([])};

    if (event.name == 'videoUnmuted')
        return {urls: macros([])};

    if (event.name == 'custom')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'urlOpened')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'storeOpened')
        return {urls: macros({}[event.label] || [])};
},
// 3rd-party tracker (click regular)
function(event) {
    if (event.name === "urlOpened" && event.label === "{celtraProto}://ad2.adfarm1.adition.com/redi?sid=4813072&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_39}&kid=5871998&bid=17803424")
        return {urls: macros([]), events: [{name: 'click'}] };
},
// Ad server tracker
function(event) {
    if (event.name === "urlOpened" && event.label === "{celtraProto}://ad2.adfarm1.adition.com/redi?sid=4813072&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_39}&kid=5871998&bid=17803424")
        return {urls: macros(["https://t.visx.net/click/d7AIlvB4n9ObGJRWh3qvNgsOV6k3NhMz6Bt8HVUiHNpwIDrXnLvaf3Zt_HJh_sndxBvE9EsaCBvMUMn9isdANydiZFhRMgKgnbakZRBQouskufbF00FNwAaKz8DABsZbOiwaRDvUrUyAku8-l3UvhrQqNqu-XtQWzsSGFLo_Sd9z5vgm_g9Y2KPxUqTHyKt2ITcdlfqKfmkAA9rcXvEevMgVawZfms7ITqDLz9tj4LwK9bqTMOUdWonQNj-5d3ZIXzL4UAUrxIkXpAs8GOvUTUzuW8LNZRsjmQ0sKNQ9YAE80yYylNec2M8n7aTFXOk7vAXsiLuGWCtIKC_7jlI2jaZ4aAu7uFuDiUuU7LQzwQ1-d6zxwtO8_ohCsdKXk5GhApJcZTCm1oRv_i_frDuLvdUPGdkMViPaVSBzp3k4CS9ME1rI8Y5aavXk1J9Ro0fSvxhaE3LsXZ2OrrIOcq5XElbsEJIuCd8ViPlXxtf7x8ZesVDMll5eMuiVWbwvH8pPBdYufJ1ghfvzjuee3vjBBn8RluHsyTWnesCGtjL7Fx67H-McgpOuDNHScOyLLJOoeTHIJqKC6uPM9hi6zj1cAbTOS6D0NTEwycngFy7xQ1xf2zMfjjDwNYVdL5ETwQC227sGsYd3zQB-eRlqR_rKgD8TeaKS58C2cJSq5wXPbASOhFZUsN7spw1JoVUohSeJxH8iQ7qkAb5d4TZvh16oo8MBJJnNBYvCeiEmBTtBE7jb8ktjusLRvtv8dpnIzBY0-Rvagu2Kk6Yk-pCR_LWWav8tCUdf4wFm9-ebOvY2DPEF8CurdOp8mqaEfsOHOXmREDjaNOhYRo-laYr_Bl2rmQ0jK2A-yokA-3Lx8Sikz-HnXhPbAXzDCv_bhbEJAEB49NCuVB78GHfL87i8r46pzdib3k1UBAINVjhJl7J7ITAJi7Q2z5LQWoUu25HTr5H3Yuf-nLSB3cLqWCqRlPbcpJhmDyYTDPv7mql5CQxBll3A6bU-O2I///https%3A%2F%2Fa.yoc.com%2Fassets%2Fhelper%2Fpixel.png"]), events: [{name: 'clickReportedToSupplier'}] };
}
    ]
})();
    trackers.urlsAndEventsFor = function(event) {
        return this.reduce(function(acc, tracker) {
            var ue = tracker(event) || {};
            return {
                urls:   acc.urls.concat(ue.urls || []),
                events: acc.events.concat(ue.events || [])
            };
        }, {urls: [], events: []});
    };
       

    
var adLoadingEvent = {"name":"adLoading","sessionId":"s1683471397x8ff9ed75b64658x74911387"};
adLoadingEvent.clientTimestamp = new Date/1000;

trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
    // On IE 8+ URLs containing '%' character sometimes throw an error and
    // stop current JS run loop. One solution  would be to look for that
    // and replace it with '%25', but we've decided not to modify incoming
    // URLs, because this issue is really a combination of two external
    // problems: broken URL on a buggy browser.
    // https://celtra.atlassian.net/browse/MAB-4476
    try {
        var img = new Image;
        
        img.src = url;
    } catch(e) {}
});
    

    
(function () {
    runtimeParams.protoLoading = {};

    var base64img = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEKCBsN103sxwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAC0lEQVQI12NgAAIAAAUAAeImBZsAAAAASUVORK5CYII=";

    runtimeParams.protoLoading.dataLoadStatus = null;
    // Test if CSP is blocking "data:" source for images
    var dataImg = new Image();
    dataImg.onload = function() {
        runtimeParams.protoLoading.dataLoadStatus = "supported";
    };
    dataImg.onerror = function(e) {
        runtimeParams.protoLoading.dataLoadStatus = "blocked";
    };
    dataImg.src = "data:image/png;base64," + base64img;

    runtimeParams.protoLoading.blobLoadStatus = null;
    // Test if CSP is blocking "blob:" source for images
    var url = null;
    try {
        var binaryImg = atob(base64img);
        var length = binaryImg.length;
        var ab = new ArrayBuffer(length);
        var ua = new Uint8Array(ab);
        for (var i = 0; i < length; i++) {
            ua[i] = binaryImg.charCodeAt(i);
        }
        var blob = new Blob([ab], {type: 'image/png'});
        url = URL.createObjectURL(blob);
    } catch(error) {
        runtimeParams.protoLoading.blobLoadStatus = "error";
        runtimeParams.protoLoading.blobErrorMessage = error.name + ': ' + error.message;
        return;
    }
    var blobImg = new Image();
    blobImg.onload = function() {
        runtimeParams.protoLoading.blobLoadStatus = "supported";
        URL.revokeObjectURL(url);
    };
    blobImg.onerror = function(e) {
        runtimeParams.protoLoading.blobLoadStatus = "blocked";
    };
    blobImg.src = url;
})();
    

    function buildPayloadUrl(payloadBase) {
      var pairs = [];
      for (var k in cacheParams)
          pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
      return payloadBase + '?' + pairs.join('&');
    }

    var payloadUrl = buildPayloadUrl(payloadBase);

    
// Request and run payload
var payload = document.createElement('script');
payload.src = payloadUrl;
payload.onload = function() {

runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);
    
};
script.parentNode.insertBefore(payload, script.nextSibling);
    
    
    
// Append moat display script
var moatScript = document.createElement('script');
var moatCustomParams = [].map(
    function(urlParam) {
        return urlParam.key + '=' + encodeURIComponent(macros(urlParam.value));
    }).reduce(function(url, urlParam) {
        return url + '&' + urlParam;
    }, '');
moatScript.src = 'https://z.moatads.com/yocceltradisplay202624213463/moatad.js#moatClientLevel1=3e861244&moatClientLevel2=-&moatClientLevel3=75f729b3&moatClientLevel4=a1fd3584&zMoatAC=5c3fcc42&zMoatFT=CrossScreenMultiUnitSkin&zMoatBR=8d0b1953&zMoatMA=4adfae84&zMoatAS=DFP&zMoatCV=&zMoatDFPST=90762&zMoatDFPCP=194372&zMoatDFPPL=922249&zMoatDFPCR=243777&zMoatDFPAD=1332701&zMoatDFPLI=179359' + moatCustomParams;
moatScript.type = 'text/javascript';
script.parentNode.appendChild(moatScript);
var moatPixel = document.createElement('img');
moatPixel.src = 'https://pixel.moatads.com/pixel.gif?e=12&ac=1&bq=0&dz=1&f=0&gh=1&i=CELTRADISPLAY1&t=670313557&de=342076124&d=3e861244%3A-%3A75f729b3%3Aa1fd3584&bo=-&bd=-&cs=0';
      
    
    
})();
  