package resource.server


class RequestInterceptor {

    boolean before() {
        header( "Access-Control-Allow-Origin", "http://localhost:3000" )
        header( "Access-Control-Allow-Credentials", "true" )
        header( "Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE" )
        header( "Access-Control-Max-Age", "3600" )
        true
    }

    boolean after() { true }

    void afterView() {
        // no-op
    }
}
