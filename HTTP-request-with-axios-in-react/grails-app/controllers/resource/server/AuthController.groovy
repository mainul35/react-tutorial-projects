package resource.server

import grails.converters.JSON
import org.springframework.web.bind.annotation.RestController

@RestController
class AuthController {
    static responseFormats = ['json', 'xml']
    static allowedMethods = [login: 'POST']
    def index() { }

    def login() {
        def cred = new String(params.data.decodeBase64())
        cred = JSON.parse(cred)
        respond([msg: 'Welcome', salutation:cred.email])
    }
}
