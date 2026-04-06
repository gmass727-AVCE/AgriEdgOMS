trigger OrderTrigger on Order__c (after insert) {

    if (Trigger.isAfter && Trigger.isInsert) {
        List<Order__c> newOrders = Trigger.new;

        OrderService.processNewOrders(newOrders);
        InventoryService.updateInventory(newOrders);
        NotificationService.sendOrderNotification(newOrders);
    }
}
