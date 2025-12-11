//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

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


