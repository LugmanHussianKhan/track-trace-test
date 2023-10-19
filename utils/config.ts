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

export const trackingConfig: TrackingConfig = {
    "TRHU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TCLU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "MSMU": {
        type: trackingTypes.manual,
        providerName: "MSC",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.msc.com/en/track-a-shipment")
        }
    },
    "MEDU": {
        type: trackingTypes.manual,
        providerName: "MSC",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.msc.com/en/track-a-shipment")
        }
    },
    "FFAU": {
        type: trackingTypes.api,
        providerName: "Florens",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.get(`https://www.florens.com/unit/inquiry?numbers=${trackingNumber}`);
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "CMAU": {
        type: trackingTypes.formSubmit,
        providerName: "APL",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`

            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    }
}