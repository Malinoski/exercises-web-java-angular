package malinoski.rest.notification;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("/notifications")
public class NotificationRestService {

    @GET
    @Produces(MediaType.APPLICATION_XML)
    public List<Notification> fetchAll() {
        // fetch all notifications
        List<Notification> notifications = new ArrayList<Notification>();
        notifications.add(new Notification(1, "New user created"));
        notifications.add(new Notification(2, "New order created"));
        
        return notifications;
    }
    
    @GET
    @Path("{id: \\d+}")
    @Produces(MediaType.APPLICATION_XML)
    public Notification fetchBy(@PathParam("id") int id) {
        // fetch notification by id
        return new Notification(id, "Rise and shine.");
    }

    @POST
    @Produces(MediaType.APPLICATION_XML)
    @Consumes(MediaType.APPLICATION_XML)
    public Notification create(Notification notification) {
        // create notification
        return notification;
    }

    @PUT
    @Consumes(MediaType.APPLICATION_XML)
    public void update(Notification notification) {
        // update notification
    }

    @DELETE
    @Path("{id: \\d+}")
    @Produces(MediaType.APPLICATION_XML)
    public void delete(@PathParam("id") int id) {
        // deleting notification
    }

}