---
title: " OUs, GP, Join a PC to a Domain, Pinging IP Address"
description: Fourth Lab Series
author: Dave Samuels
date: 2025-01-19T13:30:00.000Z
tags:
  - post
  - featured
image: /assets/blog/article-3.jpg
imageAlt: Fourth Installment
---
## Introduction

<br>
<br>

Today, I will be demonstrating how to create Organizational Units (OUs) and then create users within those OUs. I also plan to log into the new user account I created and run some command-line (CMD) commands on that PC. Additionally, I will explore Group Policy and review its various settings.

<br>
<br>

## Creating a new Organization Unit(OU)

 <br>
 <br>
 
 OUs are directories(folders) within the active directory and their purpose is to keep the AD organized. For example you can have an IT OU or an HR OU folder.
<br>
<br>
1. To create a new OU, right click on your domain controller and then click New > Organizational Unit.
<br>
<br>

![](/assets/blog/creating-hr-ou-1.png)


<br>
<br>

2. Fill out the "Name: " textfield with the whatever you want the OU to be called.
   <br>
   <br>

![](/assets/blog/creating-hr-ou-2.png)


<br>
<br>

![](/assets/blog/creating-it-ou-1.png)


<br>
<br>

### Creating user accounts to put into OUs

<br>
<br>

1. Right click on the directory you want to create the user in and click on "New".
   <br>
   <br>

 

![](/assets/blog/creating-user-maddy-1.png)

<br>
<br>

2. Fill out textfields with the appropriate information
   <br>
   <br>

![](/assets/blog/creating-user-maddy-2.png)

<br>
<br>

3. Give the user a password
   <br>
   <br>

![](/assets/blog/creating-user-maddy-3.png)


<br>
<br>

4. Click on "Finish".
   <br>
   <br>

![](/assets/blog/creating-user-maddy-4.png)

<br>
<br>

5. Drag the user in the OU that you created.
   <br>
   <br>



![](/assets/blog/maddy-in-hr-1.png)

<br>
<br>
6. A error message will pop up. In this case it is fine. Just click "Yes".
<br>
<br>

![](/assets/blog/maddy-in-hr-2.png)


<br>
<br>

7. I will be dragging my helpdesk user account in the "IT" OU.
   <br>
   <br>

![](/assets/blog/helpdesk-in-it.png)


<br>
<br>

## Seeing a user's information through CMD

<br>
<br>

If you wanted to see a user's information such as their user account, what group they are apart of, when their password is expiring, etc, you would type in the  command `net user [domain name] /domain` . Let's see the account information the user "maddy" that we just created.
<br>
<br>


![](/assets/blog/net-user-maddy-domain.png)

<br>
<br>

## Seeing a users information through Active Directory Users and Computers

If we wanted to find Maddy's information using another method we could do that by finding Maddy's profile through Active Directory Users and Computers. To see the full information of the account we have to go into the settings called "Attribute Editor". To get to the settings "Attribute Editor" you have to physically go into the OU that the user is apart of.

<br>
<br>

1. Click on "View" in the navbar and click on advanced settings. 
   <br>
   <br>


   ![](/assets/blog/ad-find-user-6.png)


   <br>
   <br>
2. If you don't know which OU a user is located in, right click on the domain controller and click on "Find"
   <br>
   <br>


   ![](/assets/blog/ad-find-user-2.png)


    <br>
    <br>
3. Type in the user you want to find in the text field and search "Entire Directory".
   <br>
   <br>



![](/assets/blog/maddy-ad-attr-1.png)

<br>
<br>
4. Double click on the user you found in the search results.
<br>
<br>

 

![](/assets/blog/maddy-ad-attr-2.png)

<br>
<br>
5. Click on the "Object" tab.

<br>
<br>



![](/assets/blog/maddy-ad-attr-3.png)

<br>
<br>
6. Here you will see the organizational unit the User is apart of. In my case the user Maddy is in the HR OU.

<br>
<br>



![](/assets/blog/maddy-ad-attr-4.png)

<br>
<br>
7.  Navigate to the OU the user is located in and double click on them.

<br>
<br>

 

![](/assets/blog/maddy-ad-attr-5.png)

<br>
<br>
8. You will see the "Attribute Editor" in the user properties now. Click on it.

<br>
<br>



![](/assets/blog/maddy-ad-attr-6.png)

<br>
<br>
9. In the Attribute Editor you can see additional information about the user. Here I can see the password for Maddy was set on 1/12/2025.

<br>
<br>



![](/assets/blog/maddy-ad-attr-7.png)

<br>
<br>

## Group Policy

 <br>
 <br>
 
 1. You can access the Group Policy in Server Manager from the "Tools" navbar. 
 
 <br>
 <br>


![](/assets/blog/group-policy-managment-1.png)

<br>
<br>


 2. You then navigate through the domain controller and then double click on "Default Domain Policy". You can change a variety of windows settings in the Default Domain Policy" such as changing how long the users password expire, how many login attempts a user can get, etc. 

<br>
<br>



![](/assets/blog/group-policy-managment-2.png)

<br>
<br>
3. Click on the "Settings" tab.
<br>
<br>



![](/assets/blog/group-policy-managment-3.png)

<br>
<br>
4. Here you can see information about the Domain Policy of your domain controller. Under "Account Policies/Account Lockout Policy" I see that the account lockout threshold is set to 0 invalid logon attempts. I am going to change this setting in the following steps.
<br>
<br>



![](/assets/blog/group-policy-managment-4.png)

<br>
<br>

### Setting account lockout threshold

<br>
<br>

1. Right click on "Default Domain" and click on "Edit".
   <br>
   <br>



![](/assets/blog/group-policy-managment-5.png)

<br>
<br>
2. Navigate to Computer Configuration > Policies > Windows Settings > Security Settings. Then double click on "Account Policies".
<br>
<br>



![](/assets/blog/group-policy-managment-6.png)

<br>
<br>

3. Double click on "Account Lockout Policy".
   <br>
   <br>



![](/assets/blog/group-policy-managment-7.png)

<br>
<br>

4. Double click on "Account lockout duration". By default it is set to "Not Defined" and we need to change that in order to change anything else.
   <br>
   <br>



![](/assets/blog/group-policy-managment-8.png)

<br>
<br>

5. Click the checkbox that says "Define this policy settings". It will then set the value for "Account is locked out for: " to 30 minutes. I opted to leave it at thirty minutes. Click apply and then "Ok" once you set the values that you want.
   <br>
   <br>



![](/assets/blog/group-policy-managment-9.png)

<br>
<br>

6. When setting an "account lockout threshold" you will get suggested value changes.
   <br>
   <br>



![](/assets/blog/group-policy-managment-10.png)

<br>
<br>

7. I will be changing my account lockout threshold settings from 5 invalid logon attempts. Double click on "Account lockout threshold"
   <br>
   <br>



![](/assets/blog/group-policy-managment-12.png)

<br>
<br>

8. Set the invalid logon attempts to whatever value you want it to be.
   <br>
   <br>



![](/assets/blog/group-policy-managment-13.png)

<br>
<br>
7. If you navigate to Security Setting > Account Policies > Password Policy, you can see that you are able to change settings under "Policy". 



![](/assets/blog/group-policy-managment-14.png)

<br>
<br>

8. I decided to change my maximum password age to 90 days.
   <br>
   <br>



![](/assets/blog/group-policy-managment-15.png)

<br>
<br>
9. Once you are finished changing setting in the Domain Policy, right-click on "Default Domain Policy" and click on "Enforced."

<br>
<br>



![](/assets/blog/group-policy-managment-16.png)

<br>
<br>
10. Navigate to "Account Policies/Password Policy" in the "Settings" tab with the Default Domain Policy and you should see the changes that you made.

<br>
<br>



![](/assets/blog/group-policy-managment-17.png)

<br>
<br>

## Summary

<br>
<br>

In this lab, I explored how Organizational Units (OUs) are used to organize directories within Active Directory. I created some OUs and added users to them. I logged into one of the newly created user accounts, '"Maddy", and used command-line tools like `net user maddy /domain` to view her information. Additionally, I reviewed Group Policy, including how to access it and set an account lockout threshold. The account lockout threshold specifies the number of failed login attempts allowed before an account is locked. This process also allowed me to modify several Group Policy settings, such as password expiration policies, minimum password length, and more.
