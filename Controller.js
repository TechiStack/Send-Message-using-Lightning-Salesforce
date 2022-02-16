({
    doInit : function(component, event, helper) {
        var action = component.get("c.fetchContact");
        action.setParams({
            "conId" : component.get("v.recordId").toString()
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            var data;
            if(state === 'SUCCESS'){
                var result = response.getReturnValue();
                component.set("v.con", result);
                
                var contact = component.get("v.con");
                var url= "https://m.me/"+contact.FB_Username__c;
                window.open(url, '_blank');
                $A.get("e.force:closeQuickAction").fire();
            }
        });
        $A.enqueueAction(action);
        
        
    }
})
