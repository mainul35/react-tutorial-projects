package resource.server

class Comment {

    Long id
    String body
    Article article
    Date created
    Date updated

    static belongsTo = Article

    static constraints = {
        body nullable: false
        article nullable: false
    }
}
