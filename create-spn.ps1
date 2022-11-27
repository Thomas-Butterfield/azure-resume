Import-Module Az

az login

az account show

$subscription = (Get-AzSubscription | Where-Object {$_.Name -like "Azure Subscription 1"}).Id

az ad sp create-for-rbac --name "AzureResume" --role contributor --scopes /subscriptions/$subscription --sdk-auth