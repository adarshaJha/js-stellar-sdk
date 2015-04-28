
/**
* A TransactionPage contains the results of a transaction collection query,
* such as transactions or account_transactions. It holds a list
* of transaction results, which are transaction json objects. The
* TransactionPage can be passed as a parameter to the Server.nextTransactionPage()
* or Server.previousTransactionPage() to return the next/previous page of
* transactions for this query.
*/
export class TransactionPage {

    /**
    * Builds a TransactionPage from the Horizon response JSON.
    * @param {object} json - The response JSON from Horizon.
    * @param {}
    */
    constructor(json, server) {
        this.records = json._embedded.records;
        this.next = json._links.next.href;
        // this.prev = json._links.previous.href;
    }
}