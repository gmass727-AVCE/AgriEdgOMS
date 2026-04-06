public with sharing class NotificationService {

    public static void sendOrderNotification(List<Order__c> orders) {

        List<Messaging.SingleEmailMessage> emailList = new List<Messaging.SingleEmailMessage>();

        for (Order__c ord : orders) {
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            mail.setToAddresses(new String[] {'user@example.com'});
            mail.setSubject('New Order: ' + ord.Name);
            mail.setPlainTextBody('Order created successfully and is under processing.');
            emailList.add(mail);
        }

        if (!emailList.isEmpty()) {
            Messaging.sendEmail(emailList);
        }
    }
}
