package malinoski.rest.notification;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "notification")
public class Notification {

    private Integer id;
    private String message;

    /**
     * Default no-args constructor needed for jaxb
     */
    public Notification() {
    }

    public Notification(Integer id, String message) {
        this.id = id;
        this.message = message;
    }

    @XmlElement(name = "id")
    public Integer getId() {
        return id;
    }

    @XmlElement(name = "message")
    public String getMessage() {
        return message;
    }
}