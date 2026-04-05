public with sharing class OrderService {

    public static void processNewOrders(List<Order__c> orders) {
        List<Task> taskList = new List<Task>();

        for (Order__c ord : orders) {
            Task t = new Task();
            t.Subject = 'Process Order: ' + ord.Name;
            t.WhatId = ord.Id;
            t.Status = 'Not Started';
            t.Priority = 'High';
            taskList.add(t);

            ord.Status__c = 'Processing';
        }

        if (!taskList.isEmpty()) {
            insert taskList;
        }

        update orders;
    }
}
