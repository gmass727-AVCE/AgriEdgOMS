@isTest
public class OrderServiceTest {

    @isTest
    static void testOrderFlow() {

        // Create Test Inventory
        Inventory__c inv = new Inventory__c(
            Product__c = 'TestProduct',
            Stock__c = 100
        );
        insert inv;

        // Create Test Order
        Order__c ord = new Order__c(
            Name = 'Test Order',
            Product__c = inv.Product__c,
            Quantity__c = 5
        );

        Test.startTest();
        insert ord;
        Test.stopTest();

        // Verify Order Status
        Order__c result = [SELECT Status__c FROM Order__c WHERE Id = :ord.Id];
        System.assertEquals('Processing', result.Status__c);
    }
}
