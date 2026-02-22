// NexusAPI Settings - by Rufino
global.creator = 'Rufino'
global.apiname = 'NexusAPI'
global.listkey = ["key-nexus", "key-rufino"]

global.lolkey = 'GataDiosV2'
global.botkey = 'Admin'

global.loghandler = {
    error: {
        status: false,
        code: 503,
        message: '[!] Service Unavailable - NexusAPI is under maintenance',
        maintained_by: `${creator}`
    },
    notapikey: {
        status: false,
        code: 403,
        message: '[!] Forbidden - Missing apikey parameter',
        maintained_by: `${creator}`
    },
    noturl: {
        status: false,
        code: 403,
        message: '[!] Forbidden - Missing url parameter',
        maintained_by: `${creator}`
    },
    notq: {
        status: false,
        code: 404,
        message: '[!] Not Found - Missing q parameter',
        maintained_by: `${creator}`
    },
    notid: {
        status: false,
        code: 403,
        message: '[!] Forbidden - Missing id parameter',
        maintained_by: `${creator}`
    },
    notusername: {
        status: false,
        code: 403,
        message: '[!] Forbidden - Missing username parameter',
        maintained_by: `${creator}`
    },
    notserver: {
        status: false,
        code: 403,
        message: '[!] Forbidden - Missing server parameter',
        maintained_by: `${creator}`
    },
    nottext: {
        status: false,
        code: 404,
        message: '[!] Not Found - Missing text parameter',
        maintained_by: `${creator}`
    },
    nottext1: {
        status: false,
        code: 404,
        message: '[!] Not Found - Missing text1 parameter',
        maintained_by: `${creator}`
    },
    nottext2: {
        status: false,
        code: 403,
        message: '[!] Forbidden - Missing text2 parameter',
        maintained_by: `${creator}`
    },
    nottext3: {
        status: false,
        code: 403,
        message: '[!] Forbidden - Missing text3 parameter',
        maintained_by: `${creator}`
    }
}
