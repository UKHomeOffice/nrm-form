//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// __     __            _               _ 
// \ \   / /__ _ __ ___(_) ___  _ __   / |
//  \ \ / / _ \ '__/ __| |/ _ \| '_ \  | |
//   \ V /  __/ |  \__ \ | (_) | | | | | |
//    \_/ \___|_|  |___/_|\___/|_| |_| |_|

folder_route_v1 = '/v/1/'


router.post('/route-v-1/10', function(request, response) {
    var value = request.session.data['10']
    if (value == 'No'){ 
        response.redirect(folder_route_v1+'12?route=adult')
    } else {
        response.redirect(folder_route_v1+'11?route=child')
    }
})

router.post('/route-v-1/n2', function(request, response) {
    var value = request.session.data['e2e']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v1+'13')
    } else {
        response.redirect(folder_route_v1+'pt-bridge')
    }
})

router.post('/route-v-1/section-3', function(request, response) {
    var value = request.session.data['route']
    if (value == 'adult'){ 
        response.redirect(folder_route_v1+'45') // Adult form journey, part 1
    } else {
        response.redirect(folder_route_v1+'n4') // Child form journey, part 1
    }
})

router.post('/route-v-1/56', function(request, response) {
    var value = request.session.data['route']
    if (value == 'adult'){ 
        response.redirect(folder_route_v1+'pt-end') // Adult form journey, part 2
    } else {
        response.redirect(folder_route_v1+'n9') // Child form journey, part 2
    }
})

router.post('/route-v-1/pt-end', function(request, response) {
    var value = request.session.data['e2e']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v1+'60')
    } else {
        response.redirect(folder_route_v1+'pt-end')
    }
})

router.post('/route-v-1/45', function(request, response) {
    var value = request.session.data['45']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v1+'pt-bridge-2')
    } else {
        response.redirect(folder_route_v1+'pt-end')
    }
})



// __     __            _               ____  
// \ \   / /__ _ __ ___(_) ___  _ __   |___ \ 
//  \ \ / / _ \ '__/ __| |/ _ \| '_ \    __) |
//   \ V /  __/ |  \__ \ | (_) | | | |  / __/ 
//    \_/ \___|_|  |___/_|\___/|_| |_| |_____|


folder_route_v2 = '/v/2/'


router.post('/route-v-2/10', function(request, response) {
    var value = request.session.data['10']
    if (value == 'No'){ 
        response.redirect(folder_route_v2+'12?route=adult')
    } else {
        response.redirect(folder_route_v2+'n1?route=child')
    }
})

router.post('/route-v-2/n2', function(request, response) {
    var value = request.session.data['e2e']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v2+'13')
    } else {
        response.redirect(folder_route_v2+'pt-bridge')
    }
})

router.post('/route-v-2/section-3', function(request, response) {
    var value = request.session.data['route']
    if (value == 'adult'){ 
        response.redirect(folder_route_v2+'45') // Adult form journey, part 1
    } else {
        response.redirect(folder_route_v2+'n4') // Child form journey, part 1
    }
})

router.post('/route-v-2/56', function(request, response) {
    var value = request.session.data['route']
    if (value == 'adult'){ 
        response.redirect(folder_route_v2+'pt-end') // Adult form journey, part 2
    } else {
        response.redirect(folder_route_v2+'n9') // Child form journey, part 2
    }
})

router.post('/route-v-2/n9', function(request, response) {
    var value = request.session.data['n9']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v2+'n10')
    } else {
        response.redirect(folder_route_v2+'n5?fopr=none')
    }
})
router.post('/route-v-2/n11', function(request, response) {
    var value = request.session.data['n11']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v2+'n12?fopr=yes')
    } else {
        response.redirect(folder_route_v2+'n12?fopr=no')
    }
})


router.post('/route-v-2/pt-end', function(request, response) {
    var value = request.session.data['e2e']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v2+'60')
    } else {
        response.redirect(folder_route_v2+'pt-end')
    }
})

router.post('/route-v-2/45', function(request, response) {
    var value = request.session.data['45']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v2+'pt-bridge-2')
    } else {
        response.redirect(folder_route_v2+'pt-end')
    }
})



// __     __            _               _____ 
// \ \   / /__ _ __ ___(_) ___  _ __   |___ / 
//  \ \ / / _ \ '__/ __| |/ _ \| '_ \    |_ \ 
//   \ V /  __/ |  \__ \ | (_) | | | |  ___) |
//    \_/ \___|_|  |___/_|\___/|_| |_| |____/ 
// https://www.asciiart.eu/text-to-ascii-art


folder_route_v3 = '/v/3/'


router.post('/route-v-3/10', function(request, response) {
    var value = request.session.data['10']
    var nation = request.session.data['9']
    if (value == 'No'){ 
        response.redirect(folder_route_v3+'12?route=adult')
    } else if (nation == 'Northern Ireland'){ 
        response.redirect(folder_route_v3+'11-ni?route=child&la=trust')
    } else {
        response.redirect(folder_route_v3+'11?route=child&la=local authority')
    }
})

router.post('/route-v-3/n2', function(request, response) {
    var value = request.session.data['e2e']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'13')
    } else {
        response.redirect(folder_route_v3+'pt-bridge')
    }
})

router.post('/route-v-3/14', function(request, response) {
    var value = request.session.data['14']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'15b')
    } else {
        response.redirect(folder_route_v3+'15a')
    }
})

router.post('/route-v-3/18', function(request, response) {
    var value = request.session.data['e2e']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'19')
    } else {
        response.redirect(folder_route_v3+'n3')
    }
})
router.post('/route-v-3/19', function(request, response) {
    var value = request.session.data['19']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'20b')
    } else {
        response.redirect(folder_route_v3+'20a')
    }
})

router.post('/route-v-3/23', function(request, response) {
    var value = request.session.data['19']
    if (value == 'No'){ 
        response.redirect(folder_route_v3+'24')
    } else {
        response.redirect(folder_route_v3+'25')
    }
})

router.post('/route-v-3/30', function(request, response) {
    var value = request.session.data['30']
    if (value == 'Overseas'){ 
        response.redirect(folder_route_v3+'32')
    } else {
        response.redirect(folder_route_v3+'31')
    }
})

router.post('/route-v-3/35', function(request, response) {
    var value = request.session.data['35']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'36')
    } else {
        response.redirect(folder_route_v3+'38')
    }
})
router.post('/route-v-3/40', function(request, response) {
    var value = request.session.data['40']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'41')
    } else {
        response.redirect(folder_route_v3+'n3')
    }
})
router.post('/route-v-3/n3', function(request, response) {
    var value = request.session.data['e2e']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'42')
    } else {
        response.redirect(folder_route_v3+'n4')
    }
})

router.post('/route-v-3/43', function(request, response) {
    var value = request.session.data['route']
    if (value == 'adult'){ 
        response.redirect(folder_route_v3+'45') // Adult form journey, part 1
    } else {
        response.redirect(folder_route_v3+'n4') // Child form journey, part 1
    }
})

router.post('/route-v-3/45', function(request, response) {
    var value = request.session.data['45']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'47')
    } else if (value == 'Unable') {
        response.redirect(folder_route_v3+'46')
    } else {
        response.redirect(folder_route_v3+'46')
    }
})

router.post('/route-v-3/47', function(request, response) {
    var value = request.session.data['47']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'48')
    } else {
        response.redirect(folder_route_v3+'49')
    }
})

router.post('/route-v-3/section-3', function(request, response) {
    var value = request.session.data['route']
    if (value == 'adult'){ 
        response.redirect(folder_route_v3+'45') // Adult form journey, part 1
    } else {
        response.redirect(folder_route_v3+'n4') // Child form journey, part 1
    }
})

router.post('/route-v-3/n7', function(request, response) {
    var value = request.session.data['e2e']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'49')
    } else {
        response.redirect(folder_route_v3+'pt-bridge-2')
    }
})

router.post('/route-v-3/56', function(request, response) {
    var value = request.session.data['route']
    if (value == 'adult'){ 
        response.redirect(folder_route_v3+'57') // Adult form journey, part 2
    } else {
        response.redirect(folder_route_v3+'n9') // Child form journey, part 2
    }
})
router.post('/route-v-3/57', function(request, response) {
    var value = request.session.data['57']
    if (value == 'Potential victim'){ 
        response.redirect(folder_route_v3+'59') // Adult form journey, part 2
    } else {
        response.redirect(folder_route_v3+'58') // Child form journey, part 2
    }
})

router.post('/route-v-3/56', function(request, response) {
    var value = request.session.data['route']
    if (value == 'adult'){ 
        response.redirect(folder_route_v3+'57') // Adult form journey, part 2
    } else {
        response.redirect(folder_route_v3+'n9') // Child form journey, part 2
    }
})

router.post('/route-v-3/n9', function(request, response) {
    var value = request.session.data['n9']
    if (value == "I don't know"){ 
        response.redirect(folder_route_v3+'n13?pr=dont-know')
    } else {
        response.redirect(folder_route_v3+'n11?pr='+value)
    }
})
// router.post('/route-v-3/n11', function(request, response) {
//     var value = request.session.data['n11']
//     if (value == 'Yes'){ 
//         response.redirect(folder_route_v3+'n12?fopr=yes')
//     } else {
//         response.redirect(folder_route_v3+'n12?fopr=no')
//     }
// })


router.post('/route-v-3/pt-end', function(request, response) {
    var value = request.session.data['e2e']
    if (value == 'Yes'){ 
        response.redirect(folder_route_v3+'60')
    } else {
        response.redirect(folder_route_v3+'pt-end')
    }
})






//  _____      _____ 
// | ____|___ |  ___|
// |  _| / _ \| |_   
// | |__| (_) |  _|  
// |_____\___/|_|    
