import axios from "axios"

export const trackingTypes = {
    pathParam: "PATH-PARAM",
    api: "API",
    formSubmit: "FORM-SUBMIT",
    manual: "MANUAL"
}

export interface TrackingConfig {
    [key: string]: {
        type: string,
        providerName: string,
        getTrackingInfo: (trackingNumber: string) => void
    }
}

export const BillOfLaddingTrackingConfig: TrackingConfig = {
    "GOSU": {
        type: trackingTypes.pathParam,
        providerName: "Gold Star Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.goldstarline.com/#/track_shipment/${trackingNumber}`, "_blank")
        }
    },
    "SNKO": {
        type: trackingTypes.pathParam,
        providerName: "Sinokor Merchant Marine",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://ebiz.sinokor.co.kr/Tracking?blno=${trackingNumber}`, "_blank")
        }
    },
    "MCPU": {
        type: trackingTypes.pathParam,
        providerName: "Sealand",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.sealandmaersk.com/tracking/${trackingNumber.slice(4)}`, "_blank")
        }
    },
    "SEJJ": {
        type: trackingTypes.pathParam,
        providerName: "Sealand",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.sealandmaersk.com/tracking/${trackingNumber.slice(4)}`, "_blank")
        }
    },
    "MAEU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber.slice(4)}`, "_blank")
        }
    },
    "HOEG": {
        type: trackingTypes.pathParam,
        providerName: "Höegh Autoliners",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hoeghautoliners.com/my-cargo/${trackingNumber}`, "_blank")
        }
    },
    "HSLI": {
        type: trackingTypes.pathParam,
        providerName: "HS LINE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://ebiz.hsln.co.kr/Tracking?blno=${trackingNumber}&cntrno=`, "_blank")
        }
    },
    "HASL": {
        type: trackingTypes.pathParam,
        providerName: "Heung-A Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://ebiz.heung-a.com/Tracking?blno=${trackingNumber}&cntrno=`, "_blank")
        }
    },
    "ACLU": {
        type: trackingTypes.api,
        providerName: "ACL",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.post(`https://www.aclcargo.com/content/themes/acl/library/parse-cargo-track.php`,{
                    "data[request]": `SA-${trackingNumber}`,"nonce": "b24deffb2e"
                });
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "OPDR": {
        type: trackingTypes.api,
        providerName: "MacAndrews",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.get(`https://service.opdr.com/node/trackntrace_iis_iframe/api/getBuBlContainers/${trackingNumber}`,{headers:{'Access-Control-Allow-Origin':'*'}});
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "FEGJ": {
        type: trackingTypes.formSubmit,
        providerName: "4 ELEPHANTS GROUP",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://cenowegypt.com/track-form/" method="post" target="frame-861"><input name="track_shipment_nonce" type="hidden" value="d13f0f5c34"><input name="_wp_http_referer" type="hidden" value="%2Ftrack-form%2F"><input name="wpcargo_tracking_number" type="hidden" value=${trackingNumber}><input name="wpcargo-submit" type="hidden" value="TRACK+RESULT"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "SJBV": {
        type: trackingTypes.formSubmit,
        providerName: "Jinjiang Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://ejj.jjshipping.cn/cargosearch\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"billnbr\" id=\"billnbr\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "PCLU": {
        type: trackingTypes.formSubmit,
        providerName: "Pan Continental Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"http://www.pancon.co.kr/pan/pageLink.pcl\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"link\" id=\"link\" value=\"COM/WEB_212\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"I_AS_KIND\" id=\"I_AS_KIND\" value=\"BL\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"BKG_NO\" id=\"BKG_NO\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "SSPH": {
        type: trackingTypes.formSubmit,
        providerName: "SETH Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.sethshipping.com/tracking_shipment\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"id\" id=\"id\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "YMLU": {
        type: trackingTypes.formSubmit,
        providerName: "Yang Ming",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.yangming.com/e-service/Track_Trace/track_trace_cargo_tracking.aspx\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"str\" id=\"str\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"rdolType\" id=\"rdolType\" value=\"BL\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "ZIMU": {
        type: trackingTypes.formSubmit,
        providerName: "ZIM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.zim.com/tools/track-a-shipment\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"consnumber\" id=\"consnumber\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "YMPR": {
        type: trackingTypes.formSubmit,
        providerName: "Yang Ming",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.yangming.com/e-service/Track_Trace/track_trace_cargo_tracking.aspx\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"str\" id=\"str\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"rdolType\" id=\"rdolType\" value=\"BL\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "WWSU": {
        type: trackingTypes.formSubmit,
        providerName: "Westwood Shipping Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://wsl.com/Tracking/Public\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"sortOrder\" id=\"sortOrder\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"containerNumbers\" id=\"containerNumbers\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"pageSize\" id=\"pageSize\" value=\"20\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"bkNumbers\" id=\"bkNumbers\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"blNumbers\" id=\"blNumbers\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"pageSize\" id=\"pageSize\" value=\"20\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "TSCW": {
        type: trackingTypes.formSubmit,
        providerName: "Tropical Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.tropical.com/track-shipment\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"SearchValue\" id=\"SearchValue\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Type\" id=\"Type\" value=\"job\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "TJFH": {
        type: trackingTypes.formSubmit,
        providerName: "Transfar",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.transfarshipping.com/tracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"blNo\" id=\"blNo\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "SMLM": {
        type: trackingTypes.formSubmit,
        providerName: "SM Line",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://esvc.smlines.com/smline/CUP_HOM_3301.do\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"f_cmd\" id=\"f_cmd\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"pagerows\" id=\"pagerows\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"sessLocale\" id=\"sessLocale\" value=\"en\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"ctgId\" id=\"ctgId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"prntMnuId\" id=\"prntMnuId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"mnuId\" id=\"mnuId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"brdSeq\" id=\"brdSeq\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"hpgLangTpCd\" id=\"hpgLangTpCd\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoTpCdParam\" id=\"trakNoTpCdParam\" value=\"B\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoParam\" id=\"trakNoParam\" value=\"12345678\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"vslEngNmParam\" id=\"vslEngNmParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"vslCdParam\" id=\"vslCdParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"oriLocNmParam\" id=\"oriLocNmParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"modeFlgParam\" id=\"modeFlgParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"cargoTrackingNo\" id=\"cargoTrackingNo\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "PABV": {
        type: trackingTypes.formSubmit,
        providerName: "PIL",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.pilship.com/--/120.html\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"option_tr\" id=\"option_tr\" value=\"bl\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"refnumbers\" id=\"refnumbers\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "SCJU": {
        type: trackingTypes.formSubmit,
        providerName: "SCI",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.shipindia.com/frontcontroller/track_trace1\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"type\" id=\"type\" value=\"BL\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"container_no\" id=\"container_no\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"go\" id=\"go\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "MATS": {
        type: trackingTypes.formSubmit,
        providerName: "Matson",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.matson.com/shipment-tracking.html\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"tracking\" id=\"tracking\" value=\"billNumber\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"billNumber\" id=\"billNumber\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "ONEY": {
        type: trackingTypes.formSubmit,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"trakNoParam\" id=\"trakNoParam\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "KKCL": {
        type: trackingTypes.formSubmit,
        providerName: "Kambara Kisen",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://esvc.kambara-kisen.co.jp/clt/CUP_HOM_3301.do\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"redir\" id=\"redir\" value=\"Y\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoTpCdParam\" id=\"trakNoTpCdParam\" value=\"B\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoParam\" id=\"trakNoParam\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"sessLocale\" id=\"sessLocale\" value=\"en\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "LNLU": {
        type: trackingTypes.formSubmit,
        providerName: "Laurel Navigation",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.lnl.com.hk/tracking_shipment\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"id\" id=\"id\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()  
            }
        }
    },
    "HDMU": {
        type: trackingTypes.formSubmit,
        providerName: "HMM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.hmm21.com/e-service/general/trackNTrace/TrackNTrace.do\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"blNo\" id=\"blNo\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "HLCU": {
        type: trackingTypes.formSubmit,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.hapag-lloyd.com/en/online-business/track/track-by-booking-solution.html\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"blno\" id=\"blno\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "ANLC": {
        type: trackingTypes.formSubmit,
        providerName: "ANL",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.anl.com.au/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber.slice(4)}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "APLU": {
        type: trackingTypes.formSubmit,
        providerName: "APL",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber.slice(4)}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "BANR": {
        type: trackingTypes.formSubmit,
        providerName: "BAL",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"http://lcec.lclog.cn/cargo/NewCargotracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"blno\" id=\"blno\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"selectstate\" id=\"selectstate\" value=\"BLNO\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "CLCL": {
        type: trackingTypes.formSubmit,
        providerName: "Camellia Line",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"http://183.111.65.71/clt/CUP_HOM_3301.do\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"sessLocale\" id=\"sessLocale\" value=\"en\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoTpCdParam\" id=\"trakNoTpCdParam\" value=\"B\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoParam\" id=\"trakNoParam\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "CMDU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.apl.com/ebusiness/tracking/search\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"SearchViewModel.Reference\" id=\"SearchViewModel.Reference\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"SearchViewModel.FromHome\" id=\"SearchViewModel.FromHome\" value=\"true\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"SearchViewModel.SearchBy\" id=\"SearchViewModel.SearchBy\" value=\"Container\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"g-recaptcha-response\" id=\"g-recaptcha-response\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "COSU": {
        type: trackingTypes.formSubmit,
        providerName: "COSCO SHIPPING Lines",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://elines.coscoshipping.com/ebusiness/cargoTracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"trackingType\" id=\"trackingType\" value=\"BILLOFLADING\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"number\" id=\"number\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "COEU": {
        type: trackingTypes.formSubmit,
        providerName: "COSCO SHIPPING Lines",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://elines.coscoshipping.com/ebusiness/cargoTracking\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"trackingType\" id=\"trackingType\" value=\"BILLOFLADING\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"number\" id=\"number\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "CULV": {
        type: trackingTypes.formSubmit,
        providerName: "CULines",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.culines.com/en/site/bill\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"reg\" id=\"reg\" value=\"${trackingNumber}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "DJSC": {
        type: trackingTypes.formSubmit,
        providerName: "Dongjin Shipping",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"http://esvc.djship.co.kr/gnoss/CUP_HOM_3301.do\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"f_cmd\" id=\"f_cmd\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"pagerows\" id=\"pagerows\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"sessLocale\" id=\"sessLocale\" value=\"en\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"ctgId\" id=\"ctgId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"prntMnuId\" id=\"prntMnuId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"mnuId\" id=\"mnuId\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"brdSeq\" id=\"brdSeq\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"hpgLangTpCd\" id=\"hpgLangTpCd\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoTpCdParam\" id=\"trakNoTpCdParam\" value=\"B\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"trakNoParam\" id=\"trakNoParam\" value=\"DJSC12345678\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"vslEngNmParam\" id=\"vslEngNmParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"vslCdParam\" id=\"vslCdParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"oriLocNmParam\" id=\"oriLocNmParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"modeFlgParam\" id=\"modeFlgParam\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"cargoTrackingNo\" id=\"cargoTrackingNo\" value=\"${trackingNumber}\t\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "EIMU": {
        type: trackingTypes.formSubmit,
        providerName: "Eimskip",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.eimskip.com/find-shipment/\" method=\"get\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"cid\" id=\"cid\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "EPIR": {
        type: trackingTypes.formSubmit,
        providerName: "Emirates Shipping Line",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://www.emiratesline.com/cargotrracking\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"ctid\" id=\"ctid\" value=\"${trackingNumber}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"scode\" id=\"scode\" value=\"tgCQK3v3QbHHzFs6\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "EGLV": {
        type: trackingTypes.formSubmit,
        providerName: "Evergreen",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action=\"https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do\" method=\"post\" name=\"trackform\" target=\"_top\">\n  <input type=\"hidden\" name=\"BL\" id=\"BL\" value=\"12345678\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"CNTR\" id=\"CNTR\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"chgSearch\" id=\"chgSearch\" value=\"Cargo\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"TYPE\" id=\"TYPE\" value=\"BL\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"CargoNO\" id=\"CargoNO\" value=\"${trackingNumber.slice(4)}\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"Area_vessel\" id=\"Area_vessel\" value=\"Area\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"view\" id=\"view\" value=\"2\" autocomplete=\"off\">\n  <input type=\"hidden\" name=\"email\" id=\"email\" value=\"Email+address\" autocomplete=\"off\">\n</form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "": {
        type: trackingTypes.manual,
        providerName: "Wan Hai Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.wanhai.com/views/cargo_track_v2/tracking_query.xhtml")
        }
    },
}