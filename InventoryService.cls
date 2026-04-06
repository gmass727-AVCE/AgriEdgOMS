public with sharing class InventoryService {

    public static void updateInventory(List<Order__c> orders) {

        Map<Id, Inventory__c> inventoryMap = new Map<Id, Inventory__c>();

        for (Inventory__c inv : [SELECT Id, Product__c, Stock__c FROM Inventory__c]) {
            inventoryMap.put(inv.Product__c, inv);
        }

        List<Inventory__c> updateList = new List<Inventory__c>();

        for (Order__c ord : orders) {
            if (inventoryMap.containsKey(ord.Product__c)) {
                Inventory__c inv = inventoryMap.get(ord.Product__c);
                inv.Stock__c = inv.Stock__c - ord.Quantity__c;
                updateList.add(inv);
            }
        }

        if (!updateList.isEmpty()) {
            update updateList;
        }
    }
}
