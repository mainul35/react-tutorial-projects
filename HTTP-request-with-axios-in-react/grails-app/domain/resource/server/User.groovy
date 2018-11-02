package resource.server

class User {

    Long id
    String name
    String email
    String password

    Date created
    Date updated
    static constraints = {
        name nullable: true
        email nullable: false, email: true
        password nullable: false
    }
}
