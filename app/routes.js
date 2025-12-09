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
        response.redirect(folder_route_v1+'n1?route=child')
    }
})