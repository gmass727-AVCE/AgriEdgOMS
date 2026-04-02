# AgriEdge-OMS
public class AgriEdgeOrderService {

    public static void processOrders(List<Order> orderList) {

        Set<Id> orderIds = new Set<Id>();
        for (Order o : orderList) {
            if (o.Status == 'Draft') {
                orderIds.add(o.Id);
            }
        }

        if (orderIds.isEmpty()) return;

        // Fetch Order Items
        List<OrderItem> orderItems = [
            SELECT Id, OrderId, Quantity, PricebookEntry.Product2Id
            FROM OrderItem
            WHERE OrderId IN :orderIds
        ];

        // Collect Product IDs
        Set<Id> productIds = new Set<Id>();
        for (OrderItem oi : orderItems) {
            productIds.add(oi.PricebookEntry.Product2Id);
        }

        // Fetch Products
        Map<Id, Product2> productMap = new Map<Id, Product2>(
            [SELECT Id, Name, Quantity__c FROM Product2 WHERE Id IN :productIds]
        );

        List<Product2> productsToUpdate = new List<Product2>();
        List<Order> ordersToUpdate = new List<Order>();

        for (Order ord : orderList) {

            if (ord.Status == 'Draft') {
                ord.Status = 'Activated';
                ordersToUpdate.add(ord);
            }
        }

        for (OrderItem item : orderItems) {
            Product2 prod = productMap.get(item.PricebookEntry.Product2Id);

            if (prod != null) {
                if (prod.Quantity__c >= item.Quantity) {
                    prod.Quantity__c -= item.Quantity;
                    productsToUpdate.add(prod);
                } else {
                    throw new AuraHandledException(
                        'Insufficient stock for ' + prod.Name
                    );
                }
            }
        }

        if (!ordersToUpdate.isEmpty()) update ordersToUpdate;
        if (!productsToUpdate.isEmpty()) update productsToUpdate;
    }
}
