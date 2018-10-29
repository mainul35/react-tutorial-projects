package resource.server

class Article {

    Long id
    String title
    String body

    User writtenBy

    Date created
    Date updated

    static belongsTo = User

    static constraints = {
        title nullable: false
        body nullable: false
        writtenBy nullable: false
    }
}
