public class Vlog_facebookCTRL {
	@AuraEnabled 
    public static Contact fetchContact(String conId){
        return [Select Id, FB_Username__c FROM Contact where Id=:conId ];
    }
    
}
