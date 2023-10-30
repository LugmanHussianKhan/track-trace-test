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

export const containerTrackingConfig: TrackingConfig = {
    "ZWFU": {
        type: trackingTypes.pathParam,
        providerName: "Zim World Freight",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://www.zline.in/ContainerTracking/ContainerTracking.aspx?TrackBy=CONTAINER_NO&TrackingText=${trackingNumber}`, "_blank")
        }
    },
    "WECU": {
        type: trackingTypes.pathParam,
        providerName: "W.E.C. Lines",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://weclines.locussoftware.com/customer-portal/#/cover-page/container-tracking;values=${trackingNumber};option=container`, "_blank")
        }  
    },
    "HMKU": {
        type: trackingTypes.pathParam,
        providerName: "W.E.C. Lines",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://weclines.locussoftware.com/customer-portal/#/cover-page/container-tracking;values=${trackingNumber};option=container`, "_blank")
        }
    },
    "TRHU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TDRU": {
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
    "TCKU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TCNU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TTNU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TRLU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "ICSU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TPHU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TOLU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TRDU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TRIU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "IKSU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "MTRU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TIIU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TLLU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "HNSU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TDTU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "YOIU": {
        type: trackingTypes.pathParam,
        providerName: "Triton",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tools.tritoncontainer.com/tritoncontainer/unitStatus/show/${trackingNumber}`, "_blank")
        }
    },
    "TLXU": {
        type: trackingTypes.pathParam,
        providerName: "Trans Asia",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://182.72.192.230/TASFREIGHT/AppTasnet/ContainerTracking.aspx?&containerno=${trackingNumber}`, "_blank")
        }
    },
    "STRU": {
        type: trackingTypes.pathParam,
        providerName: "TOTE Maritime",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://portal.totemaritime.com/Track/TrackDetails?trackportalid=0&searchNum=${trackingNumber}&trackType=1`, "_blank")
        }
    },
    "JSSU": {
        type: trackingTypes.pathParam,
        providerName: "Swire Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.swireshipping.com/requestTrackShipment/CN/${trackingNumber}`, "_blank")
        }
    },
    "BAXU": {
        type: trackingTypes.pathParam,
        providerName: "Sunmarine",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.sunmarine.com/trackntrace.aspx?Type=CO&blno=${trackingNumber}`, "_blank")
        }
    },
    "ARCU": {
        type: trackingTypes.pathParam,
        providerName: "Sunmarine",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.sunmarine.com/trackntrace.aspx?Type=CO&blno=${trackingNumber}`, "_blank")
        }
    },
    "STBU": {
        type: trackingTypes.pathParam,
        providerName: "Stolt Tank Containers",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`, "_blank")
        }
    },
    "SNIU": {
        type: trackingTypes.pathParam,
        providerName: "Stolt Tank Containers",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`, "_blank")
        }
    },
    "TAIU": {
        type: trackingTypes.pathParam,
        providerName: "Stolt Tank Containers",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`, "_blank")
        }
    },
    "UTCU": {
        type: trackingTypes.pathParam,
        providerName: "Stolt Tank Containers",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`, "_blank")
        }
    },
    "TABU": {
        type: trackingTypes.pathParam,
        providerName: "Stolt Tank Containers",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`, "_blank")
        }
    },
    "SWTU": {
        type: trackingTypes.pathParam,
        providerName: "Stolt Tank Containers",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`, "_blank")
        }
    },
    "BVIU": {
        type: trackingTypes.pathParam,
        providerName: "Stolt Tank Containers",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`, "_blank")
        }
    },
    "SNTU": {
        type: trackingTypes.pathParam,
        providerName: "Stolt Tank Containers",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://track.stolttankcontainers.com/TrackAndTrace/NoResults.aspx?ReferenceNumber=${trackingNumber}`, "_blank")
        }
    },
    "SNBU": {
        type: trackingTypes.pathParam,
        providerName: "Sinotrans",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ebusiness.sinolines.com.cn/snlebusiness/EQUERY/TrackingCargoE.aspx?subject=cntrno&item=${trackingNumber}`, "_blank")
        }
    },
    "SNHU": {
        type: trackingTypes.pathParam,
        providerName: "Sinotrans",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ebusiness.sinolines.com.cn/snlebusiness/EQUERY/TrackingCargoE.aspx?subject=cntrno&item=${trackingNumber}`, "_blank")
        }
    },
    "SNCU": {
        type: trackingTypes.pathParam,
        providerName: "Sinotrans",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ebusiness.sinolines.com.cn/snlebusiness/EQUERY/TrackingCargoE.aspx?subject=cntrno&item=${trackingNumber}`, "_blank")
        }
    },
    "SKLU": {
        type: trackingTypes.pathParam,
        providerName: "Sinokor Merchant Marine",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://ebiz.sinokor.co.kr/Tracking?cntrno=${trackingNumber}`, "_blank")
        }
    },
    "SKRU": {
        type: trackingTypes.pathParam,
        providerName: "Sinokor Merchant Marine",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://ebiz.sinokor.co.kr/Tracking?cntrno=${trackingNumber}`, "_blank")
        }
    },
    "SKHU": {
        type: trackingTypes.pathParam,
        providerName: "Sinokor Merchant Marine",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://ebiz.sinokor.co.kr/Tracking?cntrno=${trackingNumber}`, "_blank")
        }
    },
    "MCPU": {
        type: trackingTypes.pathParam,
        providerName: "Sealand",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.sealandmaersk.com/tracking/${trackingNumber}`, "_blank")
        }
    },
    "PCIU": {
        type: trackingTypes.pathParam,
        providerName: "PIL",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.pilship.com/--/120.html?option_tr=container&refnumbers=${trackingNumber}`, "_blank")
        }
    },
    "PIDU": {
        type: trackingTypes.pathParam,
        providerName: "PIL",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.pilship.com/--/120.html?option_tr=container&refnumbers=${trackingNumber}`, "_blank")
        }
    },
    "PILU": {
        type: trackingTypes.pathParam,
        providerName: "PIL",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.pilship.com/--/120.html?option_tr=container&refnumbers=${trackingNumber}`, "_blank")
        }
    },
    "ONEU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "MOEU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "MOSU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "MOLU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "PXCU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "NYKU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "MOTU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "MORU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "MOGU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "MOFU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "MOAU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "KKLU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "AKLU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "ESSU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "KLTU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "KLFU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "KKTU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "KKFU": {
        type: trackingTypes.pathParam,
        providerName: "ONE",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking?trakNoParam=${trackingNumber}`, "_blank")
        }
    },
    "OASU": {
        type: trackingTypes.pathParam,
        providerName: "Ocean Axis",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://dxb.fresaxpress.com:7001/apex/fresaxp/f?p=202:3:0::NO:3:P0_COMPANY_ID,P3_CONTAINER_NO:1002,${trackingNumber}`, "_blank")
        }
    },
    "MRTU": {
        type: trackingTypes.pathParam,
        providerName: "Meratus Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.meratus.com/en/guest/quick-tracking?query=${trackingNumber}`, "_blank")
        }
    },
    "SKNU": {
        type: trackingTypes.pathParam,
        providerName: "Kuehne + Nagel",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://mykn.kuehne-nagel.com/public-tracking/shipments?query=${trackingNumber}`, "_blank")
        }
    },
    "IAAU": {
        type: trackingTypes.pathParam,
        providerName: "Interasia Lines",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.interasia.cc/Service/ContainerList?cargoVanNo=${trackingNumber}`, "_blank")
        }
    },
    "HSLU": {
        type: trackingTypes.pathParam,
        providerName: "HS Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://ebiz.hsln.co.kr/Tracking?blno=&cntrno=${trackingNumber}`, "_blank")
        }
    },
    "HDMU": {
        type: trackingTypes.pathParam,
        providerName: "HMM",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hmm21.com/e-service/general/trackNTrace/TrackNTrace.do?cntrNo=${trackingNumber}`, "_blank")
        }
    },
    "HMMU": {
        type: trackingTypes.pathParam,
        providerName: "HMM",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hmm21.com/e-service/general/trackNTrace/TrackNTrace.do?cntrNo=${trackingNumber}`, "_blank")
        }
    },
    "HGLU": {
        type: trackingTypes.pathParam,
        providerName: "Hillebrand Gori",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://my.hillebrandgori.com/public-tracking/${trackingNumber}`, "_blank")
        }
    },
    "BPTU": {
        type: trackingTypes.pathParam,
        providerName: "Hillebrand Gori",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://my.hillebrandgori.com/public-tracking/${trackingNumber}`, "_blank")
        }
    },
    "HALU": {
        type: trackingTypes.pathParam,
        providerName: "Heung-A Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://ebiz.heung-a.com/Tracking?blno=&cntrno=${trackingNumber}`, "_blank")
        }
    },
    "HLHU": {
        type: trackingTypes.pathParam,
        providerName: "Heung-A Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://ebiz.heung-a.com/Tracking?blno=&cntrno=${trackingNumber}`, "_blank")
        }
    },
    "HLCU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "LNXU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "DAYU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "CSVU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "HLXU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "CPSU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "CSQU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "CMUU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "TMMU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "FANU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "ITAU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "CASU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "IVLU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "HAMU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "UACU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "QNNU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "QIBU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "UAEU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "TLEU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "NIDU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "NDSU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "HLBU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "UASU": {
        type: trackingTypes.pathParam,
        providerName: "Hapag-Lloyd",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=${trackingNumber}`, "_blank")
        }
    },
    "MSKU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "SUDU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "CNIU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "KHLU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "ENAU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MWCU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MWMU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MAEU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "SEAU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "APMU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MHHU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MSFU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "PONU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "POCU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "KNLU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "OCLU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "FRLU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MCAU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MCHU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MSAU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MWSU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "FAAU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "TORU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "LOTU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MIEU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "SCMU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MRKU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MSWU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "CADU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "GRIU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MVIU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MNBU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MCRU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MMAU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "COZU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "HASU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MALU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MRSU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "MRFU": {
        type: trackingTypes.pathParam,
        providerName: "Maersk Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "KHJU": {
        type: trackingTypes.pathParam,
        providerName: "Hamburg Sud",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.maersk.com/tracking/#tracking/${trackingNumber}`, "_blank")
        }
    },
    "GSLU": {
        type: trackingTypes.pathParam,
        providerName: "Gold start Lines",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.goldstarline.com/#/track_shipment/${trackingNumber}`, "_blank")
        }
    },
    "JXLU": {
        type: trackingTypes.pathParam,
        providerName: "Gold start Lines",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.goldstarline.com/#/track_shipment/${trackingNumber}`, "_blank")
        }
    },
    "JXJU": {
        type: trackingTypes.pathParam,
        providerName: "Gold start Lines",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.goldstarline.com/#/track_shipment/${trackingNumber}`, "_blank")
        }
    },
    "GMOU": {
        type: trackingTypes.pathParam,
        providerName: "Gold start Lines",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.goldstarline.com/#/track_shipment/${trackingNumber}`, "_blank")
        }
    },
    "EMKU": {
        type: trackingTypes.pathParam,
        providerName: "Emkay Line",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.emkayline.com/trackbycno.php?txt_container_no=${trackingNumber}`, "_blank")
        }
    },
    "ECNU": {
        type: trackingTypes.pathParam,
        providerName: "Econ Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://tracer.econshipping.com/TracerERP/track-your-shipment/${trackingNumber}`, "_blank")
        }
    },
    "STJU": {
        type: trackingTypes.pathParam,
        providerName: "DHL",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.dbschenker.com/app/tracking-public/?refNumber=${trackingNumber}&language_region=en-US_US`, "_blank")
        }
    },
    "DGFU": {
        type: trackingTypes.pathParam,
        providerName: "DHL",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.dhl.com/in-en/home/tracking/tracking-express.html?locale=true&submit=1&tracking-id=${trackingNumber}`, "_blank")
        }
    },
    "DHZU": {
        type: trackingTypes.pathParam,
        providerName: "DHL",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`https://www.dhl.com/in-en/home/tracking/tracking-express.html?locale=true&submit=1&tracking-id=${trackingNumber}`, "_blank")
        }
    },
    "MSLU": {
        type: trackingTypes.pathParam,
        providerName: "Minsheng Ocean Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://www.mssco.net/Eip/Svc/wfCargoTracking.aspx?BL=&CN=${trackingNumber}&BK=`, "_blank")
        }
    },
    "UESU": {
        type: trackingTypes.pathParam,
        providerName: "UES International",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://www.ueshk.com/phone/inquiries_detail.aspx?classid=3&aid=5&leftid=18&seachstr=${trackingNumber}`, "_blank")
        }
    },
    "GVDU": {
        type: trackingTypes.pathParam,
        providerName: "UES International",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://www.ueshk.com/phone/inquiries_detail.aspx?classid=3&aid=5&leftid=18&seachstr=${trackingNumber}`, "_blank")
        }
    },
    "GVCU": {
        type: trackingTypes.pathParam,
        providerName: "UES International",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://www.ueshk.com/phone/inquiries_detail.aspx?classid=3&aid=5&leftid=18&seachstr=${trackingNumber}`, "_blank")
        }
    },
    "UETU": {
        type: trackingTypes.pathParam,
        providerName: "UES International",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://www.ueshk.com/phone/inquiries_detail.aspx?classid=3&aid=5&leftid=18&seachstr=${trackingNumber}`, "_blank")
        }
    },
    "UXXU": {
        type: trackingTypes.pathParam,
        providerName: "UES International",
        getTrackingInfo: (trackingNumber: string) => {
            window.open(`http://www.ueshk.com/phone/inquiries_detail.aspx?classid=3&aid=5&leftid=18&seachstr=${trackingNumber}`, "_blank")
        }
    },
    "WHLU": {
        type: trackingTypes.manual,
        providerName: "Wan Hai Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.wanhai.com/views/cargo_track_v2/tracking_query.xhtml")
        }
    },
    "WHSU": {
        type: trackingTypes.manual,
        providerName: "Wan Hai Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.wanhai.com/views/cargo_track_v2/tracking_query.xhtml")
        }
    },
    "TPCU": {
        type: trackingTypes.manual,
        providerName: "Wan Hai Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.wanhai.com/views/cargo_track_v2/tracking_query.xhtml")
        }
    },
    "TRKU": {
        type: trackingTypes.manual,
        providerName: "Turkon Line",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://my.turkon.com/container-tracking")
        }
    },
    "TVSU": {
        type: trackingTypes.manual,
        providerName: "Transvision Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("http://portal.transvisionshipping.com:9999/ContTrack/")
        }
    },
    "TKRU": {
        type: trackingTypes.manual,
        providerName: "TransContainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://isales.trcont.com/?tab=tracking")
        }
    },
    "RZDU": {
        type: trackingTypes.manual,
        providerName: "TransContainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://isales.trcont.com/?tab=tracking")
        }
    },
    "TRBU": {
        type: trackingTypes.manual,
        providerName: "Trailer Bridge",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("http://legacy.trailerbridge.com/CustomerInquiry/CI.aspx")
        }
    },
    "GLDU": {
        type: trackingTypes.manual,
        providerName: "Touax",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.touax-container.com/unit-inquiry")
        }
    },
    "TGCU": {
        type: trackingTypes.manual,
        providerName: "Touax",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.touax-container.com/unit-inquiry")
        }
    },
    "PGTU": {
        type: trackingTypes.manual,
        providerName: "Touax",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.touax-container.com/unit-inquiry")
        }
    },
    "TGSU": {
        type: trackingTypes.manual,
        providerName: "Touax",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.touax-container.com/unit-inquiry")
        }
    },
    "GRDU": {
        type: trackingTypes.manual,
        providerName: "Touax",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.touax-container.com/unit-inquiry")
        }
    },
    "TEXU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "MAXU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "AXIU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "CHIU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "TGBU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "TENU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "TXGU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "OCGU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "RFSU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "MGLU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "MAGU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "CEOU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "LLTU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "TEMU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "XINU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "HCIU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "AMZU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "AMFU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "GAZU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "CLHU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "GAEU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "GATU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "WCIU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "MLCU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "PRSU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "TGHU": {
        type: trackingTypes.manual,
        providerName: "Textainer",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tex.textainer.com/Equipment/StatusAndSpecificationsInquiry.aspx")
        }
    },
    "GETU": {
        type: trackingTypes.manual,
        providerName: "Tarros",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.tarros.it/utilities/container-tracking/")
        }
    },
    "OWNU": {
        type: trackingTypes.manual,
        providerName: "Tarros",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.tarros.it/utilities/container-tracking/")
        }
    },
    "TARU": {
        type: trackingTypes.manual,
        providerName: "Tarros",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.tarros.it/utilities/container-tracking/")
        }
    },
    "TAKU": {
        type: trackingTypes.manual,
        providerName: "Tanto",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.tantonet.com/")
        }
    },
    "TAWU": {
        type: trackingTypes.manual,
        providerName: "TAILWIND Shipping Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://erp.tailwind-shipping.com/ecomonline/")
        }
    },
    "TSLU": {
        type: trackingTypes.manual,
        providerName: "T.S. Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.tslines.com/en/tracking?nowmenu=Search%20by%20Container%20number")
        }
    },
    "TSTU": {
        type: trackingTypes.manual,
        providerName: "T.S. Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.tslines.com/en/tracking?nowmenu=Search%20by%20Container%20number")
        }
    },
    "TSSU": {
        type: trackingTypes.manual,
        providerName: "T.S. Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.tslines.com/en/tracking?nowmenu=Search%20by%20Container%20number")
        }
    },
    "SITU": {
        type: trackingTypes.manual,
        providerName: "SITC",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://api.sitcline.com/sitcline/wel?name=cargoTrack")
        }
    },
    "CWFU": {
        type: trackingTypes.manual,
        providerName: "SITC",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://api.sitcline.com/sitcline/wel?name=cargoTrack")
        }
    },
    "OOLU": {
        type: trackingTypes.manual,
        providerName: "OOCL",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.oocl.com/eng/Pages/default.aspx")
        }
    },
    "OOCU": {
        type: trackingTypes.manual,
        providerName: "OOCL",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.oocl.com/eng/Pages/default.aspx")
        }
    },
    "NSSU": {
        type: trackingTypes.manual,
        providerName: "Namsung",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://ebiz.namsung.co.kr/")
        }
    },
    "NSRU": {
        type: trackingTypes.manual,
        providerName: "Namsung",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://ebiz.namsung.co.kr/")
        }
    },
    "NSJU": {
        type: trackingTypes.manual,
        providerName: "Namsung",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://ebiz.namsung.co.kr/")
        }
    },
    "NSDU": {
        type: trackingTypes.manual,
        providerName: "Namsung",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://ebiz.namsung.co.kr/")
        }
    },
    "LMCU": {
        type: trackingTypes.manual,
        providerName: "Messina Line",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.messinaline.it/wps/wcm/connect/internet/messina_en/operativo/cntr_tracking/#tf-cntr_tracking")
        }
    },
    "CHLU": {
        type: trackingTypes.manual,
        providerName: "Marguisa",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tracking.marguisa.com/")
        }
    },
    "OEXU": {
        type: trackingTypes.manual,
        providerName: "Marguisa",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tracking.marguisa.com/")
        }
    },
    "MUOU": {
        type: trackingTypes.manual,
        providerName: "Marguisa",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tracking.marguisa.com/")
        }
    },
    "MFTU": {
        type: trackingTypes.manual,
        providerName: "Marfret",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.marfret.fr/suivre-mon-container/")
        }
    },
    "ICUU": {
        type: trackingTypes.manual,
        providerName: "Independent Container Line",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://eservices.icl-ltd.com/app#/containerLocation")
        }
    },
    "PCSU": {
        type: trackingTypes.manual,
        providerName: "Dong Young Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://ebiz.pcsline.co.kr/")
        }
    },
    "DYLU": {
        type: trackingTypes.manual,
        providerName: "Dong Young Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://ebiz.pcsline.co.kr/")
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
    "NIRU": {
        type: trackingTypes.manual,
        providerName: "Nirint Shipping ",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://containercontrol.nirint.com/scripts/cgiip.exe/WService=Nirint/system/web/sp-web-menu.r?program=CA.WEB-FASTTRACK2&clearsearch=yes&setting=web2014")
        }
    },
    "REGU": {
        type: trackingTypes.manual,
        providerName: "RCL",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.rclgroup.com/Home#cargo")
        }
    },
    "SJKU": {
        type: trackingTypes.manual,
        providerName: "Sarjak Container Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://sarjak.com/tracking.aspx")
        }
    },
    "SIKU": {
        type: trackingTypes.api,
        providerName: "Samudera Shipping",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.post(`https://ssl-cts.samudera.id:9600/cts_web/applicationMssqlServer/script/dataapi.php`,{container_no: trackingNumber,
                type_search: "Container"},{headers:{'Access-Control-Allow-Origin':'*'}});
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "NAIU": {
        type: trackingTypes.api,
        providerName: "PSL Navegação",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.get(`https://tracking.pslnavegacao.com:8081/tracking_resposta.asp?contrNumber=${trackingNumber}`,{headers:{'Access-Control-Allow-Origin':'*'}});
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "LOVU": {
        type: trackingTypes.api,
        providerName: "NCL",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.get(`https://nclweb-prod.appresso.no/_api/trackntrace?search=${trackingNumber}`);
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
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
    "FSCU": {
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
    "CBHU": {
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
    "FBLU": {
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
    "FCIU": {
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
    "FBIU": {
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
    "DFSU": {
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
    "DFOU": {
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
    "JTMU": {
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
    "PGXU": {
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
    "FJKU": {
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
    "FCGU": {
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
    "FCLU": {
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
    "FTAU": {
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
    "FCXU": {
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
    "FDCU": {
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
    "FNGU": {
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
    "FNTU": {
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
    "FNBU": {
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
    "YMMU": {
        type: trackingTypes.formSubmit,
        providerName: "Yang Ming",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.yangming.com/e-service/Track_Trace/track_trace_cargo_tracking.aspx" method="get" target="_blank"><input name="str" type="hidden" value=${trackingNumber}><input name="rdolType" type="hidden" value="CT"></form>`
            
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
            const formContent = `<form id="tracking-form" action="https://www.yangming.com/e-service/Track_Trace/track_trace_cargo_tracking.aspx" method="get" target="_blank"><input name="str" type="hidden" value=${trackingNumber}><input name="rdolType" type="hidden" value="CT"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "WSLU": {
        type: trackingTypes.formSubmit,
        providerName: "Westwood Shipping Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://wsl.com/Tracking/QuickAccess" method="post" target="_blank"><input name="containerNumbers" type="hidden" value=${trackingNumber}><input name="bkNumbers" type="hidden"><input name="__RequestVerificationToken" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "VLLU": {
        type: trackingTypes.formSubmit,
        providerName: "VL Logistic",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://vl-logistic.ru/tracking/index.php" method="post" target="frame-805"><input name="q" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "VOLU": {
        type: trackingTypes.formSubmit,
        providerName: "Volta",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://voltacontainerline.com/track-shipment-result/" method="get" target="frame-843"><input name="bill_id" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "VOTU": {
        type: trackingTypes.formSubmit,
        providerName: "Volta",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://voltacontainerline.com/track-shipment-result/" method="get" target="frame-843"><input name="bill_id" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "BLJU": {
        type: trackingTypes.formSubmit,
        providerName: "Unifeeder",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.unifeeder.cargoes.com/tracking" method="get" target="frame-113"><input name="ID" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "PMLU": {
        type: trackingTypes.formSubmit,
        providerName: "Unifeeder",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.unifeeder.cargoes.com/tracking" method="get" target="frame-113"><input name="ID" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "SMCU": {
        type: trackingTypes.formSubmit,
        providerName: "SM Line",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://esvc.smlines.com/smline/CUP_HOM_3301.do" method="post" target="frame-163"><input name="f_cmd" type="hidden"><input name="pagerows" type="hidden"><input name="sessLocale" type="hidden" value="en"><input name="ctgId" type="hidden"><input name="prntMnuId" type="hidden"><input name="mnuId" type="hidden"><input name="brdSeq" type="hidden"><input name="hpgLangTpCd" type="hidden"><input name="trakNoTpCdParam" type="hidden" value="C"><input name="trakNoParam" type="hidden" value="SMCU9437328"><input name="vslEngNmParam" type="hidden"><input name="vslCdParam" type="hidden"><input name="oriLocNmParam" type="hidden"><input name="modeFlgParam" type="hidden"><input name="cargoTrackingNo" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "SMLU": {
        type: trackingTypes.formSubmit,
        providerName: "Seaboard Marine",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.seaboardmarine.com/smb-equipment-track-result/" method="post" target="frame-157"><input name="eq_no" type="hidden" value=${`${trackingNumber.slice(0, 4)} ${trackingNumber.slice(4)}`}><input name="vin_no" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "SLVU": {
        type: trackingTypes.formSubmit,
        providerName: "Sea-Lead",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.sea-lead.com/track-shipment/" method="post" target="frame-323"><input name="bl_number" type="hidden"><input name="container_id" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "SIIU": {
        type: trackingTypes.formSubmit,
        providerName: "SCI",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.shipindia.com/frontcontroller/track_trace1" method="post" target="_blank"><input name="type" type="hidden" value="CT"><input name="container_no" type="hidden" value=${trackingNumber}><input name="go" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "ROBU": {
        type: trackingTypes.formSubmit,
        providerName: "Roberto Bucci",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://tfg.bucci.it/saracgi/eloq.cgi/WW_CNT" method="post" target="frame-770"><input name="modo" type="hidden" value="2"><input name="cntr" type="hidden" value=${trackingNumber}><input name="modo" type="hidden" value="2"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "PGHU": {
        type: trackingTypes.formSubmit,
        providerName: "Pasha Hawaii",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://web01.pashahawaii.com/PHLiner/Tracking" method="post" target="frame-722"><input name="SearchTerm" type="hidden" value=${trackingNumber}><input name="SearchType" type="hidden" value="2"></form>`
            
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
            const formContent = `<form id="tracking-form" action="http://www.pancon.co.kr/pan/pageLink.pcl" method="post" target="_blank"><input name="link" type="hidden" value="COM/WEB_212"><input name="I_AS_KIND" type="hidden" value="CT"><input name="BKG_NO" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "NOKU": {
        type: trackingTypes.formSubmit,
        providerName: "Nauka Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="http://www.naukalines.com/track/index.php/welcome/search_container_no" method="post" target="_blank"><input name="container_number" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "MATU": {
        type: trackingTypes.formSubmit,
        providerName: "Matson",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.matson.com/shipment-tracking.html" method="post" target="_blank"><input name="tracking" type="hidden" value="containerNumber"><input name="containerNumber" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "RSLU": {
        type: trackingTypes.formSubmit,
        providerName: "Matson",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.matson.com/shipment-tracking.html" method="post" target="_blank"><input name="tracking" type="hidden" value="containerNumber"><input name="containerNumber" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CXCU": {
        type: trackingTypes.formSubmit,
        providerName: "Matson",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.matson.com/shipment-tracking.html" method="post" target="_blank"><input name="tracking" type="hidden" value="containerNumber"><input name="containerNumber" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "HRZU": {
        type: trackingTypes.formSubmit,
        providerName: "Matson",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.matson.com/shipment-tracking.html" method="post" target="_blank"><input name="tracking" type="hidden" value="containerNumber"><input name="containerNumber" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "MLHU": {
        type: trackingTypes.formSubmit,
        providerName: "Matson",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.matson.com/shipment-tracking.html" method="post" target="_blank"><input name="tracking" type="hidden" value="containerNumber"><input name="containerNumber" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "MERU": {
        type: trackingTypes.formSubmit,
        providerName: "Mariana Express Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.mellship.com/Track" method="get" target="frame-680"><input name="type" type="hidden" value="container"><input name="text" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "MEXU": {
        type: trackingTypes.formSubmit,
        providerName: "Mariana Express Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.mellship.com/Track" method="get" target="frame-680"><input name="type" type="hidden" value="container"><input name="text" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "MCTU": {
        type: trackingTypes.formSubmit,
        providerName: "Mariana Express Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.mellship.com/Track" method="get" target="frame-680"><input name="type" type="hidden" value="container"><input name="text" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "LCUU": {
        type: trackingTypes.formSubmit,
        providerName: "Lancer Container lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://lancerline.com/statustracking" method="post" target="frame-782"><input name="track-input" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "KMBU": {
        type: trackingTypes.formSubmit,
        providerName: "Kambara Kisen",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://esvc.kambara-kisen.co.jp/clt/CUP_HOM_3301.do" method="get" target="frame-327"><input name="redir" type="hidden" value="Y"><input name="trakNoTpCdParam" type="hidden" value="C"><input name="trakNoParam" type="hidden" value=${trackingNumber}><input name="sessLocale" type="hidden" value="en"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "KCDU": {
        type: trackingTypes.formSubmit,
        providerName: "Kalypso",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://kcnshipping.com/en/tracking-2/" method="get" target="frame-904"><input name="container" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "IMTU": {
        type: trackingTypes.formSubmit,
        providerName: "Italia Marittima",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="IMTU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "LTIU": {
        type: trackingTypes.formSubmit,
        providerName: "Italia Marittima",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="IMTU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "ITXU": {
        type: trackingTypes.formSubmit,
        providerName: "Interport",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://idsng.iport.com/public/equipment_inquiry" method="get" target="_blank"><input name="utf8" type="hidden" value="✓"><input name="inquiry[equipment_numbers]" type="hidden" value=${trackingNumber}><input name="commit" type="hidden" value="Look+up+units"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "HACU": {
        type: trackingTypes.formSubmit,
        providerName: "Haian",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="http://113.160.100.137:8008/Search/SearchCont" method="post" target="_blank"><input name="Searchtxt" type="hidden" value=${trackingNumber}><input name="checkbutton" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "GLUU": {
        type: trackingTypes.formSubmit,
        providerName: "Globelink Unimar",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://globelink-unimar.com/online-yuk-takibi/" method="get" target="frame-154"><input name="trackId" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "EMCU": {
        type: trackingTypes.formSubmit,
        providerName: "Evergreen",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "HMCU": {
        type: trackingTypes.formSubmit,
        providerName: "Evergreen",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "EGHU": {
        type: trackingTypes.formSubmit,
        providerName: "Evergreen",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "EGSU": {
        type: trackingTypes.formSubmit,
        providerName: "Evergreen",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "EITU": {
        type: trackingTypes.formSubmit,
        providerName: "Evergreen",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "EISU": {
        type: trackingTypes.formSubmit,
        providerName: "Evergreen",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "UGMU": {
        type: trackingTypes.formSubmit,
        providerName: "Evergreen",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form action="https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do" method="post" target="_blank"><input name="BL" type="hidden"><input name="CNTR" type="hidden" value="EMCU9437328"><input name="bkno" type="hidden"><input name="TYPE" type="hidden" value="CNTR"><input name="NO" type="hidden" value=${trackingNumber}><input name="SEL" type="hidden" value="s_cntr"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "ESLU": {
        type: trackingTypes.formSubmit,
        providerName: "ESL",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.eslse.et/index.php#Track" method="post" target="frame-500"><input name="type" type="hidden" value="Container"><input name="selection" type="hidden" value="All"><input name="input_value" type="hidden" value=${trackingNumber}><input name="search" type="hidden" value="Search"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "ESPU": {
        type: trackingTypes.formSubmit,
        providerName: "Emirates Shipping Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.emiratesline.com/cargotrracking" method="post" target="_blank"><input name="ctid" type="hidden" value=${trackingNumber}><input name="scode" type="hidden" value="tgCQK3v3QbHHzFs6"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "ESDU": {
        type: trackingTypes.formSubmit,
        providerName: "Emirates Shipping Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.emiratesline.com/cargotrracking" method="post" target="_blank"><input name="ctid" type="hidden" value=${trackingNumber}><input name="scode" type="hidden" value="tgCQK3v3QbHHzFs6"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "DJLU": {
        type: trackingTypes.formSubmit,
        providerName: "Dongjin Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="http://esvc.djship.co.kr/gnoss/CUP_HOM_3301.do" method="post" target="_blank"><input name="f_cmd" type="hidden"><input name="pagerows" type="hidden"><input name="sessLocale" type="hidden" value="en"><input name="ctgId" type="hidden"><input name="prntMnuId" type="hidden"><input name="mnuId" type="hidden"><input name="brdSeq" type="hidden"><input name="hpgLangTpCd" type="hidden"><input name="trakNoTpCdParam" type="hidden" value="C"><input name="trakNoParam" type="hidden" value="DJLU9437328"><input name="vslEngNmParam" type="hidden"><input name="vslCdParam" type="hidden"><input name="oriLocNmParam" type="hidden"><input name="modeFlgParam" type="hidden"><input name="cargoTrackingNo" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "DLTU": {
        type: trackingTypes.formSubmit,
        providerName: "Dalreftrans",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form action="https://www.fesco.ru/en/clients/tracking/" method="get" target="_blank"><input name="codes" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CULU": {
        type: trackingTypes.formSubmit,
        providerName: "CULines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.culines.com/en/site/bill" method="get" target="_blank"><input name="reg" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CCLU": {
        type: trackingTypes.formSubmit,
        providerName: "COSCO Shipping Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://elines.coscoshipping.com/ebusiness/cargoTracking" method="get" target="_blank"><input name="trackingType" type="hidden" value="CONTAINER"><input name="number" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CSLU": {
        type: trackingTypes.formSubmit,
        providerName: "COSCO Shipping Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://elines.coscoshipping.com/ebusiness/cargoTracking" method="get" target="_blank"><input name="trackingType" type="hidden" value="CONTAINER"><input name="number" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CSNU": {
        type: trackingTypes.formSubmit,
        providerName: "COSCO Shipping Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://elines.coscoshipping.com/ebusiness/cargoTracking" method="get" target="_blank"><input name="trackingType" type="hidden" value="CONTAINER"><input name="number" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CVTU": {
        type: trackingTypes.formSubmit,
        providerName: "COSCO Shipping Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://elines.coscoshipping.com/ebusiness/cargoTracking" method="get" target="_blank"><input name="trackingType" type="hidden" value="CONTAINER"><input name="number" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "OERU": {
        type: trackingTypes.formSubmit,
        providerName: "COSCO Shipping Lines",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://elines.coscoshipping.com/ebusiness/cargoTracking" method="get" target="_blank"><input name="trackingType" type="hidden" value="CONTAINER"><input name="number" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CMAU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CGMU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "ECMU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "MMCU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "AMCU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "DVRU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "OTAU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CMNU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "STMU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "OPDU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "SMUU": {
        type: trackingTypes.formSubmit,
        providerName: "CMA CGM",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value="${trackingNumber}"><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CNCU": {
        type: trackingTypes.formSubmit,
        providerName: "CNC",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.cnc-line.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "PRGU": {
        type: trackingTypes.formSubmit,
        providerName: "CCIS",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "CINU": {
        type: trackingTypes.formSubmit,
        providerName: "CCIS",
        getTrackingInfo: (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                
                form && form.submit()
            }
        }
    },
    "FFLU": {
        type: trackingTypes.api,
        providerName: "Fair freight",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.post(`https://www.fairfreight.com/tracking_service.php`,{
                    trackingNumber: trackingNumber});
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
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
    "ARKU": {
        type: trackingTypes.api,
        providerName: "Arkas",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.get(`https://webtracking.arkasline.com.tr/api/request/Get?controllerMethod=webtracking%2api%2shipmenttracking%2GetDocumentationAsync&prms=%7B%22key%22:%22${trackingNumber}%22%7D`);
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "FCCU": {
        type: trackingTypes.formSubmit,
        providerName: "FESCO",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.fesco.ru/en/clients/tracking/" method="get" target="_blank"><input name="codes" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "FESU": {
        type: trackingTypes.formSubmit,
        providerName: "FESCO",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.fesco.ru/en/clients/tracking/" method="get" target="_blank"><input name="codes" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "CSFU": {
        type: trackingTypes.formSubmit,
        providerName: "Containerships",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "CSOU": {
        type: trackingTypes.formSubmit,
        providerName: "Containerships",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "CZLU": {
        type: trackingTypes.formSubmit,
        providerName: "Containerships",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "KLCU": {
        type: trackingTypes.formSubmit,
        providerName: "Containerships",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "ANNU": {
        type: trackingTypes.formSubmit,
        providerName: "ANL",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.anl.com.au/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "CMLU": {
        type: trackingTypes.formSubmit,
        providerName: "Camellia Line",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="http://183.111.65.71/clt/CUP_HOM_3301.do" method="post" target="_blank"><input name="sessLocale" type="hidden" value="en"><input name="trakNoTpCdParam" type="hidden" value="C"><input name="trakNoParam" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "CAKU": {
        type: trackingTypes.formSubmit,
        providerName: "Camellia Line",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="http://183.111.65.71/clt/CUP_HOM_3301.do" method="post" target="_blank"><input name="sessLocale" type="hidden" value="en"><input name="trakNoTpCdParam" type="hidden" value="C"><input name="trakNoParam" type="hidden" value=${trackingNumber}></form>`
            
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
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "NEPU": {
        type: trackingTypes.formSubmit,
        providerName: "APL",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "NOSU": {
        type: trackingTypes.formSubmit,
        providerName: "APL",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "NOLU": {
        type: trackingTypes.formSubmit,
        providerName: "APL",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "APZU": {
        type: trackingTypes.formSubmit,
        providerName: "APL",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "APRU": {
        type: trackingTypes.formSubmit,
        providerName: "APL",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "APHU": {
        type: trackingTypes.formSubmit,
        providerName: "APL",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.apl.com/ebusiness/tracking/search" method="post" target="_blank"><input name="SearchViewModel.Reference" type="hidden" value=${trackingNumber}><input name="SearchViewModel.FromHome" type="hidden" value="true"><input name="SearchViewModel.SearchBy" type="hidden" value="Container"><input name="g-recaptcha-response" type="hidden"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "CPOU": {
        type: trackingTypes.formSubmit,
        providerName: "Cargo Partner",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://public-tracking.cargo-partner.com/" method="get" target="_blank"><input name="search" type="hidden" value=${trackingNumber}></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "BWLU": {
        type: trackingTypes.formSubmit,
        providerName: "Blue Water Lines",
        getTrackingInfo: async (trackingNumber: string) => {
            const formContent = `<form id="tracking-form" action="https://www.bluewaterlines.net/Login/BLCntrTracking" method="get" target="frame-834"><input name="RefType" type="hidden" value="Container"><input name="RefID" type="hidden" value=${trackingNumber}><input name="AL" type="hidden" value="0"></form>`
            
            const formContainer = document.getElementById("form-container");
            if (formContainer) {
                formContainer.innerHTML = formContent
                const form = document.getElementById("tracking-form") as HTMLFormElement
                form && form.submit()
            }
        }
    },
    "CSYU": {
        type: trackingTypes.api,
        providerName: "Cordelia Container Shipping Line",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.get(`https://www.cordelialine.com/container-tracking/?contno=${trackingNumber}`,{headers:{
                    'Access-Control-Allow-Origin': '*',
                }});
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "BURU": {
        type: trackingTypes.api,
        providerName: "BAL",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.get(`http://lcec.lclog.cn/cargo/NewCargotracking?blno=${trackingNumber}&selectstate=CNTRNO`);
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "BSRU": {
        type: trackingTypes.api,
        providerName: "BAL",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.get(`http://lcec.lclog.cn/cargo/NewCargotracking?blno=${trackingNumber}&selectstate=CNTRNO`);
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "BLLU": {
        type: trackingTypes.api,
        providerName: "Blue Lines",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const response = await axios.options(`https://dolphin-app-88elw.ondigitalocean.app/api/v1.0/container-track/${trackingNumber}`);
                return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "BMSU": {
        type: trackingTypes.api,
        providerName: "BMC Lines",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const postData = new URLSearchParams();
                postData.append('container', trackingNumber);
                postData.append('blno', '');

                const axiosConfig = {
                  headers: {
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                    'accept-language': 'en-US,en;q=0.8',
                    'cache-control': 'max-age=0',
                    'content-type': 'application/x-www-form-urlencoded',
                    'sec-gpc': '1',
                    'upgrade-insecure-requests': '1',
                  },
                };
                const response = await axios.post(`http://www.whizecargo.com/clientbmc/viewtracking.php`, 
                postData,
                axiosConfig
                );
                 return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "BHCU": {
        type: trackingTypes.api,
        providerName: "Bridgehead",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const postData = new URLSearchParams();
                postData.append('contNO', trackingNumber);
                postData.append('Submit', 'Search');
                postData.append('FindCont', '1');

                const axiosConfig = {
                    headers: {
                      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                      'accept-language': 'en-US,en;q=0.5',
                      'cache-control': 'max-age=0',
                      'content-type': 'application/x-www-form-urlencoded',
                      'sec-ch-ua': '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
                      'sec-ch-ua-mobile': '?0',
                      'sec-ch-ua-platform': '"Windows"',
                      'sec-fetch-dest': 'iframe',
                      'sec-fetch-mode': 'navigate',
                      'sec-fetch-site': 'same-origin',
                      'sec-fetch-user': '?1',
                      'sec-gpc': '1',
                      'upgrade-insecure-requests': '1',
                    },
                  };
                const response = await axios.post(`http://www.whizecargo.com/clientbmc/viewtracking.php`, 
                postData,
                axiosConfig
                );
                 return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "MBIU": {
        type: trackingTypes.api,
        providerName: "Bridgehead",
        getTrackingInfo: async (trackingNumber: string) => {
            try {
                const postData = new URLSearchParams();
                postData.append('contNO', trackingNumber);
                postData.append('Submit', 'Search');
                postData.append('FindCont', '1');

                const axiosConfig = {
                    headers: {
                      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                      'accept-language': 'en-US,en;q=0.5',
                      'cache-control': 'max-age=0',
                      'content-type': 'application/x-www-form-urlencoded',
                      'sec-ch-ua': '"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"',
                      'sec-ch-ua-mobile': '?0',
                      'sec-ch-ua-platform': '"Windows"',
                      'sec-fetch-dest': 'iframe',
                      'sec-fetch-mode': 'navigate',
                      'sec-fetch-site': 'same-origin',
                      'sec-fetch-user': '?1',
                      'sec-gpc': '1',
                      'upgrade-insecure-requests': '1',
                    },
                  };
                const response = await axios.post(`http://www.whizecargo.com/clientbmc/viewtracking.php`, 
                postData,
                axiosConfig
                );
                 return response.data
            } catch (error) {
                console.log("Error while loading", error)
            }
        }
    },
    "WDSU": {
        type: trackingTypes.manual,
        providerName: "World Direct Shipping ",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.worlddirectshipping.com/container-tracking.php")
        }
    },
    "WTLU": {
        type: trackingTypes.manual,
        providerName: "White Line",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("http://www.wll.ae/ecomonline/")
        }
    },
    "VASU": {
        type: trackingTypes.manual,
        providerName: "VASI Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.vasishipping.com/tracking.html")
        }
    },
    "CRLU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "INNU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "GIPU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "GAOU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "SDDU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "MTSU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "OTPU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "GSPU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "CTWU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "WBPU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "SZLU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "MGNU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "IRNU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "INKU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "INBU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "IPXU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "DRYU": {
        type: trackingTypes.manual,
        providerName: "SeaCube",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://seacube.intermodalportal.com/")
        }
    },
    "GESU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "HNPU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "CXDU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "CXRU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "GCEU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "XTRU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "SPLU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "EMAU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "SEKU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "DNAU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "SBOU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "HJMU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "SCEU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "SCXU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "ITLU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "CLOU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "SEGU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "CXTU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "CXSU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "CUCU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "CRTU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "GSTU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "SCZU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "CRSU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "IEAU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "CRXU": {
        type: trackingTypes.manual,
        providerName: "Seaco",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://newseaweb.seacoglobal.com/unitenq")
        }
    },
    "SHKU": {
        type: trackingTypes.manual,
        providerName: "Sea Hawk Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("http://online.shal.asia/")
        }
    },
    "SHAU": {
        type: trackingTypes.manual,
        providerName: "Sea Hawk Lines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("http://online.shal.asia/")
        }
    },
    "SANU": {
        type: trackingTypes.manual,
        providerName: "Samskip",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://my.samskip.com/")
        }
    },
    "COCU": {
        type: trackingTypes.manual,
        providerName: "Samskip",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://my.samskip.com/")
        }
    },
    "GNSU": {
        type: trackingTypes.manual,
        providerName: "Samskip",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://my.samskip.com/")
        }
    },
    "SWLU": {
        type: trackingTypes.manual,
        providerName: "Samskip",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://my.samskip.com/")
        }
    },
    "VDMU": {
        type: trackingTypes.manual,
        providerName: "Samskip",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://my.samskip.com/")
        }
    },
    "NPLU": {
        type: trackingTypes.manual,
        providerName: "Saigon Newport Corporation",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://eport.saigonnewport.com.vn/ContainerInformation")
        }
    },
    "RCOU": {
        type: trackingTypes.manual,
        providerName: "Royal Cargo",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://rocmnl.webtracker.wisegrid.net/")
        }
    },
    "STXU": {
        type: trackingTypes.manual,
        providerName: "Pan Ocean",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://container.panocean.com/")
        }
    },
    "POLU": {
        type: trackingTypes.manual,
        providerName: "Pan Ocean",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://container.panocean.com/")
        }
    },
    "PDLU": {
        type: trackingTypes.manual,
        providerName: "NPDL",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://nepprd.webtracker.wisegrid.net/")
        }
    },
    "NLHU": {
        type: trackingTypes.manual,
        providerName: "NPDL",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://nepprd.webtracker.wisegrid.net/")
        }
    },
    "PPSU": {
        type: trackingTypes.manual,
        providerName: "NPDL",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://nepprd.webtracker.wisegrid.net/")
        }
    },
    "NPDU": {
        type: trackingTypes.manual,
        providerName: "NPDL",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://nepprd.webtracker.wisegrid.net/")
        }
    },
    "MKLU": {
        type: trackingTypes.manual,
        providerName: "MEDKON LINES",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://tracking.medkonlines.com/")
        }
    },
    "GTIU": {
        type: trackingTypes.manual,
        providerName: "Mediterranean Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.msc.com/en/track-a-shipment")
        }
    },
    "MSYU": {
        type: trackingTypes.manual,
        providerName: "Mediterranean Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.msc.com/en/track-a-shipment")
        }
    },
    "MSDU": {
        type: trackingTypes.manual,
        providerName: "Mediterranean Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.msc.com/en/track-a-shipment")
        }
    },
    "MSNU": {
        type: trackingTypes.manual,
        providerName: "Mediterranean Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.msc.com/en/track-a-shipment")
        }
    },
    "MSZU": {
        type: trackingTypes.manual,
        providerName: "Mediterranean Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.msc.com/en/track-a-shipment")
        }
    },
    "MSPU": {
        type: trackingTypes.manual,
        providerName: "Mediterranean Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.msc.com/en/track-a-shipment")
        }
    },
    "MXCU": {
        type: trackingTypes.manual,
        providerName: "Maxicon Container Line",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://maxerp.ramcoes.com/maxiconline_live/hub/index.html?RVWRTQS_REQID=0a15d52f-8559-42a6-828d-475efbc9dc71&bl=en-us&_dc=1698386695529")
        }
    },
    "MOCU": {
        type: trackingTypes.manual,
        providerName: "MACS",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.macship.com/E-BUSINESS/Tracking-And-Tracing")
        }
    },
    "KMTU": {
        type: trackingTypes.manual,
        providerName: "Korea Marine Transport",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.ekmtc.com/index.html#/cargo-tracking")
        }
    },
    "IPIU": {
        type: trackingTypes.manual,
        providerName: "Iris Logistics",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://rocmnl.webtracker.wisegrid.net/")
        }
    },
    "GCXU": {
        type: trackingTypes.manual,
        providerName: "Global Container International",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://gcx.intermodalportal.com/")
        }
    },
    "GLLU": {
        type: trackingTypes.manual,
        providerName: "GCL",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("http://www.containers.ru/en/node/272")
        }
    },
    "FOCU": {
        type: trackingTypes.manual,
        providerName: "Focus Trucking",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://focustrucking.com/trace/")
        }
    },
    "FLXU": {
        type: trackingTypes.manual,
        providerName: "FlexiVan",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://flexivan.com/chassis-lookup/")
        }
    },
    "FLCU": {
        type: trackingTypes.manual,
        providerName: "Finnlines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.gnet.grimaldi-eservice.com/GNET/Pages_GAtlas/WFContainerTracking")
        }
    },
    "FLRU": {
        type: trackingTypes.manual,
        providerName: "Finnlines",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.gnet.grimaldi-eservice.com/GNET/Pages_GAtlas/WFContainerTracking")
        }
    },
    "GCNU": {
        type: trackingTypes.manual,
        providerName: "Grimaldi",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.gnet.grimaldi-eservice.com/GNET/Pages_GAtlas/WFContainerTracking")
        }
    },
    "SLZU": {
        type: trackingTypes.manual,
        providerName: "CS Leasing",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.cslintermodal.com/containerlookup/")
        }
    },
    "CMCU": {
        type: trackingTypes.manual,
        providerName: "Crowley",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.crowley.com/liner-shipment-tracking/")
        }
    },
    "SEFU": {
        type: trackingTypes.manual,
        providerName: "Crowley",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.crowley.com/liner-shipment-tracking/")
        }
    },
    "CNRU": {
        type: trackingTypes.manual,
        providerName: "Canadian National Railway",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www.cn.ca/en/")
        }
    },
    "CPPU": {
        type: trackingTypes.manual,
        providerName: "Canadian Pacific Railway",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://www8.cpr.ca/cpcustomerstation")
        }
    },
    "BMOU": {
        type: trackingTypes.manual,
        providerName: "Beacon Intermodal",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://beacon.intermodalportal.com/")
        }
    },
    "BENU": {
        type: trackingTypes.manual,
        providerName: "Beacon Intermodal",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://beacon.intermodalportal.com/")
        }
    },
    "BEAU": {
        type: trackingTypes.manual,
        providerName: "Beacon Intermodal",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://beacon.intermodalportal.com/")
        }
    },
    "BSIU": {
        type: trackingTypes.manual,
        providerName: "Blue Sky",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://bluesky.intermodalportal.com/")
        }
    },
    "SKIU": {
        type: trackingTypes.manual,
        providerName: "Blue Sky",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://bluesky.intermodalportal.com/")
        }
    },
    "MBFU": {
        type: trackingTypes.manual,
        providerName: "Carpenters Shipping",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://csl.quantumbso.com/TRACKSHIPMENT/")
        }
    },
    "CARU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "CATU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "ARDU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "ARTU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "CORU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "LGRU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "LGEU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "MANU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "MARU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "PSCU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "SCSU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "TRTU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "WSCU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "WEDU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "CUBU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "CAEU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "HAKU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "ALNU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "CAGU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "RLXU": {
        type: trackingTypes.manual,
        providerName: "CARU containers",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://portal.carucontainers.com/scripts/caruweb02.wsc/WService=caru/system/web/sp-web-menu.r?program=DP.WEB-UNIT_INQUIRY&clearsearch=yes")
        }
    },
    "DAHU": {
        type: trackingTypes.manual,
        providerName: "DahNay Logistics",
        getTrackingInfo: (trackingNumber: string) => {
            navigator && navigator.clipboard && navigator.clipboard.writeText(trackingNumber)
            window.open("https://d36prd.webtracker.wisegrid.net/")
        }
    },
}
